namespace TechnologyADDA.Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Web.Mvc;
    public class AdminController : Controller
    {
        [ValidateAntiForgeryToken]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CreateSessionLead()
        {
            return View();
        }

        public ActionResult CreateMainSkill()
        {
            return View();
        }

        public ActionResult CreateChildSkill()
        {
            return View();
        }

        public ActionResult CreateTopic()
        {
            return View();
        }
    }
}