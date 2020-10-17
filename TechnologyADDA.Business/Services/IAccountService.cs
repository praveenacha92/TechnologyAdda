namespace TechnologyADDA.Business
{
    using Models;

    public interface IAccountService
    {
        Result<UserAccount> SaveUserAccount(UserAccount userAccount);
    }
}
