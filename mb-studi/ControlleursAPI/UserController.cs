using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using mb_studi.ViewModels;
using mb_studi.Managers;
using System.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using TokenAuthorization;


namespace mb_studi.ControlleursAPI
{
    public class UserController : ApiController
    {
        private readonly UserManager userManager = new UserManager();

        [HttpGet]
        public List<UserViewModel> GetUsers()
        {
            var result = userManager.GetUsers();
            return result;

        }

        [HttpPost]
        public UserViewModel Login(LoginViewModel model)
        {
            var result = userManager.Login(model.Email, model.Password);

            if (result.Id != Guid.Empty)
            {
                var tokenGenerator = new TokenAuthorization.Core.TokenGenerators.Base64TokenGenerator();
                var token = tokenGenerator.GenerateToken();
                result.Token = token;
            }

            return result;
        }

        [HttpPost]
        public UserViewModel AddUser(UserViewModel model)
        {
            var result = userManager.AddUser(model);
            return result;
        }

        private HttpResponseMessage SendResponse(bool result)
        {
            var responseMessage = result == true ? Request.CreateResponse(HttpStatusCode.OK) : Request.CreateResponse(HttpStatusCode.BadRequest);
            return responseMessage;
        }

    }
}
