using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using mb_studi.Models;

namespace mb_studi.ViewModels
{
    public class UserViewModel
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Token { get; set; }

        public UserViewModel() { }

        public UserViewModel(User user)
        {
            this.Id = user.Id;
            this.FirstName = user.FirstName;
            this.LastName = user.LastName;
            this.Email = user.Email;
        }

    }
}