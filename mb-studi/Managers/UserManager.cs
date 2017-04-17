using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using mb_studi.Data;
using mb_studi.ViewModels;
using mb_studi.Models;
using EasyEncryption;

namespace mb_studi.Managers
{
    /// <summary>
    /// Méthode perméttant de récupérer les utilisateurs présents en base de données afin d'en afficher la liste.
    /// </summary>
    public class UserManager
    {
        public List<UserViewModel> GetUsers()
        {
            var result = new List<UserViewModel>();

            try
            {
                using (var db = new DataContext())
                {
                    var users = db.Users;

                    if (users != null)
                    {
                        if (users.Count() > 0)
                        {
                            foreach (var user in users)
                            {
                                result.Add(new UserViewModel(user));
                            }
                        }
                    }

                }
            }

            catch (Exception e)
            {
                throw new Exception(e.Message);
            }

            return result;
        }

        /// <summary>
        /// Méthode perméttant d'ajouter un nouvel utilisateur à la base de données.
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public UserViewModel AddUser(UserViewModel model)
        {
            var result = new UserViewModel();

            try
            {
                using (var db = new DataContext())
                {
                    // Nouvel utilisateur
                    if (model.Id == Guid.Empty)
                    {
                        var user = db.Users.FirstOrDefault(u => u.Email == model.Email);
                        if (user == null)
                        {
                            user = new User()
                            {
                                Id = Guid.NewGuid(),
                                FirstName = model.FirstName,
                                LastName = model.LastName,
                                Email = model.Email,
                                Password = MD5.ComputeMD5Hash(model.Password)
                            };

                            db.Users.Add(user);
                            db.SaveChanges();

                            result = new UserViewModel(user);
                        }
                    }
                }
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
            return result;
        }

        /// <summary>
        /// Méthode perméttant d'authentifier un utilisateur et de lui attribuer un token unique.
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public UserViewModel Login(string email, string password)
        {
            var result = new UserViewModel();

            try
            {
                using (var db = new DataContext())
                {
                    var user = db.Users.FirstOrDefault(u => u.Email == email);
                    if (user != null)
                    {
                        if (MD5.ComputeMD5Hash(password) == user.Password)
                            result = new UserViewModel(user);
                    }
                }
            }
            catch (Exception e)
            {

            }

            return result;
        }
    }
}