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
    }
}
