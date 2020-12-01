import * as CONSTANTS from "../../constants.js";

export function getUrlIpldExplorer(cid) {
  let url = "-";
  if (cid != "") {
    url = CONSTANTS.URL.IPFS.Explorer + cid;
  }
  return url;
}

export function getUrlAugurUiFromCIDv1(CIDv1) {
  let url = "-";
  if (CIDv1 != "") {
    url = "https://" + CIDv1 + ".ipfs.dweb.link/#!/markets";
  }
  return url;
}

export function getUrlEtherscanTx(tx) {
  let url = "-";
  if (tx != "") {
    url = CONSTANTS.URL.EtherScan.tx + tx;
  }
  return url;
}

export function getUrlEtherscanBlock(block) {
  let url = "-";
  if (block != "") {
    url = CONSTANTS.URL.EtherScan.block + block;
  }
  return url;
}

export function getUrlGithubRelease(tag) {
  let url = "-";
  if (tag != "") {
    url = CONSTANTS.URL.GitHub.AugurProject.ReleaseTag + tag;
  }
  return url;
}

export function getUrlEns(domainName) {
  let url = "-";
  if (domainName != "") {
    url = CONSTANTS.URL.ENS.App + domainName;
  }
  return url;
}
export function getUrlAugurUiFromEnsDomainName(domainName) {
  let url = "-";
  if (domainName != "") {
    url = "https://" + domainName;
  }
  return url;
}
export function getUrlAugurUiFromEnsDomainNameLink(domainName) {
  let url = "-";
  if (domainName != "") {
    url = "https://" + domainName + ".link";
  }
  return url;
}
