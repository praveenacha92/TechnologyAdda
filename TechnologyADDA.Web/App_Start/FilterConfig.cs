using System.Web;
using System.Web.Mvc;
using TechnologyADDA.Shared;

namespace TechnologyADDA.Web
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new CustomException());
        }
    }
}
