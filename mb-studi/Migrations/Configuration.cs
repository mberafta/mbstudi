namespace mb_studi.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using EasyEncryption;

    internal sealed class Configuration : DbMigrationsConfiguration<mb_studi.Data.DataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(mb_studi.Data.DataContext context)
        {
            var defaultUser = new Models.User()
            {
                Id = Guid.NewGuid(),
                FirstName = "John",
                LastName = "Doe",
                Email = "john.doe@hotmail.fr",
                Password = MD5.ComputeMD5Hash("johndoe")
            };

            if (context.Users.FirstOrDefault(u => u.Email == defaultUser.Email) == null)
                context.Users.AddOrUpdate<Models.User>(defaultUser);

            context.SaveChanges();
        }
    }
}
