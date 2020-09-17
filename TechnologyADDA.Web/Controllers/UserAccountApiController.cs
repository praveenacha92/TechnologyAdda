namespace TechnologyADDA.WebApi.Controllers
{
    using System.Web.Http;
    using TechnologyADDA.Models;

    public class UserAccountController : ApiController
    {
        [HttpGet]
        public IHttpActionResult CreateUserRegistration()
        {
            UserAccount userAccount = new UserAccount { Id = 2, FullName = "Praveen" };
            try
            {
                return Ok(userAccount);
            }
            catch
            {
                // Exception happened
                return InternalServerError();
            }
            
        }

        [HttpPost]
        public IHttpActionResult CreateUserRegistration(UserAccount userAccount)
        {
            userAccount = new UserAccount { Id = 2, FullName = "Praveen Updated" };
            try
            {
                return Ok();
            }
            catch
            {
                // Exception happened
                return InternalServerError();
            }
        }
    }
}
