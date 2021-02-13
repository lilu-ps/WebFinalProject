using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.Models
{
    public interface ITattooStyleRepository
    {
        TattooStyleModel getTattooStyle(int Id);

        IEnumerable<TattooStyleModel> getAllTattooStyles();
    }
}
