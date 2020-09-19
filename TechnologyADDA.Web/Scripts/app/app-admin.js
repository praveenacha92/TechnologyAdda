
function addEditMainSkill() {
    $.ajax({
        type: 'POST',
        cache: false,
        url: '/Admin/AddEditMainSkill/',
        success: function (data) {
            if (data != null)
                appendHtmlToModalBody(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            failureAlert('Failure');
        }
    })
}