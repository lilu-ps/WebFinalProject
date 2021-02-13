using CurrencyApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace CurrencyApp.Controllers
{
    public class TattooController : Controller
    {
        private ITattooRepository _tattooRep;
        private IArtistRepository _artisRep;

        public TattooController(ITattooRepository tattooRep, IArtistRepository artisRep)
        {
            _tattooRep = tattooRep;
            _artisRep = artisRep;
        }
    }
}
