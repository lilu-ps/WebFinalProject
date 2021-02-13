using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.Models
{
    public class ArtistModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int YearsOfExperience { get; set; }
        public int StudioId { get; set; }

        public string IsInkMasterWinner { get; set; }

        public string Image { get; set; }
    }
}
