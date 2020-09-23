
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


function addChildSkill() {
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajaxUrl.addpopupchildksill,
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
        url: ajaxUrl.editpopupchildksill,
        success: function (data, status) {
            if (data.modalBodyHtml != null)
                appendHtmlToModalBody(data.modalBodyHtml, data.modalHeader);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
}

function deleteConfirmChildSkill(id) {
    deleteCommon(id, ajaxUrl.deletechildskill);
}

function saveChildSkill() {
    if ($ec.validate("dvChildSkill", $ec.ruleCallback, "")) {

        var mainSkillObj = {
            MainSkillName: "Test"
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


function addTopic() {
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajaxUrl.addpopuptopic,
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
        url: ajaxUrl.editpopuptopic,
        success: function (data, status) {
            if (data.modalBodyHtml != null)
                appendHtmlToModalBody(data.modalBodyHtml, data.modalHeader);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
}

function deleteConfirmTopic(id) {
    deleteCommon(id, ajaxUrl.deletechildskill);
}

function saveTopic() {
    if ($ec.validate("dvTopic", $ec.ruleCallback, "")) {
        $.ajax({
            type: 'POST',
            cache: false,
            url: ajaxUrl.saveTopic,
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
        url: ajaxUrl.addpopupsubtopic,
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
        url: ajaxUrl.editpopupsubtopic,
        success: function (data, status) {
            if (data.modalBodyHtml != null)
                appendHtmlToModalBody(data.modalBodyHtml, data.modalHeader);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
}

function deleteConfirmSubTopic(id) {
    deleteCommon(id, ajaxUrl.deletechildskill);
}

function saveSubTopic() {
    if ($ec.validate("dvSubTopic", $ec.ruleCallback, "")) {
        $.ajax({
            type: 'POST',
            cache: false,
            url: ajaxUrl.savesubtopic,
            //  data: { 'mainSkill': mainSkillObj },
            success: function (data, textStatus, jqXHR) {

            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }
}