// main sill
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
    isEditFlage = true;
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajaxUrl.EDITPOPUPMAINKSILL,
        data: { 'id': id },
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

function saveMainSkill(id) {
    // id - represent 0 - new, 1- edit

    let actionUrl;
    if (id == 0)
        actionUrl = ajaxUrl.SAVEMAINSKILL;
    else
        actionUrl = ajaxUrl.UPDATEMAINSKILL;

    if ($ec.validate("dvMainSkill", $ec.ruleCallback, "")) {
        var mainSkillObj = {
            Id: id,
            MainSkillName: $("#txtMainSkill").val(),
            MainSkillDesctiption: $("#txtMainSkillDesc").val(),
            Active: $("input[name=isActive]").is(":checked") ? true : false
        }

        $.ajax({
            type: 'POST',
            cache: false,
            url: actionUrl,
            data: { 'mainSkill': mainSkillObj },
            success: function (data, textStatus, jqXHR) {
                if (data.Success > 0)
                    showSnackBar(id == 0 ? messages.CREATED : messages.UPDATED, data.Success, ajaxUrl.GETMAINSKILL);
                else
                    showSnackBar(messages.FAILED, data.Success);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                showSnackBar(messages.ERROR);
            }
        });
    }
}

// child skill
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

        var childSkillObj = {
            ChildSkillName: $('#txtChildSkill').val(),
            ChildSkillDesctiption: $('#txtChildSkillDesc').val(),
            MainSkillId: $('#ddlMainSkill').val()
        }

        $.ajax({
            type: 'POST',
            cache: false,
            url: ajaxUrl.SAVEMAINSKILL,
            data: { 'mainSkill': childSkillObj },
            success: function (data, textStatus, jqXHR) {
                if (data.Success > 0)
                    showSnackBar(messages.CREATED, data.Success);
                else
                    showSnackBar(messages.FAILED, data.Success);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                showSnackBar(messages.ERROR);
            }
        });
    }
}


// topics
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


//sub topics
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



