
const messages = {
    //c- created u- updated, d- deleted, f- failed, e-internal server
    CREATED: "Successfully Created",
    UPDATED: "Successfully Updated",
    DELETED: "Successfully Deleted",
    FAILED: "Failed",
    ERROR: "Error Occured",

};

const ajaxUrl = {
    //admin related urls
    ADDPOPUPMAINKSILL: '/Admin/AddMainSkill/',
    EDITPOPUPMAINKSILL: '/Admin/EditMainSkill/',
    SAVEMAINSKILL: '/Admin/SaveMainSkill/',
    UPDATEMAINSKILL: '/Admin/UpdateMainSkill/',
    DELETEMAINSKILL: '/Admin/DeleteMainSkill/',
    GETMAINSKILL: '/Admin/ManageMainSkill/',


    ADDPOPUPCHILDKSILL: '/Admin/AddChildSkill/',
    EDITPOPUPCHILDKSILL: '/Admin/EditChildSkill/',
    SAVECHILDSKILL: '/Admin/SaveChildSkill/',
    UPDATECHILDSKILL: '/Admin/UpdateChildSkill/',
    DELETECHILDSKILL: '/Admin/DeleteChildSkill/',
    GETCHILDSKILL: '/Admin/ManageChildSkill/',

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
    LOGINPOPUP: '/Account/LoginModalPopUp/',
    SAVEUSERACCOUNT: '/Account/SaveUserAccount/'

}


function renderRightSideContent(controller, action) {
    $.ajax({
        type: 'POST',
        cache: false,
        url: '/' + controller + '/' + action,
        success: function (data, textStatus, jqXHR) {
            $('#divLoadChildView').html(data);
            $("input[name='chkActive']").prop("disabled", true);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            
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
            $('#myModalDelete').modal('hide');
            if (data.Success > 0)
                showSnackBar(messages.DELETED, data.Success, ajaxUrl.GETMAINSKILL);
            else
                showSnackBar(messages.FAILED, data.Success);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            showSnackBar(messages.ERROR);
        }
    })
}

function showSnackBar(messgae, status, actionUrl) {
    $('#myModal').modal('hide');
    let bgColor = '#e65251';
    if (status === 1) {
        bgColor = '#00ce68';
        reloadGrid(actionUrl);
    }

    // Get the snackbar DIV
    var divSnackbar = document.getElementById("snackbar")

    // Add the "show" class to DIV
    divSnackbar.innerText = messgae;
    divSnackbar.style.backgroundColor = bgColor;
    divSnackbar.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { divSnackbar.className = divSnackbar.className.replace("show", ""); }, 3000);
}

function reloadGrid(actionUrl) {
    const splittedArray = actionUrl.split("/");
    const filtered = splittedArray.filter(function (el) {
        return el != "";
    });
    if (filtered != null) {
        let controller = filtered[0];
        let action = filtered[1];
        renderRightSideContent(controller, action);
    }
}