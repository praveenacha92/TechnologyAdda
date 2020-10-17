namespace TechnologyADDA.DataAccess
{
    using System;
    using System.Collections.Generic;
    using System.Data.SqlClient;
    using TechnologyADDA.Shared;

    public class SharedContext
    {
        private SqlConnection _connection;

        public SharedContext()
        {
            _connection = new SqlConnection(ApplicationConfig.GetAppSettingsValue());
        
        }

        public KeyValuePair<int, string> GetDropDownData(string tableName)
        {
            try
            {
                return new KeyValuePair<int, string>();
            }
            catch(Exception ex)
            {
                throw;
            }
        }
    }
}
