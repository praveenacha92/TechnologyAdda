namespace TechnologyADDA.Web.Controllers
{
    using System.Web.Mvc;

    public class PublicController : Controller
    {
        #region Views
        // GET: Public
        public ActionResult PublicDashBoard()
        {
            return View();
        }

        public ActionResult CourseInformation()
        {
            return View();
        }

        public ActionResult TopicContent()
        {
            return View();
        }
        #endregion
    }
}