
namespace TechnologyADDA.Models
{
    using System.Collections.Generic;

    public class Result<T>
    {
        public int Success { get; set; }
        
        public List<T> ListData { get; set; }

        public T Data { get; set; }
    }
}
