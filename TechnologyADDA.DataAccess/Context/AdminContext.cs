﻿
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

        public int SaveMainSkill(MainSkill mainSkill)
        {
            int success = 0;
            try
            {
                 object[] param = { mainSkill.MainSkillName,
                            mainSkill.MainSkillDesctiption,
                           mainSkill.Active   };
                 success =  SqlDBHelper.ExecuteNonQuery(_connection, StoredProcedures.sp_CreateMainSkill,
                  param);
            }
            catch(Exception ex)
            {

            }
            return success;
        }
    }
}
