
namespace TechnologyADDA.Business
{
    using System.Collections.Generic;

    public interface ISharedService
    {
       KeyValuePair<int,string> GetDropDownData(string tableName);
    }
}
