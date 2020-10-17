namespace TechnologyADDA.Models
{
    public class UserAccount : AuditCommon
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string MobileNumber { get; set; }
        public string Experience { get; set; }
        public int MainSkillId { get; set; }
        public int ChildSkillId { get; set; }
        public int UserId { get; set; }
    }
}
