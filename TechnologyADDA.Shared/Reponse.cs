using System.Collections.Generic;

namespace TechnologyADDA.Shared
{
    public class Reponse<T>
    {
        public bool Success { get; set; }

        public bool Failure { get; set; }
        public List<T> Data { get; set; }
    }
}
