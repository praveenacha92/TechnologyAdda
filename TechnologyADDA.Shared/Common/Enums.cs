namespace TechnologyADDA.Shared
{
    public static class Enums
    {
        public const string ErrorOccured = "Error occurred at Layer @Layer, Class Or Controller @Class and Action @Action.";
        public class Messagekeys
        {
            public const string Input = "Input_Required";
            public const string Select = "Select_Required";
        }

        public class FilePaths
        {
            public const string XmlPath = "~/App_Data/AppMessages.xml";
            public const string LogFilePath = "~/App_Data/Log/Log.txt";
        }

        public class PartialView
        {

            //Admin
            public const string AdminLeftSidePanel = "~/Views/Admin/_AdminLeftSidePanel.cshtml";
            public const string AddEditMainSkill = "~/Views/Admin/_CreateEditMainSkill.cshtml";
            public const string AddEditChildSkill = "~/Views/Admin/_CreateEditChildSkill.cshtml";
            public const string AddEditTopic = "~/Views/Admin/_CreateEditTopic.cshtml";
            public const string AddEditSubTopic = "~/Views/Admin/_CreateEditSubTopic.cshtml";


           
            //Account
            public const string Login = "~/Views/Account/Login.cshtml";

            //Public
            public const string PublicLeftSidePanel = "~/Views/Public/_PublicLeftSidePanel.cshtml";

            //DashBoard
            public const string LeftSidePanel = "~/Views/Dashboard/_LeftSidePanel.cshtml";
            public const string RightSideContentPanel = "~/Views/Dashboard/_RightSideContentPanel.cshtml";

            //Shared
            public const string HeaderSecion = "~/Views/Shared/_HeaderSection.cshtml";
            public const string FooterSecion = "~/Views/Shared/_FooterSection.cshtml";

            //Common
            public const string ModalPopUp = "~/Views/Shared/_ModalPopUp.cshtml";

        }

        public class ApiUrls
        {
            public const string UserRegistration = "UserAccount/CreateUserRegistration";

            public const string SaveMainSkill = "AdminApi/SaveMainSkill";

        }

        public class Actions
        {
            public const string Add = "Add";
            public const string Edit = "Edit";
            public const string Delete = "Delete";
        }

        public class ScreenNames
        {
            public const string MainSkill = "Main Skill";
            public const string ChildSkill = "Child Skill";
            public const string MainTopic = "Main Topic";
            public const string SubTopic = "Sub Topic";
            public const string Login = "Login";
        }
    }
}
