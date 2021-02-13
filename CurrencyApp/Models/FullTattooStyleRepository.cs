using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.Models
{
    public class FullTattooStyleRepository : ITattooStyleRepository
    {
        private readonly CurrencyContext _cc;

        public FullTattooStyleRepository(CurrencyContext cc)
        {
            _cc = cc;
        }

        public IEnumerable<TattooStyleModel> getAllTattooStyles()
        {
            return _cc.TattooStyles;
        }

        public TattooStyleModel getTattooStyle(int Id)
        {
            throw new NotImplementedException();
        }
    }
}
