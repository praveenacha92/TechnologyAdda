namespace TechnologyADDA.Business
{
    using System.Collections.Generic;
    using TechnologyADDA.Models;

    public interface IAdminService
    {
        Result<MainSkill> SaveMainSkill(MainSkill mainSkill);

        Result<MainSkill> EditMainSkill(int Id);
        Result<MainSkill> GetMainSkills();
        Result<MainSkill> DeleteMainSkill(int Id);
        Result<MainSkill> UpdateMainSkill(MainSkill mainSkill);
    }
}
