using CurrencyApp.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace CurrencyApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var dis = Configuration.GetConnectionString("TattooWorldDB");
            services.AddDbContextPool<Models.CurrencyContext>(options => options.UseSqlServer(Configuration.GetConnectionString("TattooWorldDB") ));
            services.AddControllersWithViews();
            services.AddMvc().AddXmlSerializerFormatters();

            

            services.AddScoped<ITattooRepository, FullTattooRepository>();
            services.AddScoped<ITattooStyleRepository, FullTattooStyleRepository>();
            services.AddScoped<IStudioRepository, FullStudioRepository>();
            services.AddScoped<IArtistRepository, FullArtistRepository>();
            services.AddScoped<IBookingRepository, FullBookingRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseDefaultFiles();
            app.UseStaticFiles();


            app.UseRouting();

            app.UseAuthorization();

            //DefaultFilesOptions options = new DefaultFilesOptions();
            //options.DefaultFileNames.Clear();
            ////options.DefaultFileNames.Add("_ViewStart.html");
            //app.UseDefaultFiles(options);
            //app.UseStaticFiles();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
