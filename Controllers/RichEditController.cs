using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreDemos.RichEdit {
    [Route("[action]")]
    public class RichEditController : Controller {
        public IActionResult Overview() {
            return View();
        }
        // Document Managment
        #region LoadAndSave
        public IActionResult LoadAndSave() {
            return View();
        }

        public IActionResult Export(string base64, string fileName, DevExpress.AspNetCore.RichEdit.DocumentFormat format) {
            byte[] fileContents = System.Convert.FromBase64String(base64);
            return Ok();
        }

        public IActionResult DocumentProtection() {
            return View();
        }
        #endregion

        //Templates
        public IActionResult DynamicContent() {
            return View();
        }
        public IActionResult MailMerge() {
            return View();
        }

        //Features
        public IActionResult Autocorrect() {
            return View();
        }

        //Customization
        public IActionResult SimpleView() {
            return View();
        }
        public IActionResult RibbonCustomization() {
            return View();
        }
        public IActionResult ContextMenuCustomization() {
            return View();
        }
    }
}
