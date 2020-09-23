namespace TechnologyADDA.Shared
{
    using log4net;
    using System;
    using System.Collections.Generic;

    public static class LogWriter
    {

        #region LoggerMgr
        private static ILog _logger = null;
        public static string ViewDataErrorsMessageKey = "_ERROR_MESSAGE_LOGGER_";

        static LogWriter()
        {
            log4net.Config.XmlConfigurator.Configure();
            _logger = LogManager.GetLogger("LMPCC-Web");
        }

        public static string LogId
        {
            get
            {
                return Guid.NewGuid().ToString();
            }
        }

        public static ILog Web
        {
            get
            {
                return _logger;
            }
        }

        public static void UserLog(Exception ex, IDictionary<string, object> viewData)
        {
            string logId = LogWriter.LogId;
            _logger.Error(logId, ex);
            viewData[ViewDataErrorsMessageKey] = ex.Message + ". Log ID:" + logId;
        }

        public static ILog App
        {
            get
            {
                return _logger;
            }
        }

        public static ILog Email
        {
            get
            {
                return _logger;
            }
        }

        public static ILog Database
        {
            get
            {
                return _logger;
            }
        }

        public static ILog Log
        {
            get
            {
                return _logger;
            }
        }
        #endregion

    }
}
