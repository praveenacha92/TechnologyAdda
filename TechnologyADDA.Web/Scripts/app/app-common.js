

const ajaxUrl = {
    //admin related urls
    addpopupmainksill: '/Admin/AddMainSkill/',
    editpopupmainksill: '/Admin/EditMainSkill/',
    savemainskill: '/Admin/SaveMainSkill/',
    updatemainskill: '/Admin/UpdateMainSkill/',
    deletemainskill: '/Admin/DeleteMainSkill/',

    addpopupchildksill: '/Admin/AddChildSkill/',
    editpopupchildksill: '/Admin/EditChildSkill/',
    savechildskill: '/Admin/SaveChildSkill/',
    updatechildskill: '/Admin/UpdateChildSkill/',
    deletechildskill: '/Admin/DeleteChildSkill/',

    addpopuptopic: '/Admin/AddTopic/',
    editpopuptopic: '/Admin/EditTopic/',
    savetopic: '/Admin/SaveTopic/',
    updatetopic: '/Admin/UpdateTopic/',
    deletetopic: '/Admin/DeleteTopic/',

    addpopupsubtopic: '/Admin/AddSubTopic/',
    editpopupsubtopic: '/Admin/EditSubTopic/',
    savesubtopic: '/Admin/SaveSubTopic/',
    updatesubtopic: '/Admin/UpdateSubTopic/',
    deletesubtopic: '/Admin/DeleteSubTopic/',
    //public related urls

    //user account
    loginpopup: '/Account/LoginModalPopUp/'
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

