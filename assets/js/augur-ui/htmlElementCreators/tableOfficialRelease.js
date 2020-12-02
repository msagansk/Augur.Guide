---
---

import * as BaseElements from "./baseElements.js";
import * as Url from "./url.js";

const AugurFaviconPath =
  "{{ "/" | absolute_url }}assets/images/favicons/augur-icon-36x36.png";
const IpfsFaviconPath =
  "{{ "/" | absolute_url }}assets/images/favicons/ipfs-icon-36x36.png";

export function create(arrReleaseData) {
  let tbl = document.getElementById("official-release-table");

  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let tbody = document.createElement("tbody");

  //generate thead
  tr.appendChild(BaseElements.th("Tag", 2, 1));
  tr.appendChild(BaseElements.th("Released Datetime", 2, 1));
  tr.appendChild(BaseElements.th("Trading", 1, 2));
  tr.appendChild(BaseElements.th("Reporting", 1, 2));
  tr.appendChild(BaseElements.th("Read-only", 1, 2));
  tr.appendChild(BaseElements.th("Currencies", 2, 1)); 
  tr.appendChild(BaseElements.th("Note", 2, 1));
  thead.appendChild(tr);
  tr = document.createElement("tr");
  tr.appendChild(BaseElements.th("UI"));
  tr.appendChild(BaseElements.th("CIDv1"));
  tr.appendChild(BaseElements.th("UI"));
  tr.appendChild(BaseElements.th("CIDv1"));
  tr.appendChild(BaseElements.th("UI"));
  tr.appendChild(BaseElements.th("CIDv1"));
  thead.appendChild(tr);
  tbl.appendChild(thead);

  //generate body
  for (const releaseData of arrReleaseData) {
    tr = document.createElement("tr");

    tr.appendChild(
      BaseElements.tdTextLink(
        Url.getUrlGithubRelease(releaseData.tagName),
        releaseData.tagName
      )
    );

    tr.appendChild(BaseElements.td(releaseData.publishedDatetime, "center"));

    //for (let j = 0; releaseData.CIDv1s.length > j; j++) {
    for (const cidv0 of releaseData.CIDv1s) {
      tr.appendChild(
        BaseElements.tdIconLinkByFile(
          Url.getUrlAugurUiFromCIDv1(cidv0.value),
          AugurFaviconPath
        )
      );
      tr.appendChild(
        BaseElements.tdIconLinkByFile(
          Url.getUrlIpldExplorer(cidv0.value),
          IpfsFaviconPath
        )
      );
    }

    tr.appendChild(BaseElements.td(releaseData.currencies,"center"))
    tr.appendChild(BaseElements.td(releaseData.note, "center"));

    tbody.appendChild(tr);
  }
  tbl.appendChild(tbody);
}
