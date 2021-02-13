using CurrencyApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace CurrencyApp.Controllers
{
    public class TattooStyleController : Controller
    {
        private ITattooStyleRepository _tatStyleRep;

        public TattooStyleController(ITattooStyleRepository tatStyleRep)
        {
            _tatStyleRep = tatStyleRep;
        }

        [HttpGet]
        public JsonResult getTattooStyles()
        {
            var result = _tatStyleRep.getAllTattooStyles().ToList();
            return Json(new { response = result });
        }
    }
}
