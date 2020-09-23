namespace TechnologyADDA.Models
{
    public class UserLogin : AuditCommon
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }

        public int RegistrationId { get; set; }
    }
}
