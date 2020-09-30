

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

