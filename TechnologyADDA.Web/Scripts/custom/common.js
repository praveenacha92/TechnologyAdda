$(document).ready(function () {

   
})


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

function validationMessageBox(msg, title, __focusedObj) {
    if (title == "")
        title = "You must fill all below fields";
    swal({
        html: true,
        title: title,
        text: msg,
        buttons: {
            confirm: {
                text: "OK",
                visible: true,
                closeModal: true
            }
        }
    }).then(function (value) {
        if (__focusedObj) {
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
            __focusedObj = null;
        }
    });
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