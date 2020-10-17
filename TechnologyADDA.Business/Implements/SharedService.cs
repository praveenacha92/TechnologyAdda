namespace TechnologyADDA.Business
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using TechnologyADDA.DataAccess;
    using TechnologyADDA.Models;

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

        public List<KeyValue> GetDropDownData(string tableName)
        {
            List<KeyValue> keyValuePair;
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
