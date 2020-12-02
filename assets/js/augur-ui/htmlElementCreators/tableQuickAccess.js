import * as BaseElements from "./baseElements.js";
import * as Url from "./url.js";
import * as CONSTANTS from "../../constants.js";

export function create(arrEnsDomainData) {
  let tbl = document.getElementById("quick-access-table");
  let tbody = document.createElement("tbody");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");

  //generate thead
  tr.appendChild(BaseElements.th("ENS", 2, 1));
  tr.appendChild(BaseElements.th("URL", 1, 2));
  tr.appendChild(BaseElements.th("Tag", 2, 1));
  tr.appendChild(BaseElements.th("currencies", 2, 1));
  //tr.appendChild(CreateElements.th("details", 2, 1));
  thead.appendChild(tr);
  tr = document.createElement("tr");
  tr.appendChild(BaseElements.th("(*1)"));
  tr.appendChild(BaseElements.th("(*2)"));
  thead.appendChild(tr);
  tbl.appendChild(thead);

  for (const ensDomainData of arrEnsDomainData) {
    if (isTargetDomain(ensDomainData.domainName)) {
      tr = document.createElement("tr");
      //ENS domain name
      tr.appendChild(BaseElements.td(ensDomainData.domainName, "center"));
      //for ENS-enabled browser
      tr.appendChild(
        BaseElements.tdTextLink(
          Url.getUrlAugurUiFromEnsDomainName(ensDomainData.domainName),
          Url.getUrlAugurUiFromEnsDomainName(ensDomainData.domainName),
          "",
          "center"
        )
      );
      //for ENS-disabled browser
      tr.appendChild(
        BaseElements.tdTextLink(
          Url.getUrlAugurUiFromEnsDomainNameLink(ensDomainData.domainName),
          Url.getUrlAugurUiFromEnsDomainNameLink(ensDomainData.domainName),
          "",
          "center"
        )
      );
      //tag
      tr.appendChild(
        BaseElements.tdTextLink(
          Url.getUrlGithubRelease(ensDomainData.tagName),
          ensDomainData.tagName,
          " (for " + ensDomainData.use + ")",
          "",
          "center"
        )
      );
      //currencies
      tr.appendChild(BaseElements.td(ensDomainData.currencies, "center"));
      tbody.appendChild(tr);
      tbl.appendChild(tbody);
    }
  }
}
function isTargetDomain(currentDomainName) {
  for (let CommunityName in CONSTANTS.ENS.CommunityManagedAugurUiDomains) {
    for (const DomainName in CONSTANTS.ENS.CommunityManagedAugurUiDomains[
      CommunityName
    ]) {
      if (
        currentDomainName == DomainName &&
        CONSTANTS.ENS.CommunityManagedAugurUiDomains[CommunityName][DomainName]
      ) {
        return true;
      }
    }
  }
  return false;
}
