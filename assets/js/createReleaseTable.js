import * as ReleaseDataFromGIthub from "./getReleaseDataOnGithub.js";
main();
async function main() {

  let arrReleaseData = await ReleaseDataFromGIthub.getData();
  let tbl = document.getElementById("release-table");

  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let tbody = document.createElement("tbody");

  //generate thead
  tr = document.createElement("tr");
  for (let item in arrReleaseData[0]) {
    tr.appendChild(
      createElementText(arrReleaseData[0][item]["titleName"], "th", "center")
    );
  }
  thead.appendChild(tr);
  tbl.appendChild(thead);

  //generate body
  for (let i = 0; i < arrReleaseData.length; i++) {
    tr = document.createElement("tr");

    tr.appendChild(createElementText(arrReleaseData[i].tagName.value, "td"));
    tr.appendChild(
      createTdElementIconLink(
        arrReleaseData[i].githubUrl.value,
        " fab fa-github"
      )
    );

    tr.appendChild(
      createElementText(arrReleaseData[i].createdDatetime.value, "td", "center")
    );
    tr.appendChild(
      createElementText(
        arrReleaseData[i].publishedDatetime.value,
        "td",
        "center"
      )
    );

    tr.appendChild(
      createTdElementIconLink(
        arrReleaseData[i].tradingUiUrl.value,
        " fas fa-external-link-alt"
      )
    );
    tr.appendChild(
      createTdElementIconLink(
        arrReleaseData[i].reportingUiUrl.value,
        " fas fa-external-link-alt"
      )
    );

    tr.appendChild(
      createElementText(arrReleaseData[i].note.value, "td", "center")
    );

    tbody.appendChild(tr);
  }
  tbl.appendChild(tbody);
}

function createElementText(value, tagName, textAlign) {
  let element = document.createElement(tagName);
  element.appendChild(document.createTextNode(value));
  if (textAlign !== "") {
    element.style.textAlign = textAlign;
  }
  return element;
}
function createTdElementIconLink(url, iconClassName) {
  let td = document.createElement("td");
  let a = document.createElement("a");
  let i = document.createElement("i");

  i.className += iconClassName;
  a.appendChild(i);

  a.href = url;
  a.target = "_blank"
  td.appendChild(a);

  td.style.textAlign = "center";

  return td;
}
