namespace TechnologyADDA.Business
{
    using Models;
    using System;
    using TechnologyADDA.DataAccess;

    public class AccountService : IAccountService
    {
        private readonly AccountContext _accountContext;

        public AccountService(AccountContext _accountContext)
        {
            if (this._accountContext == null)
            {
                this._accountContext = _accountContext;
            }
        }

        public Result<UserAccount> SaveUserAccount(UserAccount userAccount)
        {
            var result = new Result<UserAccount>();
            try
            {
                result.Success = _accountContext.SaveUserAccount(userAccount);
            }
            catch (Exception ex)
            {
            }
            return result;
        }
    }
}
