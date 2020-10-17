namespace TechnologyADDA.DataAccess
{
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Data.SqlClient;
    using TechnologyADDA.Models;
    using TechnologyADDA.Shared;

    public class SharedContext
    {
        private SqlConnection _connection;

        public SharedContext()
        {
            _connection = new SqlConnection(ApplicationConfig.GetAppSettingsValue());
        
        }

        public List<KeyValue> GetDropDownData(string tableName)
        {
            List<KeyValue> keyValuePair = new List<KeyValue>(); 
            try
            {
                object[] param = { tableName };
                var da = SqlDBHelper.ExecuteDataset(_connection, StoredProcedures.sp_GetLookUpData,
                  param);
                DataTable dt = da.Tables[0];
                foreach (DataRow dr in dt.Rows)
                {
                    keyValuePair.Add(
                        new KeyValue
                        {
                            Key = dr["Key"].ToString(),
                            Value = dr["Value"].ToString(),
                        });
                }
            }
            catch (Exception ex)
            {
                throw;
            }
            return keyValuePair;
        }
    }
}
