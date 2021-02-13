using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.Models
{
    public class FullTattooRepository : ITattooRepository
    {
        private readonly CurrencyContext _cc;

        public FullTattooRepository(CurrencyContext cc)
        {
            _cc = cc;
        }

        public IEnumerable<TattooModel> getAllTattoos()
        {
            throw new NotImplementedException();
        }

        public TattooModel getTattoo(int Id)
        {
            throw new NotImplementedException();
        }
    }
}
