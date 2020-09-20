namespace TechnologyADDA.Web.Controllers
{
    using System.Web.Mvc;
    using TechnologyADDA.Models;
    using TechnologyADDA.Shared;

    public class AdminController : Controller
    {

        public ActionResult ManageMainSkill()
        {
            return View();
        }

        #region Actions
        public JsonResult AddMainSkill()
        {
            var htmlMainSkill = CustomPartialView.RenderPartialViewToString(this,Enums.PartialView.AddEditMainSkill, new MainSkill());
            return Json(htmlMainSkill,JsonRequestBehavior.AllowGet);
        }
        public JsonResult EditMainSkill()
        {
            var htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditMainSkill, new MainSkill());
            return Json(htmlMainSkill, JsonRequestBehavior.AllowGet);
        }
        #endregion
    }
}