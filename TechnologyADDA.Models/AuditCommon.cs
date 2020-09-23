namespace TechnologyADDA.Models
{
    using System;

    public class AuditCommon
    {
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string CreatedIpAddress { get; set; }
        public bool Active { get; set; }
    }
}
