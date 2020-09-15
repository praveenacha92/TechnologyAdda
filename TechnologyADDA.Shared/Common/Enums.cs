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

        public class Paths
        {
            public const string XmlPath = "~/App_Data/AppMessages.xml";
        }

        public class PartialView
        {
            public const string LeftSidePanel = "~/Views/Dashboard/_LeftSidePanel.cshtml";
            public const string RightSideContentPanel = "~/Views/Dashboard/_RightSideContentPanel.cshtml";
            public const string HeaderSecion = "~/Views/Shared/_HeaderSection.cshtml";
            public const string FooterSecion = "~/Views/Shared/_FooterSection.cshtml";
            public const string Login = "~/Views/Account/Login.cshtml";
            public const string PublicLeftSidePanel = "~/Views/Public/_PublicLeftSidePanel.cshtml";
            public const string AdminLeftSidePanel = "~/Views/Admin/_AdminLeftSidePanel.cshtml";
        }
    }
}
