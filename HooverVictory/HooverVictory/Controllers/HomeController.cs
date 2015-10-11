using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HooverVictory.Controllers
{
    public class HomeController : Controller
    {
        // GET: Hoover
        public ActionResult Index()
        {
            return View();
        }
    }
}