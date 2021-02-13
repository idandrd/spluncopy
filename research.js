function CopyToClipboard(selector) {
  let doc = document;
  let text = doc.querySelector(selector);
  let range;
  let selection;

  if (doc.body.createTextRange) {
    range = doc.body.createTextRange();
    range.moveToElementText(text);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();
    range = doc.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

function copyTable() {
  let selector = "table[style='table-layout: fixed;']"
  CopyToClipboard(selector)
}
