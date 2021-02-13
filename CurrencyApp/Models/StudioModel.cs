using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.Models
{
    public class StudioModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int NumOfYearsOpen { get; set; }
        public int StarReview { get; set; }
        public int NumberOfArtists { get; set; }

        public string City { get; set; }

        public string Country { get; set; }
    }
}
