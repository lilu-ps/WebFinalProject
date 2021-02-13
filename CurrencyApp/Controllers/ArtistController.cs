using CurrencyApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace CurrencyApp.Controllers
{
    public class ArtistController : Controller
    {
        private ITattooRepository _tattooRep;
        private IArtistRepository _artisRep;

        public ArtistController(ITattooRepository tattooRep, IArtistRepository artisRep)
        {
            _tattooRep = tattooRep;
            _artisRep = artisRep;
        }


        [HttpGet("api/Artist/getTattooArtists")]
        public JsonResult getTattooArtists()
        {
            var result = _artisRep.getAllArtists().ToList();
            return Json(new { response = result });
        }
    }
}