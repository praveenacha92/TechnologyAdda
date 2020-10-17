namespace TechnologyADDA.Web.Controllers
{
    using System;
    using System.Web.Mvc;
    using TechnologyADDA.Business;
    using TechnologyADDA.Models;
    using TechnologyADDA.Shared;

    [CustomException]
    public class AdminController : Controller
    {
        private readonly IAdminService _adminService;
        private readonly ISharedService _sharedService;

        public AdminController(IAdminService adminService,ISharedService sharedService)
        {
            _adminService = adminService;
            _sharedService = sharedService;
        }

        public ActionResult AdminDashBoard()
        {
            return View();
        }

        public ActionResult ManageMainSkill()
        {
            Result<MainSkill> result = _adminService.GetMainSkills();
            return View(result.ListData);
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

        public ActionResult ManageSkillContent()
        {
            return View();
        }

        #region Actions
        #region MainSkill
        public JsonResult AddMainSkill()
        {
            string htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditMainSkill, new MainSkill());
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.ScreenNames.MainSkill, Enums.Actions.Add) }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult EditMainSkill(int id)
        {

            Result<MainSkill> result = _adminService.EditMainSkill(id);
            var htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditMainSkill, result.Data);
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.ScreenNames.MainSkill, Enums.Actions.Edit) }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult SaveMainSkill(MainSkill mainSkill)
        {
            mainSkill.CreatedBy = SessionManager.UserName;
            Result<MainSkill> result =_adminService.SaveMainSkill(mainSkill);
            return Json(result,JsonRequestBehavior.AllowGet);
        }

        public JsonResult UpdateMainSkill(MainSkill mainSkill)
        {
            mainSkill.CreatedBy = SessionManager.UserName;
            Result<MainSkill> result = _adminService.UpdateMainSkill(mainSkill);
            return Json(result,JsonRequestBehavior.AllowGet);

        }

        public JsonResult DeleteMainSkill(int Id)
        {
            Result<MainSkill> result =_adminService.DeleteMainSkill(Id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region ChildSkill
        public JsonResult AddChildSkill()
        {
            ViewBag.MainSkill = _sharedService.GetDropDownData(Enums.LookUpTable.MainSkill);
            string htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditChildSkill, new ChildSkill());
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.ScreenNames.ChildSkill, Enums.Actions.Add) }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult EditChildSkill()
        {
            ChildSkill childSkill = new ChildSkill();
            childSkill.ChildSkillName = "Test";

            var htmlMainSkill = CustomPartialView.RenderPartialViewToString(this, Enums.PartialView.AddEditChildSkill, childSkill);
            return Json(new { modalBodyHtml = htmlMainSkill, modalHeader = CommonFunc.GetModalActionHeader(Enums.ScreenNames.ChildSkill, Enums.Actions.Edit) }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult SaveChildSkill(ChildSkill childSkill)
        {
            //_adminService.Save(childSkill);
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