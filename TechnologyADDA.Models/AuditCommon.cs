namespace TechnologyADDA.Models
{
    using System;

    public class AuditCommon
    {
        private DateTime dateTime;

        public DateTime? CreatedDate
        {
            get
            {
                return dateTime;
            }
            set
            {
                dateTime = DateTime.Now;
            }
        }
        public string CreatedBy { get; set; }
        public string CreatedIpAddress { get; set; }
        public bool Active { get; set; }
    }
}
