
namespace TechnologyADDA.Business
{
    using System.Collections.Generic;
    using TechnologyADDA.Models;

    public interface ISharedService
    {
       List<KeyValue> GetDropDownData(string tableName);
    }
}
