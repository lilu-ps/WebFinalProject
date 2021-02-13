using Microsoft.EntityFrameworkCore;

namespace CurrencyApp.Models
{


    public class CurrencyContext : DbContext
    {
        public DbSet<ArtistModel> Artists { get; set; }
        public DbSet<StudioModel> Studios { get; set; }
        public DbSet<TattooModel> Tattoos { get; set; }
        public DbSet<TattooStyleModel> TattooStyles { get; set; }
        public DbSet<BookingModel> Bookings { get; set; }

        //public Microsoft.EntityFrameworkCore.DbSet<RegisterModel> RegisteredList { get; set; }

        //public Microsoft.EntityFrameworkCore.DbSet<CurrencyModel> Currencies { get; set; }

        //public Microsoft.EntityFrameworkCore.DbSet<CalculatorModel> CalculatroOperations { get; set; }

        public CurrencyContext(DbContextOptions<CurrencyContext> options)
            : base(options)
        {
        }
    }
}
