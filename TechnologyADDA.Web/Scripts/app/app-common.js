

const ajaxUrl = {
    //admin related urls
    addpopupmainksill: '/Admin/AddMainSkill/',
    editpopupmainksill: '/Admin/EditMainSkill/',
    savemainskill: '/Admin/SaveMainSkill/',
    updatemainskill: '/Admin/UpdateMainSkill/',
    deletemainskill: '/Admin/DeleteMainSkill/'


    //public related urls

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