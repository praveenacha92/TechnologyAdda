namespace TechnologyADDA.Web
{
    using System.Web.Mvc;
    using TechnologyADDA.Business;
    using Unity;
    using Unity.Mvc5;

    public class IOCConfig
    {
        public static void RegiterServices()
        {
            var container = new UnityContainer();
            container.RegisterType<IAccountService, AccountService>();
            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}