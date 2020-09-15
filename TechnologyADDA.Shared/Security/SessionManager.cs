/*************************************************************************
* KNSS Application
* __________________
* 
*  [2018] - [2019] Knowledge Sharing Session Application - KNSS  
*  All Rights Reserved.
* 
* NOTICE:  
*/
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
    }
}
