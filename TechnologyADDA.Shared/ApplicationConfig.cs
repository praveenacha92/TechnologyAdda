namespace TechnologyADDA.Shared
{
    using System;
    using System.Configuration;

    public class ApplicationConfig
    {
        private static string _connectionKey = "dbKnsConnection";
        public static string GetAppSettingsValue()
        {
            string sValue = string.Empty;
            try
            {
                sValue = ConfigurationManager.AppSettings[_connectionKey].ToString();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return sValue;
        }

        public static string GetConnectionStringsValue()
        {
            string sValue = string.Empty;
            try
            {
                sValue = ConfigurationManager.ConnectionStrings[_connectionKey].ToString();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return sValue;
        }

        public static string GetApiUrl(string key)
        {
            string sValue = string.Empty;
            try
            {
                sValue = ConfigurationManager.AppSettings[key].ToString();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return sValue;
        }
    }
}
