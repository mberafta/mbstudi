using System.Web;
using System.Web.Optimization;

namespace mb_studi
{
    public class BundleConfig
    {
        // Pour plus d’informations sur le regroupement, rendez-vous sur http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
            //            "~/Scripts/jquery-{version}.js"));

            // Utilisez la version de développement de Modernizr pour développer et apprendre. Puis, lorsque vous êtes
            // prêt pour la production, utilisez l’outil de génération sur http://modernizr.com pour sélectionner uniquement les tests dont vous avez besoin.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            //bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //          "~/Scripts/bootstrap.js",
            //          "~/Scripts/respond.js"));

            //bundles.Add(new ScriptBundle("~/bundles/angular").Include(
            //          "~/Scripts/angular.js",
            //          "~/Scripts/angular-route.js"));

            //bundles.Add(new ScriptBundle("~/bundles/require").Include(
            //       "~/Scripts/require.js"));

            //// Utilisation des fichiers js issus de la compilation des fichiers en typescript
            //bundles.Add(new ScriptBundle("~/bundles/app").Include(
            //   "~/Scripts/app/js/app.js",
            //   "~/Scripts/app/js/test.component.js",
            //   "~/Scripts/app/js/Services/users.service.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            BundleTable.EnableOptimizations = false;
        }
    }
}
