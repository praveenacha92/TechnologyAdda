using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Xml;
using TechnologyADDA.Models;
using TechnologyADDA.Shared;

namespace TechnologyADDA.Web
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            IOCConfig.RegiterServices();
        }

        protected void Session_Start()
        {
            var keyValueList = new List<KeyValue>();
            XmlDocument doc = new XmlDocument();
            doc.Load(Server.MapPath(Enums.FilePaths.XmlPath));
            XmlNode idNodes = doc.SelectSingleNode("appmessages");
            foreach (XmlNode node in idNodes.ChildNodes)
            {
                if (node.HasChildNodes)
                {
                    var messageKey = node.Attributes[0].Value.ToString();
                    var message = node.InnerText.ToString();
                    keyValueList.Add(new KeyValue { Key = messageKey, Value = message });
                }
            }
            SessionManager.Messages = keyValueList;
        }
    }
}
