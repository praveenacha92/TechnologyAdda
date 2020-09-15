namespace TechnologyADDA.Web.Controllers
{
    using System.Web.Mvc;

    public class PublicController : Controller
    {
        #region Views
        // GET: Public
        public ActionResult Index()
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