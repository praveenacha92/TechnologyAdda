namespace TechnologyADDA.DataAccess
{
    using System.Data.SqlClient;
    using TechnologyADDA.Shared;

    public class AccountContext
    {
        private SqlConnection _connection;
        public AccountContext()
        {
            _connection = new SqlConnection(ApplicationConfig.GetAppSettingsValue());
        }
    }
}
