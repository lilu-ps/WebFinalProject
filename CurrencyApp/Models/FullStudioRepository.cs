using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.Models
{
    public class FullStudioRepository : IStudioRepository
    {
        private readonly CurrencyContext _cc;
        public FullStudioRepository(CurrencyContext cc)
        {
            _cc = cc;
        }

        public IEnumerable<StudioModel> getAllStudios()
        {
            throw new NotImplementedException();
        }

        public StudioModel getStudio(int Id)
        {
            throw new NotImplementedException();
        }
    }
}
