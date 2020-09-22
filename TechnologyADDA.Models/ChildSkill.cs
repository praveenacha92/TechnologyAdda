namespace TechnologyADDA.Models
{
    public class ChildSkill : AuditCommon
    {
        public int Id { get; set; }

        public int MainSkillId { get; set; }

        public string ChildSkillName { get; set; }

        public string ChildSkillDesctiption { get; set; }
    }
}
