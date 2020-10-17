function openLoginPopUp() {
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajaxUrl.LOGINPOPUP,
        success: function (data, status) {
            if (data.modalBodyHtml != null)
                appendHtmlToModalBody(data.modalBodyHtml, data.modalHeader);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
}

function saveUserAccount() {
    const registerObj = {
        FirstName: $('#txtFirstName').val(),
        LastName: $('#txtLastName').val(),
        Email: $('#txtEmail').val(),
        MobileNumber: $('#txtMobileNumber').val(),
        Experience: $('#txtExperience').val(),

        MainSkillId: $('#ddlMainSkill').val(),
        ChildSkillId: $('#ddlChildSkill').val(),
        UserId: $('#ddlUserRoles').val(),
    }

    if ($ec.validate("dvRegister", $ec.ruleCallback, "")) {
        $.ajax({
            type: 'POST',
            cache: false,
            url: ajaxUrl.SAVEUSERACCOUNT,
            data: { 'userAccount': registerObj },
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