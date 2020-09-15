namespace TechnologyADDA.Web.Controllers
{
    using System.Web.Mvc;

    public class DashBoardController : Controller
    {
        #region Actions
        public ActionResult DashboardLand()
        {
            return View();
        }
        public ActionResult CreateTeam()
        {
            return View();
        }
        public ActionResult ScheduleSession()
        {
            return View();
        }
        public ActionResult ManageSessions()
        {
            return View();
        }
        public ActionResult SessionsHistory()
        {
            return View();
        }
        #endregion
    }
}