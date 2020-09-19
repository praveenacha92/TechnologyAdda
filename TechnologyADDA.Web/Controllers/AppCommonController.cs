namespace TechnologyADDA.Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using System.Web.Mvc;
    using TechnologyADDA.Shared;

    [CustomException]
    public class AppCommonController : Controller
    {
        // GET: AppCommon
        public ActionResult Index()
        {
            return View();
        }
    }
}