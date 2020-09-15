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

        public int CreateUserRegistration(UserAccount userAccount)
        {
            throw new NotImplementedException();
        }
    }
}
