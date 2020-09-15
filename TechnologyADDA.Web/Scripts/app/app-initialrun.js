$(document).ready(function () {

    var teamSize = 5;
    var addedCount = 0;
    var userLoginObject = {};

    // Ajax Call Events
    // user login
    $('#btnLogin').click(function (e) {
        if ($ec.validate("divLogin", $ec.ruleCallback, "")) {
                $.ajax({
                    type: 'POST',
                    cache: false,
                    url: '/Account/UserLogin',
                    data: { 'userLogin': userLoginObject },
                    success: function (data, textStatus, jqXHR) {
                        if (data.Success) {
                            successAlert('Done');
                        }
                        else {
                            failureAlert('Failure');
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        failureAlert('Failure');
                    }
                });
        }
    });

    $('#btnCreateLead').click(function () {
        var isValidate = validateInputFields('divCreateSession');
        if (isValidate) {
            var createLeadObject = {
                EmployeeId: $('#txtEmpId').val(),
                EmployeeEmail: $('#txtEmpEmail').val(),
                EmployeeName: $('#txtEmpName').val(),
                TeamName: $('#txtTeamName').val(),
                UserRoleId: this.selectedUserRoleVal
            }
            $.ajax({
                type: 'POST',
                cache: false,
                url: '/Admin/SaveSessionLead',
                data: { 'createLeadEntity': createLeadObject },
                success: function (data, textStatus, jqXHR) {
                    if (data.Success) {
                        successAlert('Done');
                    }
                    else {
                        failureAlert('Failure');
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    failureAlert('Failure');
                }
            });
        }
        else {
            failureAlert('Please fill in all the required fields (indicated by *)');
        }
    })

    $('#btnRegister').click(function (e) {
        e.preventDefault();
        var accountObject = {
            UserName: $('#txtUserName').val(),
            Password: $('#txtPassword').val(),
            FullName: $('#txtFullName').val(),
            Email: $('#txtEmail').val(),
            UserRoleId: this.selectedUserRoleVal
        }
        $.ajax({
            type: 'POST',
            cache: false,
            url: '/Account/UserRegister',
            data: { 'accountEntity': accountObject },
            success: function (data, textStatus, jqXHR) {
                successAlert('Done');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                failureAlert('Failure');
            }
        });
    })

    $('#btnAddTeam').click(function () {
        addedCount = (addedCount + 1);
        if (addedCount <= teamSize) {
            var teamObject = {
                MemberName: $('#txtMemberName').val(),
                MemberEmail: $('#txtMemberEmail').val(),
                MemberEmpId: $('#txtMemberEmpId').val()
            }
            var table = $("#tblTeamMembers");

            table.find('tr').each(function (i, el) {
                var $tds = $(this).find('td');
                var email = $tds.eq(2).text();
                var empId = $tds.eq(3).text();
                if (email != '' && empId != '') {
                    if (email == teamObject.MemberEmail && empId == teamObject.MemberEmpId) {
                        alert('Already added in your team as a member, please try again with different Name.');
                        teamObject = null;
                    }
                }
            });

            if (teamObject != null && (teamObject.MemberEmpId != ""
                && teamObject.MemberName != ""
                && teamObject.MemberEmail != "")) {
                prepareTbody(teamObject);
            }
        }
        else {
            alert('Team size should be five.');
        }
    })


    // Change Events 
    $('#ddlUserRole').change(function () {
        this.selectedUserRoleVal = $('#ddlUserRole').val();
    })

})


// set success alert message box
function successAlert(message) {
    $('#spanSuccessMsg').html(message);
    $('.success-alert').fadeTo(2000, 500).slideUp(500, function () {
        $('.success-alert').slideUp(500);
    })
}

// set failed alert message box
function failureAlert(message) {
    $('#spanErrorMsg').html(message);
    $('.failure-alert').fadeTo(5000, 500).slideUp(500, function () {
        $('.failure-alert').slideUp(500);
    })
}

function loadChildView(controller, action) {
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

function prepareTbody(teamData) {
    var html = '';
    html = html + '<tr>';
    html = html + '<td>';
    html = html + '<div class="form-check form-check-flat">';
    html = html + '<label class="form-check-label">';
    html = html + '<input type="checkbox" class="form-check-input" checked=""> All';
    html = html + ' <i class="input-helper"></i>';
    html = html + '</label>';
    html = html + '</div>';
    html = html + '</td>';
    html = html + '<td>' + teamData.MemberName + '</td>';
    html = html + '<td>' + teamData.MemberEmail + '</td>';
    html = html + '<td>' + teamData.MemberEmpId + '</td>';
    html = html + '</tr>';
    $('#appendTbody').append(html);
}

function validateInputFields(divInput) {
    var isFormValid = true;
    $("#" + divInput + " input , select").each(function () {
        if ($.trim($(this).val()).length == 0 || $(this).val()=='--Select--') {
            $(this).addClass("highlight");
            isFormValid = false;
            $(this).focus();
        }
        else {
            $(this).removeClass("highlight");
        }
    });
    return isFormValid;
}

function clearFields()
{
    $('input').val('');
    $('select').val('--Select--');
}