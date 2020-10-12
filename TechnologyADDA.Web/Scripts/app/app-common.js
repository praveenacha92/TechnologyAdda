﻿
const messages = {
    //c- created u- updated, d- deleted, f- failed, e-internal server
    C: "Successfully Created",
    U: "Successfully Updated",
    D: "Successfully Deleted",
    F: "Failed",
    E: "Error Occured",

}

const ajaxUrl = {
    //admin related urls
    ADDPOPUPMAINKSILL: '/Admin/AddMainSkill/',
    EDITPOPUPMAINKSILL: '/Admin/EditMainSkill/',
    SAVEMAINSKILL: '/Admin/SaveMainSkill/',
    UPDATEMAINSKILL: '/Admin/UpdateMainSkill/',
    DELETEMAINSKILL: '/Admin/DeleteMainSkill/',

    ADDPOPUPCHILDKSILL: '/Admin/AddChildSkill/',
    EDITPOPUPCHILDKSILL: '/Admin/EditChildSkill/',
    SAVECHILDSKILL: '/Admin/SaveChildSkill/',
    UPDATECHILDSKILL: '/Admin/UpdateChildSkill/',
    DELETECHILDSKILL: '/Admin/DeleteChildSkill/',

    ADDPOPUPTOPIC: '/Admin/AddTopic/',
    EDITPOPUPTOPIC: '/Admin/EditTopic/',
    SAVETOPIC: '/Admin/SaveTopic/',
    UPDATETOPIC: '/Admin/UpdateTopic/',
    DELETETOPIC: '/Admin/DeleteTopic/',

    ADDPOPUPSUBTOPIC: '/Admin/AddSubTopic/',
    EDITPOPUPSUBTOPIC: '/Admin/EditSubTopic/',
    SAVESUBTOPIC: '/Admin/SaveSubTopic/',
    UPDATESUBTOPIC: '/Admin/UpdateSubTopic/',
    DELETESUBTOPIC: '/Admin/DeleteSubTopic/',
    //public related urls

    //user account
    LOGINPOPUP: '/Account/LoginModalPopUp/'
}


function renderRightSideContent(controller, action) {
    $.ajax({
        type: 'POST',
        cache: false,
        url: '/' + controller + '/' + action,
        success: function (data, textStatus, jqXHR) {
            $('#divLoadChildView').html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            failureAlert('Failure');
        }
    })
}

function appendHtmlToModalBody(htmlContent, header) {
    $('#modalHeader').html(header);
    $('#modal-body-content').html(htmlContent);
    $('#myModal').modal('show');
}

function deleteCommon(id, url) {
    $('#myModalDelete').modal('show');
    $('#btnDeleteConfirm').attr('onclick', 'deleteItem(' + id + ',"' + url + '")');
}

function deleteItem(id, url) {
    $.ajax({
        type: 'POST',
        cache: false,
        url: url,
        data: { Id: id },
        success: function (data, textStatus, jqXHR) {

        },
        error: function (jqXHR, textStatus, errorThrown) {
            failureAlert('Failure');
        }
    })
}

function showSnackBar(messgae) {
    $('#myModal').modal('hide');
    let bgColor = '#00ce68';
    if (messgae == 'E' || messgae == 'F') {
        bgColor = '#e65251';
    }

    // Get the snackbar DIV
    var divSnackbar = document.getElementById("snackbar")

    // Add the "show" class to DIV
    divSnackbar.className = "show";
    divSnackbar.innerText = messgae;
    divSnackbar.style.backgroundColor = bgColor;

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { divSnackbar.className = divSnackbar.className.replace("show", ""); }, 4000);
}

