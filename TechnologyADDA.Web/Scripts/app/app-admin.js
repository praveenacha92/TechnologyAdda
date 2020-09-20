
function addMainSkill() {
    $.ajax({
        type: 'POST',
        cache: false,
        url: '/Admin/AddMainSkill/',
        success: function (data) {
            if (data != null)
                appendHtmlToModalBody(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            failureAlert('Failure');
        }
    })
}

function saveMainSkill() {
    if ($ec.validate("dvMainSkill", $ec.ruleCallback, "")) {
        $.ajax({
            type: 'POST',
            cache: false,
            url: '/Account/UserLogin',
            data: { 'userLogin': userLoginObject },
            success: function (data, textStatus, jqXHR) {

            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }
}