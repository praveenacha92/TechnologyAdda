
namespace TechnologyADDA.DataAccess
{
    using System;
    using System.Collections.Generic;
    using System.Data;
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
                           mainSkill.Active,
                           mainSkill.CreatedBy
                };
                success = SqlDBHelper.ExecuteNonQuery(_connection, StoredProcedures.sp_CreateMainSkill,
                  param);
            }
            catch(Exception ex)
            {

            }
            return success;
        }

        public MainSkill EditMainSkill(int id)
        {
            MainSkill mainSkill = new MainSkill();
            try
            {
                object[] param = { id };
                SqlDataReader dataReader = SqlDBHelper.ExecuteReader(_connection, StoredProcedures.sp_GetMainSkill,
                  param);
                if (dataReader.Read())
                {
                    mainSkill.Id = (int)dataReader["Id"];
                    mainSkill.MainSkillName = dataReader["SkillName"].ToString();
                    mainSkill.MainSkillDesctiption = dataReader["SkillDescription"].ToString();
                    mainSkill.Active = (bool)dataReader["Active"];
                }

            }
            catch (Exception ex)
            {

            }
            return mainSkill;
        }

        public List<MainSkill> GetMainSkills()
        {
            List<MainSkill> mainSkill = new List<MainSkill>();
            try
            {
                object[] param = { };
                var da = SqlDBHelper.ExecuteDataset(_connection, StoredProcedures.sp_GetMainSkill,
                  param);
                DataTable dt = da.Tables[0];
                foreach (DataRow dr in dt.Rows)
                {
                    mainSkill.Add(
                        new MainSkill
                        {
                            Id = Convert.ToInt32(dr["Id"]),
                            MainSkillName = dr["SkillName"].ToString(),
                            MainSkillDesctiption = dr["SkillDescription"].ToString(),
                            Active = Convert.ToBoolean(dr["Active"])
                        });
                }
            }
            catch (Exception ex)
            {

            }
            return mainSkill;
        }

        public int DeleteMainSkill(int Id)
        {
            int success = 0;
            try
            {
                object[] param = { Id };
                success = SqlDBHelper.ExecuteNonQuery(_connection, StoredProcedures.sp_DeleteMainSkill,
                   param);

            }
            catch (Exception ex)
            {

            }
            return success;
        }

        public int UpdateMainSkill(MainSkill mainSkill)
        {
            int success = 0;
            try
            {
                object[] param = {
                            mainSkill.Id,
                            mainSkill.MainSkillName,
                            mainSkill.MainSkillDesctiption,
                           mainSkill.Active,
                           mainSkill.CreatedBy
                };
                success = SqlDBHelper.ExecuteNonQuery(_connection, StoredProcedures.sp_UpdateMainSkill,
                  param);
            }
            catch (Exception ex)
            {

            }
            return success;
        }

        public int SaveChildSkill(ChildSkill childSkill)
        {
            int success = 0;
            try
            {
                object[] param = { childSkill.ChildSkillName,
                            childSkill.ChildSkillDesctiption,
                            childSkill.MainSkillId,
                           childSkill.Active,
                           childSkill.CreatedBy
                };
                success = SqlDBHelper.ExecuteNonQuery(_connection, StoredProcedures.sp_CreateChildSkill,
                  param);
            }
            catch (Exception ex)
            {

            }
            return success;
        }

        public ChildSkill EditChildSkill(int id)
        {
            ChildSkill childSkill = new ChildSkill();
            try
            {
                object[] param = { id };
                SqlDataReader dataReader = SqlDBHelper.ExecuteReader(_connection, StoredProcedures.sp_GetChildSkill,
                  param);
                if (dataReader.Read())
                {
                    childSkill.Id = (int)dataReader["Id"];
                    childSkill.ChildSkillName = dataReader["SkillName"].ToString();
                    childSkill.ChildSkillDesctiption = dataReader["SkillDescription"].ToString();
                    childSkill.Active = (bool)dataReader["Active"];
                }

            }
            catch (Exception ex)
            {

            }
            return childSkill;
        }

        public List<ChildSkill> GetChildSkills()
        {
            List<ChildSkill> childSkills = new List<ChildSkill>();
            try
            {
                object[] param = { };
                var da = SqlDBHelper.ExecuteDataset(_connection, StoredProcedures.sp_GetChildSkill,
                  param);
                DataTable dt = da.Tables[0];
                foreach (DataRow dr in dt.Rows)
                {
                    childSkills.Add(
                        new ChildSkill
                        {
                            Id = Convert.ToInt32(dr["Id"]),
                            ChildSkillName = dr["SkillName"].ToString(),
                            ChildSkillDesctiption = dr["SkillDescription"].ToString(),
                            Active = Convert.ToBoolean(dr["Active"])
                        });
                }
            }
            catch (Exception ex)
            {

            }
            return childSkills;
        }

        public int DeleteChildSkill(int Id)
        {
            int success = 0;
            try
            {
                object[] param = { Id };
                success = SqlDBHelper.ExecuteNonQuery(_connection, StoredProcedures.sp_DeleteChildSkill,
                   param);

            }
            catch (Exception ex)
            {

            }
            return success;
        }

        public int UpdateChildSkill(ChildSkill childSkill)
        {
            int success = 0;
            try
            {
                object[] param = {
                            childSkill.Id,
                            childSkill.ChildSkillName,
                            childSkill.ChildSkillDesctiption,
                            childSkill.MainSkillId,
                           childSkill.Active,
                           childSkill.CreatedBy
                };
                success = SqlDBHelper.ExecuteNonQuery(_connection, StoredProcedures.sp_UpdateChildSkill,
                  param);
            }
            catch (Exception ex)
            {

            }
            return success;
        }
    }
}
