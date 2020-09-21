
function addMainSkill() {
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajaxUrl.addpopupmainksill,
        success: function (data, status) {
            if (data.modalBodyHtml != null)
                appendHtmlToModalBody(data.modalBodyHtml, data.modalHeader);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
}

function editMainSkill(id) {
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajaxUrl.editpopupmainksill,
        success: function (data, status) {
            if (data.modalBodyHtml != null)
                appendHtmlToModalBody(data.modalBodyHtml, data.modalHeader);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
}

function deleteConfirmMainSkill(id) {
    deleteCommon(id, ajaxUrl.deletemainskill);
}


function saveMainSkill() {
    if ($ec.validate("dvMainSkill", $ec.ruleCallback, "")) {

        var mainSkillObj = {
            MainSkillName : "Test"
        }

        $.ajax({
            type: 'POST',
            cache: false,
            url: ajaxUrl.savemainskill,
            data: { 'mainSkill': mainSkillObj },
            success: function (data, textStatus, jqXHR) {

            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }
}