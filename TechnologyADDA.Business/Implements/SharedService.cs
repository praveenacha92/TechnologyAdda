namespace TechnologyADDA.Business
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using TechnologyADDA.DataAccess;

    public class SharedService : ISharedService
    {
        private SharedContext _sharedContext;

        public SharedService(SharedContext sharedContext)
        {
            if (this._sharedContext == null)
            {
                this._sharedContext = sharedContext;
            }
            sharedContext = new SharedContext();
        }

        public KeyValuePair<int, string> GetDropDownData(string tableName)
        {
            KeyValuePair<int, string> keyValuePair;
            try
            {
                keyValuePair = _sharedContext.GetDropDownData(tableName);
            }
            catch(Exception ex)
            {
                throw;
            }
            return keyValuePair;
        }
    }
}
