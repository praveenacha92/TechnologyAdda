namespace TechnologyADDA.Web.Controllers
{
    using System.Web.Mvc;
    using TechnologyADDA.Models;
    using TechnologyADDA.Shared;

    public class AdminController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ManageMainSkill()
        {
            return View();
        }

        public JsonResult AddEditMainSkill()
        {
            var htmlMainSkill = CustomPartialView.RenderPartialViewToString(this,Enums.PartialView.AddEditMainSkill, new MainSkill());
            return Json(htmlMainSkill,JsonRequestBehavior.AllowGet);
        }
    }
}