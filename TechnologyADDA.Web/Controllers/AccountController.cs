namespace TechnologyADDA.Web.Controllers
{
    using System.Web.Mvc;
    using TechnologyADDA.Models;
    using TechnologyADDA.Shared;

    [CustomException]
    public class AccountController : Controller
    {
        #region Constructor
        public AccountController()
        {
           
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
        #endregion
    }
}