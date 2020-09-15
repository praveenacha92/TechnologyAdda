/*
Author : Rajesh Jinaga
File : ezval-1.0.js
Javascript Validation Library v1.0 
*/
var __validateFocusedObj;
(function () {
    window.ezValidation = function () {
    };
    window.ezValidation.prototype = {
        _plugins: [],
        _dis_rules_array: new Array(),
        encVal: function (element) {
            return escape(document.getElementById(element).value);
        },
        obj: function (element) {
            return document.getElementById(element);
        },
        trim: function (str) {
            return str.replace(/^\s+|\s+$/g, "");
        },
        //set value for input, select, textarea
        val: function (elementId, strVal) {
            if (strVal == undefined) {
                return this.obj(elementId).value;
            }
            else {
                this.obj(elementId).value = strVal;
            }
        },
        ajax: function (url) {
            var xmlhttp = null;
            try {
                xmlhttp = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
                xmlhttp.open("GET", url, false);
                xmlhttp.send(null);
            }
            catch (e) { }
            if (xmlhttp != null && xmlhttp.status == 200) {
                return this.trim(xmlhttp.responseText);
            } else {
                return "";
            }
        },
        clear: function (elementId, exclude_es_ar) {
            var eleArr = this.getElements(this.obj(elementId), ['input', 'select', 'textarea']); var flag = false; for (index = 0; index < eleArr.length; index++) { if (eleArr[index].type == "text" || eleArr[index].type == "select-one" || eleArr[index].type == "select-multiple" || eleArr[index].type == "password" || eleArr[index].type == "textarea" || eleArr[index].type == "file" || eleArr[index].type == "hidden") { if (exclude_es_ar != undefined && exclude_es_ar != null) { for (var l1_index = 0; l1_index < exclude_es_ar.length; l1_index++) { if (exclude_es_ar[l1_index] == eleArr[index].name) { flag = true; break; } } } if (!flag) eleArr[index].value = ''; flag = false; } }
        },

        isFormDirty: function (objForm, msg, exclude_es_str_csv) {
            var el, opt, hasDefault, i = 0, j;

            if (exclude_es_str_csv != undefined)
                exclude_es_str_csv = "," + exclude_es_str_csv + ",";

            while (el = objForm.elements[i++]) {

                if (exclude_es_str_csv != undefined && exclude_es_str_csv.indexOf("," + el.id + ",") > -1) {
                    continue;
                }

                switch (el.type) {
                    case 'text':
                    case "password":
                    case 'textarea':
                    case 'hidden':
                        if (!/^\s*$/.test(el.value) && el.value != el.defaultValue) {
                            return true;
                        }
                        break;
                    case 'checkbox':
                    case 'radio':
                        if (el.checked != el.defaultChecked) {
                            return true;
                        }
                        break;
                    case 'select-one':
                    case 'select-multiple':
                        j = 0, hasDefault = false;
                        while (opt = el.options[j++]) {
                            if (opt.defaultSelected) {
                                hasDefault = true;
                            }
                        }
                        j = hasDefault ? 0 : 1;
                        while (opt = el.options[j++]) {
                            if (opt.selected != opt.defaultSelected) {
                                return true;
                            }
                        }
                        break;
                }
            }
            if (msg != null || msg != undefined) {
                this.messagebox(msg);
            }
            return false;
        },
        plugin: function (def, fBody) {
            this._plugins[this._plugins.length] = { keyW: def, fBody: fBody };
        },
        isArray: function (objE) {
            return objE.constructor.toString().indexOf("Array") == -1 ? false : true;
        },
        addRule: function (element, strRule) {
            this.obj(element).setAttribute('rule', strRule);
        },
        customMessage: false,
        //Type-1: Alert, Type-2:AdjacentToField, Type-3:Panel
        errorDisplayType: 1,
        errorDisplayPanelId: null,
        errorDisplayMode: function (type, p_elementId) {
            this.errorDisplayType = type;
            this.errorDisplayPanelId = p_elementId;
        },
        validate: function (rootElement, fnErrorCallback, pagename) {
            if (fnErrorCallback == undefined) {
                fnErrorCallback = this.ruleCallback;
            }

            var objVal = this.checkRules(rootElement, fnErrorCallback);
            if (objVal.errorsExist == false) {
                return true;
            }
            else {
                __validateFocusedObj = objVal.firstErrObj;
                if (this.errorDisplayType == 3) {
                    this.obj(this.errorDisplayPanelId).innerHTML = objVal.errorMsg.replace(/\n/g, "<br />");
                } else if (this.errorDisplayType == 1) {
                    this.messagebox(objVal.errorMsg, pagename);
                }
                try {
                    //objVal.firstErrObj.focus();
                    //if (objVal.firstErrObj.select != undefined) {
                    //    objVal.firstErrObj.select();
                    //}
                } catch (ex) { }
            }
            return false;
        },
        errCssClass: undefined,
        ruleCallback: function (objEle, isErr, msg) {
            if (isErr) {
                if (this.errCssClass != undefined && objEle.className.indexOf(this.errCssClass) < 0 && this.errCssClass != '') {
                    objEle.className = this.errCssClass + ' ' + (objEle.className == undefined ? '' : objEle.className);
                }
                objEle.title = msg;
            }
            else {
                if (this.errCssClass != undefined) {
                    objEle.className = objEle.className.replace(this.errCssClass, "");
                }
                objEle.title = '';
            }
        },
        //Validations, rule
        checkRules: function (rootElement, fnErrorCallback) {
            // added by pratap
            // check root element
            rootElement = (typeof (rootElement) == "object") ? rootElement : this.obj(rootElement);

            //Find input elements
            //var eleArr = this.getElements(this.obj(rootElement), ['input', 'select', 'textarea']);
            var eleArr = this.getElements(rootElement, ['input', 'select', 'textarea']);
            var errorMessages = '', index, rule;
            var _errorsExist = false;
            var _firstErrObj;
            
            for (index = 0; index < eleArr.length; index++) {
                if (eleArr[index].type == "text" || eleArr[index].type == "select-one" || eleArr[index].type == "select-multiple"
                    || eleArr[index].type == "password" || eleArr[index].type == "textarea" || eleArr[index].type == "file"
                    || eleArr[index].type == "radio" || eleArr[index].type == "checkbox" || eleArr[index].type == "hidden"
                ) {
                    rule = eleArr[index].getAttribute('rule');
                    if (rule == null) { continue; }
                    //rule = eval('[' + rule + ']');
                    var ruleStr = this.trim(rule);
                    try {
                        rule = eval("[" + ruleStr.substring(1, ruleStr.length - 1) + "]");
                    } catch (e) {
                        this.messagebox("Error has occured, while evaluting the rule. Please check the rule text. " + ruleStr);
                        continue;
                    }

                    var result = this.runRule(rule, eleArr[index]); //if rule broken returns defined rule index 
                    if (result.error && result.wrule == 'url') { //server validation
                        if (this.errorDisplayType == 2) { //adjacentToelement
                            if (eleArr[index].nextSibling != null && eleArr[index].nextSibling.className == "error_ecvalidation___") {
                                eleArr[index].nextSibling.outerHTML = "";
                            }
                            eleArr[index].insertAdjacentHTML("afterend", "<span class='error_ecvalidation___'>" + result.errMsg + "</span>");
                        } else {
                            if (!errorMessages.includes(result.errMsg))
                                errorMessages += "\n" + result.errMsg;
                        }
                        if (fnErrorCallback != undefined) {
                            fnErrorCallback(eleArr[index], true, result.errMsg);
                        }
                        //Set first error object
                        if (_firstErrObj == undefined) {
                            _firstErrObj = eleArr[index];
                        }
                        _errorsExist = true;
                    }
                    else if (result.error) {
                        var id = eleArr[index].id;
                        $("#" + id).attr("required", "");
                        if (eleArr[index].type == "select-one" || eleArr[index].type == "select-multiple")
                            $("#" + id).closest('div').addClass('required');

                        else if ($(eleArr[index]).attr('data-role') == "dropdownlist" || $(eleArr[index]).attr('data-role') =="multiselect")
                            $("#" + id).parent().addClass('required');

                        if (fnErrorCallback != undefined) {
                            fnErrorCallback(eleArr[index], true, result.errMsg);
                        }
                        if (this.errorDisplayType == 2) { //adjacentToelement
                            if (eleArr[index].nextSibling != null && eleArr[index].nextSibling.className == "error_ecvalidation___") {
                                eleArr[index].nextSibling.outerHTML = "";
                            }

                            eleArr[index].insertAdjacentHTML("afterend", "<span class='error_ecvalidation___'> * " + result.errMsg + "</span>");
                        } else {
                            if (!errorMessages.includes(result.errMsg))
                                errorMessages += "\n" + result.errMsg;
                        }
                        //Set first error object
                        if (_firstErrObj == undefined) {
                            _firstErrObj = eleArr[index];
                        }
                        _errorsExist = true;
                    } //if end
                    else {                       
                        if (fnErrorCallback != undefined) {
                            fnErrorCallback(eleArr[index], false);
                        }
                        if (this.errorDisplayType == 2 && eleArr[index].nextSibling != null && eleArr[index].nextSibling.className == "error_ecvalidation___") { //adjacentToelement
                            eleArr[index].nextSibling.outerHTML = "";
                        }
                    }
                } //if end

            } //for end 
            return { errorMsg: errorMessages, firstErrObj: _firstErrObj, errorsExist: _errorsExist };
        },
        runRule: function (rule, elementObj) {

            var msgText = null, ruleIndex = -1, msgIndex = 0;
            if (!this.isRuleEnabled(elementObj.id)) {
                return { errMsg: msgText, error: false };
            }

            for (var index = 1; index < rule.length; index++) {
                if (typeof (rule[index]) == 'function') {
                    msgText = rule[index](elementObj);
                    if (this.trim(msgText.toString()) == '') {
                        msgText = null;
                    }
                    else {
                        return { errMsg: msgText, error: true, wrule: null };
                    }

                } else {                    
                    var _val = '';
                    if (elementObj.type == "checkbox") {
                        _val = elementObj.checked ? elementObj.value : '';
                    } else if (elementObj.type == "radio") {
                        var _rd_elements = document.getElementsByName(elementObj.name);
                        for (var i_rd = 0; i_rd < _rd_elements.length; i_rd++) {
                            if (_rd_elements[i_rd].type == 'radio' && _rd_elements[i_rd].checked == true) {
                                _val = elementObj.value == '' ? '-1' : elementObj.value;
                                break;
                            }
                        }
                    } else if (elementObj.type == "select-multiple") {

                        _val = $("#" + elementObj.id).val().join();
                    }
                    else {                     
                        _val = elementObj.value;
                    }
                    var ruleStrPart1 = "";
                    var part2 = "";
                    if (typeof (rule[index]) == "object") {
                        ruleStrPart1 = rule[index].type;
                        if (rule[index].format != undefined) {
                            part2 = rule[index].format;
                        }
                    } else {
                        //rule[index] split with : and first part is rule , next part is info 
                        ruleStrPart1 = rule[index].indexOf(':') > -1 ? rule[index].substring(0, rule[index].indexOf(':')) : rule[index];
                        part2 = rule[index].indexOf(':') > -1 ? rule[index].substring(rule[index].indexOf(':') + 1) : "";
                    }

                    switch (ruleStrPart1.toLowerCase()) {
                        case 'required':
                            ruleIndex = (this.trim(_val) == '' ? 1 : -1);
                            break;
                        case 'email':
                            //ruleIndex = (this.trim(_val) == '' || this.isEmail(_val) ? -1 : 2);
                            ruleIndex = (this.trim(_val) == '' ? 2 : (this.isEmail(_val) ? -1 : 14));
                            break;
                        case 'date': //check date format (dd/mm/yyyy)
                            ruleIndex = (this.trim(_val) == '' || this.isDate(_val, part2) ? -1 : 3);
                            break;
                        case 'currency':
                            ruleIndex = (this.trim(_val) == '' || this.isCurrency(_val) ? -1 : 4);
                            break;
                        case 'decimal': //prec, len
                            ruleIndex = (this.trim(_val) == '' || this.isDecimal(_val, part2) ? -1 : 5);
                            break;
                        case 'int': //number of bits to allow
                            ruleIndex = (this.trim(_val) == '' || this.isInt(_val, part2) ? -1 : 6);
                            break;
                        case 'unsigned-int': //number of bits to allow
                            ruleIndex = (this.trim(_val) == '' || this.isUnsInt(_val, part2) ? -1 : 7);
                            break;
                        case 'extension': //file extension:txt (multiple extension supported by pipe (|) sign)
                            ruleIndex = (this.checkFileExtension(this.trim(_val), part2) ? -1 : 8);
                            break;
                        case 'alphanumeric': //number of bits to allow
                            ruleIndex = (this.trim(_val) == '' || this.isAlphaNumeric(_val, part2) ? -1 : 9);
                            break;
                        case 'alphanumericspace': //number of bits to allow
                            ruleIndex = (this.trim(_val) == '' || this.isAlphaNumericSpace(_val, part2) ? -1 : 11);
                            break;
                        case 'maxlen':
                            if (part2 != '') {
                                ruleIndex = (this.trim(_val) == '' || _val.length == parseInt(part2) ? -1 : 12);
                            }
                            else {
                                ruleIndex = -1;
                            }
                            break;
                        case 'minlen':
                            if (part2 != '') {
                                ruleIndex = (this.trim(_val) == '' || _val.length >= parseInt(part2) ? -1 : 13);
                            }
                            else {
                                ruleIndex = -1;
                            }
                            break;
                        case "range":
                            var rangeData = part2.split(",");
                            var rangeCond = parseFloat(this.trim(_val)) >= parseFloat(rangeData[0]) && parseFloat(this.trim(_val)) <= parseFloat(rangeData[1]);
                            ruleIndex = (this.trim(_val) == '' || rangeCond ? -1 : 9);
                            break;
                        case "regexp":
                            ruleIndex = (this.trim(_val) == '' || new RegExp(part2).test(this.trim(_val)) ? -1 : 10);
                            break;
                        case 'url':
                            msgText = this.ajax(part2 + escape(_val));
                            if (msgText == '') { ruleIndex = -1; msgText = null; }
                            else { ruleIndex = 0; }
                            msgIndex--;
                            break;
                        default:
                            msgIndex--;
                            //{keyW:def, fBody: fBody }
                            var plug_flag = false;
                            for (var iP = 0; iP < this._plugins.length; iP++) {
                                if (this._plugins[iP].keyW.toLowerCase() == ruleStrPart1.toLowerCase() && typeof (this._plugins[iP].fBody) == 'function') {
                                    var mText = undefined;
                                    if (typeof (rule[index]) == "object" && rule[index].msg != undefined) {
                                        mText = rule[index].msg;
                                    }
                                    var pluginReturn = this._plugins[iP].fBody({ caption: rule[0], type: ruleStrPart1, format: part2, obj: elementObj, val: _val });
                                    if (typeof (pluginReturn) == "boolean") {
                                        ruleIndex = pluginReturn ? -1 : 0;
                                    } else {
                                        ruleIndex = pluginReturn.isValid ? -1 : 0;
                                        if (pluginReturn.msg != undefined && (mText == undefined)) {
                                            msgText = pluginReturn.msg;
                                        }
                                    }
                                    plug_flag = true;
                                    break;
                                }
                            }

                            if (this.debug && !plug_flag) { this.messagebox('Invalid rule.'); }
                            break;
                    } //switch end
                    //if validation rule broken

                    if (ruleIndex != -1) {

                        if (this.customMessage && msgText == null) {
                            var msgTextAr = rule[0].split('\n');

                            if (msgTextAr.length >= msgIndex + 1 && msgIndex > -1) {
                                msgText = msgTextAr[msgIndex];
                            } else {
                                msgText = "<cutom message was not defined for this rule.>";
                            }
                        }
                        else if (ruleIndex != 0 || msgText == null) {
                            if (typeof (rule[index]) == "object" && rule[index].msg != undefined) {
                                msgText = rule[index].msg;
                            } else {
                                msgText = this.stdMessage(rule[0], elementObj.type, part2)[ruleIndex];
                            }
                            if (typeof (this.messageCallback) == "function") {
                                msgText = this.messageCallback({ errMsg: msgText, element: elementObj });
                            }
                        }
                        return { errMsg: msgText, error: true, wrule: ruleStrPart1.toLowerCase() };
                    }
                    msgIndex++;
                } //else end
            } //for end
            return { errMsg: msgText, error: false, wrule: null };
        },
        getElements: function (rootElement, sElements) {
            var arrListEle = new Array();
            for (var i = 0; i < sElements.length; i++) {
                var eleArray = rootElement.getElementsByTagName(sElements[i]);
                for (var e_i = 0; e_i < eleArray.length; e_i++) {
                    arrListEle.push(eleArray[e_i]);
                }
            }

            var testElement = arrListEle[0];
            if (!testElement) return [];

            if (testElement.sourceIndex) {
                arrListEle.sort(function (a, b) {
                    return a.sourceIndex - b.sourceIndex;
                });
            }
            else if (testElement.compareDocumentPosition) {
                arrListEle.sort(function (a, b) {
                    return 3 - (a.compareDocumentPosition(b) & 6);
                });
            }
            return arrListEle;
        },
        checkFileExtension: function (str, exts) {
            if (str == "") return true;
            var arExt = exts.split('|');
            var flag = false;
            for (var i = 0; i < arExt.length; i++) {
                if (str.substring(str.length - arExt[i].length).toLowerCase() == arExt[i].toLowerCase()) {
                    flag = true;
                    break;
                }
            }
            return flag;
        },
        isEmail: function (str) {
            //return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(str));
            return (/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/.test(str));
        },
        isDecimal: function (str, prec_scale) {
            var prec, scale;
            prec_scale = prec_scale.split(',');
            prec = prec_scale.length == 2 ? prec_scale[0] : undefined;
            scale = prec_scale.length == 2 ? prec_scale[1] : undefined;

            var expr_dec = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
            var flag = String(str).search(expr_dec) != -1;
            if (flag) {
                if (prec != undefined) {
                    str = str.replace('+', '').replace('-', '');
                    str = parseFloat(str).toString();
                    flag = (str.indexOf('.') == -1 ? str.length : str.indexOf('.')) <= prec - (scale == undefined ? 0 : scale);
                    if (flag && scale != undefined && str.indexOf('.') != -1) {
                        flag = str.substring(str.indexOf('.') + 1).length <= scale;
                    }
                }
            }
            return flag;
        },
        isInt: function (str, size, evt) {
            if (evt) {
                var keyCode = (evt.which) ? evt.which : evt.keyCode;
                if (typeof (keyCode) == "undefined") {
                    keyCode = window.event.keyCode;
                }
                if (keyCode == 8 || keyCode == 9)
                    return true;
                str = String.fromCharCode(keyCode);
            }
            var expr_int = /^\s*(\+|-)?\d+\s*$/;
            var flag = String(str).search(expr_int) != -1;
            if (size != undefined && this.isUnsInt(size)) {
                flag = (Math.abs(parseInt(str)) <= Math.pow(2, parseInt(size) - 1));
            }
            if ((evt.ctrlKey && (keyCode == 118 || keyCode == 120 || keyCode == 99)) || keyCode == 46) {
                if (keyCode == 118) {
                    setTimeout(function () {
                        var ele = evt.srcElement || evt.target;
                        flag = String(ele.value).search(expr_int) != -1;
                        if (!flag) ele.value = '';
                    }, 10);
                }
                return true;
            }
            return flag;
        },
        isAlphaNumeric: function (str, size, evt) {
            if (evt) {
                var keyCode = (evt.which) ? evt.which : evt.keyCode;
                if (typeof (keyCode) == "undefined") {
                    keyCode = window.event.keyCode;
                }
                if (keyCode == 8 || keyCode == 9)
                    return true;
                str = String.fromCharCode(keyCode);
            }
            var expr_alphanumeric = /^[a-zA-Z0-9]*$/;
            var flag = String(str).search(expr_alphanumeric) != -1;
            return flag;
        },
        isAlphaNumericSpace: function (str, size, evt) {
            if (evt) {
                var keyCode = (evt.which) ? evt.which : evt.keyCode;
                if (typeof (keyCode) == "undefined") {
                    keyCode = window.event.keyCode;
                }
                if (keyCode == 8 || keyCode == 9)
                    return true;
                str = String.fromCharCode(keyCode);
            }
            var expr_alphanumericspace = /^[a-zA-Z0-9 ]*$/;
            var flag = String(str).search(expr_alphanumericspace) != -1;
            return flag;
        },
        isUnsInt: function (str, size) {
            var expr_int = /^\s*(\+)?\d+\s*$/;
            var flag = String(str).search(expr_int) != -1;
            if (size != undefined && this.isUnsInt(size)) {
                flag = (Math.abs(parseInt(str)) <= Math.pow(2, parseInt(size) - 1));
            }
            return flag;
        },
        isCurrency: function (str) {
            var expr_int = /^\s*(\+|-)?((\d+(\.\d\d)?)|(\.\d\d))\s*$/;
            return String(str).search(expr_int) != -1;
        },
        //mm/dd/yyyy, dd/mm/yyyy
        isDate: function (dtStr, format) {
            var exp_date = /^\d{1,2}(\/)\d{1,2}\1\d{4}$/;
            var flag = (String(dtStr).search(exp_date) != -1);
            if (flag) {
                var datePartAr = dtStr.split('/');
                var y, m, d;
                if (format == 'mm/dd/yyyy') {
                    m = datePartAr[0]; d = datePartAr[1]; y = datePartAr[2];
                } else if (format == 'dd/mm/yyyy') {
                    d = datePartAr[1]; m = datePartAr[0]; y = datePartAr[2];
                } else {
                    if (this.debug) { this.messagebox('Invalid date format which is defined in rule.'); }
                    return false;
                }

                m = eval(m.toString()) - 1;
                var tempDate = new Date(parseInt(y), parseInt(m), parseInt(d, 10));
                //var r_y = (tempDate.getYear() < 1000 || tempDate.getYear() > 2899) ? (tempDate.getYear() + 1900) : tempDate.getYear();
                var r_y = (tempDate.getYear() + 1900);
                if ((r_y == y) &&
                    (m == tempDate.getMonth()) &&
                    (d == tempDate.getDate())) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        },
        enableRule: function (elementId) {
            if (!this.isArray(elementId))
                elementId = [elementId];

            for (var i = this._dis_rules_array.length - 1; i >= 0; i--) {
                for (var j = 0; j < elementId.length; j++) {
                    if (this._dis_rules_array[i] == elementId[j]) {
                        this._dis_rules_array.splice(i, 1);
                        break;
                    }
                }
            }
        },
        disableRule: function (elementId) {
            if (this.isArray(elementId)) {
                for (var i = 0; i < elementId.length; i++)
                    this._dis_rules_array.push(elementId[i]);
            }
            else {
                this._dis_rules_array.push(elementId);
            }
        },
        isRuleEnabled: function (elementId) {
            var flag = true;
            if (this._dis_rules_array != undefined) {
                for (var i = 0; i < this._dis_rules_array.length; i++) {
                    if (this._dis_rules_array[i] == elementId) {
                        flag = false;
                        break;
                    }
                }
            }
            return flag;
        },
        debug: true,
        messageCallback: null,
        stdMessage: function (str, type, cm) {
            var prefix = (type == 'file') ? 'Upload' : ((type == 'file' || type == 'text' || type == 'password' || type == 'textarea') ? '' : '');
            return ['',
                prefix + ' ' + str,
                prefix + '' + str,
                prefix + ' Valid1 ' + str,
                prefix + ' Valid2 ' + str,
                prefix + ' Decimal Value',
                prefix + ' Integer Value',
                prefix + ' Positive Integer Value',
                prefix + ' Valid Extension (' + cm + ')',
                prefix + ' Valid Range (' + cm + ')',
                str,
                str,
                prefix + ' Maximum ' + cm + ' Characters.',
                prefix + ' Minimum ' + cm + ' Characters.',
                prefix + ' Please Enter Valid Email Address.'                
            ];
        },
        validateAll: function (rootElements, fnErrorCallback) {
            if (fnErrorCallback == undefined) {
                fnErrorCallback = this.ruleCallback;
            }

            var elements = rootElements.split(',');
            var errorMessages = '';
            for (i = 0; i < elements.length; i++) {
                var objVal = this.checkRules(elements[i], fnErrorCallback);
                if (objVal.errorsExist == true) {
                    errorMessages += objVal.errorMsg;
                }
            }
            if (errorMessages == '') {
                return true;
            }
            else {
                if (this.errorDisplayType == 3) {
                    this.obj(this.errorDisplayPanelId).innerHTML = errorMessages.replace(/\n/g, "<br />");
                } else if (this.errorDisplayType == 1) {
                    this.messagebox(errorMessages);
                }
                //try {
                //    objVal.firstErrObj.focus();
                //    if (objVal.firstErrObj.select != undefined) {
                //        objVal.firstErrObj.select();
                //    }
                //} catch (ex) { }
            }
            return false;
        },
        messagebox: function (msgText, title) {
            //errorDialog(msgText, true, __validateFocusedObj);          
            //swal({ text: msgText, type: "warning" }, function () {
            //    setTimeout(function () {                   
            //    }, 10);
            //});
            validationMessageBox(msgText, title, __validateFocusedObj);
            //swal("British Columbia Message Wizard",msgText);
        }
    };
    //define instance of ezValidation
    //define instance of ezValidation
    window.$v = new window.ezValidation();
    window.$ec = new window.ezValidation();
})();