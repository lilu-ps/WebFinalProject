using CurrencyApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace CurrencyApp.Controllers
{
    public class StudioController : Controller
    {
        private ITattooRepository _tattooRep;
        private IArtistRepository _artisRep;

        public StudioController(ITattooRepository tattooRep, IArtistRepository artisRep)
        {
            _tattooRep = tattooRep;
            _artisRep = artisRep;
        }
    }
}
