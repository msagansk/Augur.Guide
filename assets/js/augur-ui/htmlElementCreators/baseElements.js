export function th(value, rowSpan = 1, colSpan = 1, textAlign = "center") {
  let element = document.createElement("th");
  element.rowSpan = rowSpan;
  element.colSpan = colSpan;
  element.style.textAlign = textAlign;
  element.appendChild(document.createTextNode(value));
  return element;
}
export function td(value, textAlign) {
  let element = document.createElement("td");
  element.appendChild(document.createTextNode(value));
  if (textAlign != "") {
    element.style.textAlign = textAlign;
  }
  return element;
}

export function tdIconLinkByFile(url, filePath) {
  let element = document.createElement("td");
  if (url == "-") {
    element = td(url, "center");
  } else {
    let a = document.createElement("a");
    let img = document.createElement("img");

    img.src = filePath;
    a.appendChild(img);

    a.href = url;
    a.target = "_blank";
    element.appendChild(a);

    element.style.textAlign = "center";
  }
  return element;
}

export function tdTextLink(url, text, addedText = "", textAlign) {
  let td = document.createElement("td");
  let a = document.createElement("a");
  let i = document.createElement("i");

  a.appendChild(document.createTextNode(text));

  a.href = url;
  a.target = "_blank";

  td.appendChild(a);
  td.appendChild(document.createTextNode(addedText));
  if (textAlign !== "") {
    td.style.textAlign = textAlign;
  }
  return td;
}
