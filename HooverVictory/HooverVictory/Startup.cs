using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HooverVictory.Startup))]
namespace HooverVictory
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
