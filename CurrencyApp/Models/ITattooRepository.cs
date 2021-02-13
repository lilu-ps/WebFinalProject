using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.Models
{
    public interface ITattooRepository
    {
        TattooModel getTattoo(int Id);

        IEnumerable<TattooModel> getAllTattoos();
    }
}
