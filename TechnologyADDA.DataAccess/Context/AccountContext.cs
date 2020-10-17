namespace TechnologyADDA.DataAccess
{
    using System;
    using System.Data.SqlClient;
    using TechnologyADDA.Models;
    using TechnologyADDA.Shared;

    public class AccountContext
    {
        private SqlConnection _connection;
        public AccountContext()
        {
            _connection = new SqlConnection(ApplicationConfig.GetAppSettingsValue());
        }

        public int SaveUserAccount(UserAccount userAccount)
        {
            int success = 0;
            try
            {
                object[] param = null;
                success = SqlDBHelper.ExecuteNonQuery(_connection, StoredProcedures.sp_CreateUserAccount,
                 param);
            }
            catch (Exception ex)
            {

            }
            return success;
        }
    }
}
