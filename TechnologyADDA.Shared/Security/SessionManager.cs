namespace TechnologyADDA.Shared
{
    using TechnologyADDA.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Web;

    public static class SessionManager
    {
        public static List<KeyValue> Messages
        {
            get
            {
                if (HttpContext.Current.Session["Messages"] != null)
                    return HttpContext.Current.Session["Messages"] as List<KeyValue>;
                else
                    return null;
            }
            set
            {
                HttpContext.Current.Session["Messages"] = value;
            }
        }

        public static string UserName
        {
            get
            {
                if (HttpContext.Current.Session["UserName"] != null)
                    return HttpContext.Current.Session["UserName"] as string;
                else
                    return null;
            }
            set
            {
                // HttpContext.Current.Session["UserName"] = value;
                HttpContext.Current.Session["UserName"] = "pacha";
            }
        }
    }
}
