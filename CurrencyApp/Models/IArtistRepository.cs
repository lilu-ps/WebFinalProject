using System.Collections.Generic;

namespace CurrencyApp.Models
{
    public interface IArtistRepository
    {
        ArtistModel getArtist(int Id);

        IEnumerable<ArtistModel> getAllArtists();


    }
}

