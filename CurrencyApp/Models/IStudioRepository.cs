using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.Models
{
    public interface IStudioRepository
    {
        StudioModel getStudio(int Id);

        IEnumerable<StudioModel> getAllStudios();
    }
}
