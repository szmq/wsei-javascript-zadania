document.addEventListener('DOMContentLoaded', (event) => {
  var DOM_checkbox = document.getElementById("invoice");
  DOM_checkbox.addEventListener("click", showInvoiceFields);
  var DOM_invoiceElements = document.getElementById("invoiceData").children;

  function showInvoiceFields() {
    if (DOM_checkbox.checked == true) {
      for (const key in DOM_invoiceElements) {
        if (DOM_invoiceElements.hasOwnProperty(key)) {
          const element = DOM_invoiceElements[key];
          element.style.display = 'inline';
        }
      }
    } else {
      for (const key in DOM_invoiceElements) {
        if (DOM_invoiceElements.hasOwnProperty(key)) {
          const element = DOM_invoiceElements[key];
          element.style.display = 'none';
        }
      }
    }
  }
});
