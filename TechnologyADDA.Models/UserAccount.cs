namespace TechnologyADDA.Models
{
    public class UserAccount : AuditCommon
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public int UserRoleId { get; set; }
        public bool Active { get; set; }
    }
}
