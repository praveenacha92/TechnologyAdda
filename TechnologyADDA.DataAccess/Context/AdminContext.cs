
namespace TechnologyADDA.DataAccess
{
    using System;
    using System.Collections.Generic;
    using System.Data.SqlClient;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using TechnologyADDA.Models;
    using TechnologyADDA.Shared;

    public class AdminContext
    {
        private SqlConnection _connection;

        public AdminContext()
        {
            _connection = new SqlConnection(ApplicationConfig.GetAppSettingsValue());
        }

        public MainSkill SaveMainSkill(MainSkill mainSkill)
        {
            try
            {
              var success =  SqlDBHelper.ExecuteNonQuery(_connection, StoredProcedures.sp_CreateMainSkill,
                  mainSkill);
            }
            catch(Exception ex)
            {

            }
            return mainSkill;
        }
    }
}
