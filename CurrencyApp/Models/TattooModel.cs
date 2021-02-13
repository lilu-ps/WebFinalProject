using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.Models
{
    public class TattooModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int ArtistId { get; set; }
        public int StudioId { get; set; }
        public int TattooStyleId { get; set; }
        public int Price { get; set; }
        public int NumberOfDaysToCreate { get; set; }
        public string Image { get; set; }
    }
}
