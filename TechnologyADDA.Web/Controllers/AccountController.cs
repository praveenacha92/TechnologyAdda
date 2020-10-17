namespace TechnologyADDA.Web.Controllers
{
    using System.Web.Mvc;
    using TechnologyADDA.Business;
    using TechnologyADDA.Models;
    using TechnologyADDA.Shared;

    [CustomException]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;


        #region Constructor
        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }
        #endregion

        #region Views
        public ActionResult Register()
        {
            return View();
        }
        #endregion

        #region Action Methods
        public JsonResult LoginModalPopUp()
        {
            string htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.Login, new UserLogin());
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.ScreenNames.Login) }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult SaveUserAccount(UserAccount userAccount)
        {
            Result<UserAccount> result = _accountService.SaveUserAccount(userAccount);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult UserLogin()
        {
            return Json("");
        }
        #endregion
    }
}