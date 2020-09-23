namespace TechnologyADDA.Web.Controllers
{
    using System.Web.Mvc;
    using TechnologyADDA.Business;
    using TechnologyADDA.Models;
    using TechnologyADDA.Shared;

    [CustomException]
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

        public ActionResult ManageTopic()
        {
            return View();
        }

        public ActionResult ManageSubTopic()
        {
            return View();
        }

        #region Actions
        #region MainSkill
        public JsonResult AddMainSkill()
        {
            string htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditMainSkill, new MainSkill());
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.ScreenNames.MainSkill,Enums.Actions.Add) }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult EditMainSkill()
        {
            MainSkill mainSkill = new MainSkill();
            mainSkill.MainSkillName = "Test";
            mainSkill.MainSkillDesctiption = "Test Desc";

            var htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditMainSkill, mainSkill);
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.ScreenNames.MainSkill,Enums.Actions.Edit) }, JsonRequestBehavior.AllowGet);
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
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.ScreenNames.ChildSkill,Enums.Actions.Add) }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult EditChildSkill()
        {
            ChildSkill childSkill = new ChildSkill();
            childSkill.ChildSkillName = "Test";

            var htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditChildSkill, childSkill);
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.ScreenNames.ChildSkill,Enums.Actions.Edit) }, JsonRequestBehavior.AllowGet);
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

        #region Topic
        public JsonResult AddTopic()
        {
            string htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditTopic, new MainTopic());
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.ScreenNames.MainTopic, Enums.Actions.Add) }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult EditTopic()
        {
            var htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditTopic, new MainTopic());
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.ScreenNames.MainTopic, Enums.Actions.Edit) }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult SaveTopic()
        {
            return Json("");
        }

        public JsonResult UpdateTopic()
        {
            return Json("");
        }

        public JsonResult DeleteTopic(int Id)
        {
            return Json("");
        }
        #endregion

        #region SubTopic
        public JsonResult AddSubTopic()
        {
            string htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditSubTopic, new SubTopic());
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.ScreenNames.SubTopic, Enums.Actions.Add) }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult EditSubTopic()
        {
            var htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditSubTopic, new SubTopic());
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.ScreenNames.SubTopic, Enums.Actions.Edit) }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult SaveSubTopic()
        {
            return Json("");
        }

        public JsonResult UpdateSubTopic()
        {
            return Json("");
        }

        public JsonResult DeleteSubTopic(int Id)
        {
            return Json("");
        }
        #endregion
        #endregion
    }
}