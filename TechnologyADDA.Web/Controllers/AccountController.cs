namespace TechnologyADDA.Web.Controllers
{
    using System;
    using System.Web.Mvc;
    using TechnologyADDA.Business;
    using TechnologyADDA.Models;
    using TechnologyADDA.Shared;

    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;

        #region Constructor
        public AccountController(IAccountService accountService)
        {
            if (this._accountService == null)
            {
                this._accountService = accountService;
            }
        }
        #endregion

        #region Views
        public ActionResult Login(string userName)
        {
            return View();
        }

        public ActionResult Register()
        {
            return View();
        }

        public ActionResult UserRole()
        {
            return View();
        }
        #endregion

        #region Action Methods
        public JsonResult UserRegister(UserAccount userAccount)
        {
            return Json("");
        }
        #endregion
    }
}