using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.Models
{
    public class FullArtistRepository : IArtistRepository
    {
        private readonly CurrencyContext _cc;

        public FullArtistRepository(CurrencyContext cc)
        {
            _cc = cc;
        }

        public IEnumerable<ArtistModel> getAllArtists()
        {
            return _cc.Artists;
        }

        public ArtistModel getArtist(int Id)
        {
            throw new NotImplementedException();
        }
    }
}
