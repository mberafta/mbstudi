﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mb_studi.Controllers
{
    public class UserController : Controller
    {
        // GET: Test
        public ActionResult Info()
        {
            return PartialView("_Info");
        }
    }
}