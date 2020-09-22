namespace TechnologyADDA.Web.Controllers
{
    using System.Web.Mvc;
    using TechnologyADDA.Business;
    using TechnologyADDA.Models;
    using TechnologyADDA.Shared;

    public class AdminController : Controller
    {
        private readonly IAdminService _adminService;

        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        public ActionResult ManageMainSkill()
        {
            return View();
        }

        public ActionResult ManageChildSkill()
        {
            return View();
        }

        #region Actions
        #region MainSkill
        public JsonResult AddMainSkill()
        {
            string htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditMainSkill, new MainSkill());
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.Actions.Add, Enums.ScreenNames.MainSkill) }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult EditMainSkill()
        {
            MainSkill mainSkill = new MainSkill();
            mainSkill.MainSkillName = "Test";
            mainSkill.MainSkillDesctiption = "Test Desc";

            var htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditMainSkill, mainSkill);
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.Actions.Edit, Enums.ScreenNames.MainSkill) }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult SaveMainSkill(MainSkill mainSkill)
        {
            _adminService.SaveMainSkill(mainSkill);
            return Json("");
        }

        public JsonResult UpdateMainSkill()
        {
            return Json("");
        }

        public JsonResult DeleteMainSkill(int Id)
        {
            return Json("");
        }
        #endregion

        #region ChildSkill
        public JsonResult AddChildSkill()
        {
            string htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditChildSkill, new ChildSkill());
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.Actions.Add, Enums.ScreenNames.ChildSkill) }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult EditChildSkill()
        {
            ChildSkill childSkill = new ChildSkill();
            childSkill.ChildSkillName = "Test";

            var htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditChildSkill, childSkill);
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.Actions.Edit, Enums.ScreenNames.ChildSkill) }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult SaveChildSkill(MainSkill mainSkill)
        {
            _adminService.SaveMainSkill(mainSkill);
            return Json("");
        }

        public JsonResult UpdateChildSkill()
        {
            return Json("");
        }

        public JsonResult DeleteChildSkill(int Id)
        {
            return Json("");
        }
        #endregion
        #endregion
    }
}