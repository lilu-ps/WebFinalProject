using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.Models
{
    public class BookingModel
    {
        public int Id { get; set; }
        public string CustomerFirstName { get; set; }
        public string CustomerLastName { get; set; }
        public int ArtistId { get; set; }
        public int StudioId { get; set; }
        public int TattooStyleId { get; set; }
        public DateTime date { get; set; }
        public string Description { get; set; }
    }
}
