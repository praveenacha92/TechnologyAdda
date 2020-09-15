$(document).ready(function () {

   
})

function allowNumbers(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function validateEmail(currentObj) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(currentObj.value) == false) {
        failureAlert('Invalid email address.');
        $(currentObj).focus();
        return false;
    } else if (!validateDomainEmail(currentObj.value)) {
        failureAlert('Invalid your domain email adrees.');
        $(currentObj).focus();
        return false;
    }
    return true;
}

function validateDomainEmail(value) {
    var isCheck = value.includes("@jnettechnologies.com");
    if (!isCheck) {
        return false;
    }
    return true;
}

function SwalAlertMessage(msg, title, objToFocus, btntype) {
    var buttonName = '';
    if (btntype == "CNT")
        buttonName = "CONTINUE";
    else
        buttonName = "OK";
    window.setTimeout(function () {
        if (title == "")
            title = "British Columbia";
        swal({
            content: true,
            title: title,
            text: msg,
            //type: "warning",
            buttons: {
                confirm: {
                    text: buttonName,
                    visible: true,
                    closeModal: true
                }
            }
        }).then(function (value) {
            if (!(objToFocus == undefined || objToFocus == null || objToFocus == "")) {
                $(objToFocus).focus();
            }
        });
    }, 100);
}

function SwalAlertMessageRedirect(msg, title, url) {
    window.setTimeout(function () {
        if (title == "")
            title = "British Columbia";
        swal({
            content: true,
            title: title,
            text: msg,
            //type: "warning",
            buttons: {
                confirm: {
                    text: "OK",
                    visible: true,
                    closeModal: true
                }
            }
        }).then(function (value) {
            if (url != "") {
                bindTabContentData(url);
            }
        });
    }, 100);
}

function validationMessageBox(msg, title, __focusedObj) {
    if (title == "")
        title = "British Columbia";
    swal({
        html: true,
        title: title,
        text: msg,
        // type: "warning",
        buttons: {
            //cancel: {
            //    text: "Cancel",
            //    visible: true,
            //    closeModal: true,
            //},
            confirm: {
                text: "OK",
                visible: true,
                closeModal: true
            }
        }
    }).then(function (value) {
        if (__focusedObj) {
            if ($(__focusedObj).attr("data-role") == "dropdownlist") {
                var id = $(__focusedObj).attr("id");
                $("#" + id).data("kendoDropDownList").focus();
                $("#" + id).data("kendoDropDownList").open();
            }
            else if ($(__focusedObj).attr("data-role") == "combobox") {
                var id = $(__focusedObj).attr("id");
                $("#" + id).data("kendoComboBox").focus();
            }
            else {
                __focusedObj.focus();
                if (__focusedObj.nodeName == "SELECT") {
                    var selectElement = __focusedObj.id;
                    var TabIndex = __focusedObj.tabIndex;
                    SetDropdownFocus(selectElement);
                }
                else {
                    if (__focusedObj.select != undefined) {
                        window.focus();
                        __focusedObj.focus();
                    }
                }
            }
            __focusedObj = null;
        }
    });
}

function SwalConfirmMessage(msg, title, from, parameters) {
    if (title == "")
        title = "British Columbia";
    swal({
        title: title,
        text: msg,
        buttons: true,
        dangerMode: true,
    }).then(function (willDelete) {
        if (willDelete) {
            switch (from.toUpperCase()) {
                case 'USERDELETE':
                    DeleteUser(parameters);
                    break;
                default:
                    break;
            }
        }
    });
}