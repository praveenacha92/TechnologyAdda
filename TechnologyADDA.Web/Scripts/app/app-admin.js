
function addMainSkill() {
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajaxUrl.ADDPOPUPMAINKSILL,
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
        url: ajaxUrl.EDITPOPUPMAINKSILL,
        success: function (data, status) {
            if (data.modalBodyHtml != null)
                appendHtmlToModalBody(data.modalBodyHtml, data.modalHeader);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
}

function deleteConfirmMainSkill(id) {
    deleteCommon(id, ajaxUrl.DELETEMAINSKILL);
}

function saveMainSkill() {
    if ($ec.validate("dvMainSkill", $ec.ruleCallback, "")) {

        var mainSkillObj = {
            MainSkillName : "Test"
        }

        $.ajax({
            type: 'POST',
            cache: false,
            url: ajaxUrl.SAVEMAINSKILL,
            data: { 'mainSkill': mainSkillObj },
            success: function (data, textStatus, jqXHR) {

            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }
}


function addChildSkill() {
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajaxUrl.ADDPOPUPCHILDKSILL,
        success: function (data, status) {
            if (data.modalBodyHtml != null)
                appendHtmlToModalBody(data.modalBodyHtml, data.modalHeader);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
}

function editChildSkill(id) {
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajaxUrl.EDITPOPUPCHILDKSILL,
        success: function (data, status) {
            if (data.modalBodyHtml != null)
                appendHtmlToModalBody(data.modalBodyHtml, data.modalHeader);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
}

function deleteConfirmChildSkill(id) {
    deleteCommon(id, ajaxUrl.DELETECHILDSKILL);
}

function saveChildSkill() {
    if ($ec.validate("dvChildSkill", $ec.ruleCallback, "")) {

        var mainSkillObj = {
            MainSkillName: "Test"
        }

        $.ajax({
            type: 'POST',
            cache: false,
            url: ajaxUrl.SAVEMAINSKILL,
            data: { 'mainSkill': mainSkillObj },
            success: function (data, textStatus, jqXHR) {

            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }
}


function addTopic() {
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajaxUrl.ADDPOPUPTOPIC,
        success: function (data, status) {
            if (data.modalBodyHtml != null)
                appendHtmlToModalBody(data.modalBodyHtml, data.modalHeader);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
}

function editTopic(id) {
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajaxUrl.EDITPOPUPTOPIC,
        success: function (data, status) {
            if (data.modalBodyHtml != null)
                appendHtmlToModalBody(data.modalBodyHtml, data.modalHeader);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
}

function deleteConfirmTopic(id) {
    deleteCommon(id, ajaxUrl.DELETECHILDSKILL);
}

function saveTopic() {
    if ($ec.validate("dvTopic", $ec.ruleCallback, "")) {
        $.ajax({
            type: 'POST',
            cache: false,
            url: ajaxUrl.SAVETOPIC,
          //  data: { 'mainSkill': mainSkillObj },
            success: function (data, textStatus, jqXHR) {

            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }
}


function addSubTopic() {
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajaxUrl.ADDPOPUPSUBTOPIC,
        success: function (data, status) {
            if (data.modalBodyHtml != null)
                appendHtmlToModalBody(data.modalBodyHtml, data.modalHeader);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
}

function editSubTopic(id) {
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajaxUrl.EDITPOPUPSUBTOPIC,
        success: function (data, status) {
            if (data.modalBodyHtml != null)
                appendHtmlToModalBody(data.modalBodyHtml, data.modalHeader);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
}

function deleteConfirmSubTopic(id) {
    deleteCommon(id, ajaxUrl.DELETECHILDSKILL);
}

function saveSubTopic() {
    if ($ec.validate("dvSubTopic", $ec.ruleCallback, "")) {
        $.ajax({
            type: 'POST',
            cache: false,
            url: ajaxUrl.SAVESUBTOPIC,
            //  data: { 'mainSkill': mainSkillObj },
            success: function (data, textStatus, jqXHR) {

            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }
}

$(document).ready(function () {
    $('.nav li').click(function () {
        $('li.nav-item.active').removeClass("active");
        $(this).addClass("active");
    });
});