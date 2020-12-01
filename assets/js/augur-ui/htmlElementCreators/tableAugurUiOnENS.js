import * as BaseElements from "./baseElements.js";
import * as Url from "./url.js";
import * as CONSTANTS from "../../constants.js";

export function create(param) {
  let tbl = document.getElementById(param.tableID);
  let tbody = document.createElement("tbody");
  let tr = document.createElement("tr");

  for (const ensDomainData of param.arrEnsDomainData) {
    if (isTargetDomain(ensDomainData.domainName, param.outputCommunity)) {
      tr = document.createElement("tr");
      tr.appendChild(BaseElements.th(ensDomainData.domainName, 1, 3, "left"));
      tbody.appendChild(tr);

      createTableRow(
        tbody,
        "UI (for ENS-enabled browser)",
        Url.getUrlAugurUiFromEnsDomainName(ensDomainData.domainName),
        Url.getUrlAugurUiFromEnsDomainName(ensDomainData.domainName)
      );

      createTableRow(
        tbody,
        "UI (for ENS-disabled browser)",
        Url.getUrlAugurUiFromEnsDomainNameLink(ensDomainData.domainName),
        Url.getUrlAugurUiFromEnsDomainNameLink(ensDomainData.domainName)
      );

      createTableRow(
        tbody,
        "Tag",
        Url.getUrlGithubRelease(ensDomainData.tagName),
        ensDomainData.tagName,
        " (for " + ensDomainData.use + ")"
      );

      createTableRow(
        tbody,
        "CIDv1",
        Url.getUrlIpldExplorer(ensDomainData.CIDv1),
        ensDomainData.CIDv1
      );

      createTableRow(
        tbody,
        "Content Changed Block",
        Url.getUrlEtherscanBlock(ensDomainData.blockNumber),
        ensDomainData.blockNumber
      );

      createTableRow(
        tbody,
        "Content Changed TX",
        Url.getUrlEtherscanTx(ensDomainData.transactionID),
        ensDomainData.transactionID
      );

      createTableRow(
        tbody,
        "ENS app",
        Url.getUrlEns(ensDomainData.domainName),
        Url.getUrlEns(ensDomainData.domainName)
      );

      tbl.appendChild(tbody);
    }
  }
}
function createTableRow(tbody, headerName, url, text, addedText = "") {
  const WhiteSpace = "\u00A0\u00A0\u00A0\u00A0";

  let tr = document.createElement("tr");
  tr.appendChild(BaseElements.td(WhiteSpace));
  tr.appendChild(BaseElements.td(headerName));
  tr.appendChild(BaseElements.tdTextLink(url, text, addedText));
  tbody.appendChild(tr);
}
function isTargetDomain(currentDomainName, outputCommunity) {
  if (outputCommunity == null) {
    for (const CommunityNames in CONSTANTS.ENS.CommunityManagedAugurUiDomains) {
      for (const DomainName in CONSTANTS.ENS.CommunityManagedAugurUiDomains[CommunityNames]) {
        if (DomainName == currentDomainName) {
          return false;
        }
      }
    }
    return true;
  } else {
    for (const OutputDomainName in outputCommunity) {
      if (
        currentDomainName == OutputDomainName &&
        outputCommunity[OutputDomainName]
      ) {
        return true;
      }
    }
    return false;
  }
}
