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
    using System;
    using System.Linq;
    using System.Reflection;

    public static class CommonFunc
    {
        //This method is used to get Message Value by passing Message Key
        public static string GetMessageValue(string messageKey)
        {
            try
            {
                if (SessionManager.Messages != null)
                    return SessionManager.Messages.Where(message => message.Key == messageKey).Select(message => message.Value).SingleOrDefault();
                else
                    return "";
            }
            catch (Exception ex)
            {
                LogWriter.Web.Error(GetErrorMessageRootText(typeof(CommonFunc).Namespace, MethodBase.GetCurrentMethod().DeclaringType.Name, MethodInfo.GetCurrentMethod().Name), ex);
                return "";
            }
        }

        public static string GetErrorMessageRootText(string layer, string controller, string action)
        {
            string result = Enums.ErrorOccured.Replace("@Layer", layer);
            result = result.Replace("@Class", controller);
            result = result.Replace("@Action", action);
            return result;
        }
    }
}
