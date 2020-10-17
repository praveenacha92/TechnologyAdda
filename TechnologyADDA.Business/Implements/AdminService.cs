namespace TechnologyADDA.Business
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using TechnologyADDA.DataAccess;
    using TechnologyADDA.Models;

    public class AdminService : IAdminService
    {
        private readonly AdminContext _adminContext;

        public AdminService(AdminContext adminContext)
        {
            if (this._adminContext == null)
            {
                this._adminContext = adminContext;
            }
        }

        public Result<MainSkill> SaveMainSkill(MainSkill mainSkill)
        {
            var result = new Result<MainSkill>();
            try
            {
                result.Success = _adminContext.SaveMainSkill(mainSkill);
            }
            catch (Exception ex)
            {
            }
            return result;
        }

        public Result<MainSkill> EditMainSkill(int id)
        {
            var result = new Result<MainSkill>();
            try
            {
                result.Data = _adminContext.EditMainSkill(id);
            }
            catch (Exception ex)
            {

            }
            return result;
        }

        public Result<MainSkill> GetMainSkills()
        {
            var result = new Result<MainSkill>();
            try
            {
                result.ListData = _adminContext.GetMainSkills();
            }
            catch (Exception ex)
            {

            }
            return result;
        }

        public Result<MainSkill> DeleteMainSkill(int Id)
        {
            var result = new Result<MainSkill>();
            try
            {
                result.Success =  _adminContext.DeleteMainSkill(Id);
            }
            catch (Exception ex)
            {

            }
            return result;
        }

        public Result<MainSkill> UpdateMainSkill(MainSkill mainSkill)
        {
            var result = new Result<MainSkill>();
            try
            {
                result.Success = _adminContext.UpdateMainSkill(mainSkill);
            }
            catch (Exception ex)
            {

            }
            return result;
        }



        public Result<ChildSkill> SaveChildSkill(ChildSkill childSkill)
        {
            var result = new Result<ChildSkill>();
            try
            {
               // result.Success = _adminContext.SaveMainSkill(childSkill);
            }
            catch (Exception ex)
            {
            }
            return result;
        }
    }
}
