namespace TechnologyADDA.Business
{
    using TechnologyADDA.Models;

    public interface IAdminService
    {
        Result<MainSkill> SaveMainSkill(MainSkill mainSkill);
    }
}
