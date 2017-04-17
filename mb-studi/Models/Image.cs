using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace mb_studi.Models
{
    public class Image
    {
        public Guid Id { get; set; }

        public string SourceUrl { get; set; }

        public string MimeType { get; set; }

        public byte[] ImageData { get; set; }

        public virtual User User { get; set; }
    }
}