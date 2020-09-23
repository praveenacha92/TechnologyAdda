

function openLoginPopUp() {
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajaxUrl.loginpopup,
        success: function (data, status) {
            if (data.modalBodyHtml != null)
                appendHtmlToModalBody(data.modalBodyHtml, data.modalHeader);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
}