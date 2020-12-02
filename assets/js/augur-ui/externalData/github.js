import * as CONSTANTS from "../../constants.js";

export function getData() {
  return new Promise(async (resolve, reject) => {
    let githubLatestReleaseData = await getJsonFromApi(
      CONSTANTS.URL.GitHub.API.LatestRelease
    );
    let arrGithubReleaseData = await getJsonFromApi(
      CONSTANTS.URL.GitHub.API.Releases
    );
    let arrReleaseData = [];
    let cidv0s = [];
    let cidv1s = [];
    let contentHashes = [];
    let tagName = "";

    for (const githubReleaseData of arrGithubReleaseData) {
      cidv0s = getCIDv0s(githubReleaseData.body);
      cidv1s = getCIDv1s(cidv0s);
      contentHashes = getContentHashes(cidv0s);
      tagName = githubReleaseData.tag_name;

      arrReleaseData.push({
        tagName: tagName,
        githubUrl: githubReleaseData.html_url,
        createdDatetime: githubReleaseData.created_at,
        publishedDatetime: githubReleaseData.published_at,
        CIDv0s: cidv0s,
        CIDv1s: cidv1s,
        contentHashes: contentHashes,
        currencies: getCurrencies(tagName),
        note: getNote(
          githubReleaseData.id,
          githubLatestReleaseData.id,
          githubReleaseData.prerelease
        ),
      });
    }
    resolve(arrReleaseData);
  });
}

function getCIDv0s(body) {
  let startPosition = body.search("## IPFS Hashes");
  let endPosition = body.search("## Changes");
  let ipfsHashesBody = body.substring(startPosition, endPosition);
  let splittedIpfsHashesBody = ipfsHashesBody.split("\r\n");

  let cidv0s = {
    trading: "",
    reporting: "",
    readonly: "",
  };

  for (let i = 0; i < splittedIpfsHashesBody.length; i++) {
    if (cidv0s.trading == "") {
      cidv0s.trading = getCIDv0(splittedIpfsHashesBody, i, "Trading");
    }
    if (cidv0s.reporting == "") {
      cidv0s.reporting = getCIDv0(splittedIpfsHashesBody, i, "Reporting");
    }
    if (cidv0s.readonly == "") {
      cidv0s.readonly = getCIDv0(splittedIpfsHashesBody, i, "Read-only");
    }
  }
  return getSortedHashes(cidv0s);
}
function getCIDv0(splittedIpfsHashesBody, i, targetName) {
  let cidv0 = "";
  let startPosition = 0;
  if (splittedIpfsHashesBody[i].search(targetName) > 0) {
    for (let j = i + 1; j < splittedIpfsHashesBody.length; j++) {
      if (splittedIpfsHashesBody[j].search("CIDv0") > 0) {
        startPosition = splittedIpfsHashesBody[j].search(":");
        cidv0 = splittedIpfsHashesBody[j]
          .substring(startPosition)
          .replace(":", "")
          .trim();
        break;
      }
    }
  }
  return cidv0;
}
function getSortedHashes(hashes) {
  return [
    { name: "Trading", value: hashes.trading },
    { name: "Reporting", value: hashes.reporting },
    { name: "Read-only", value: hashes.readonly },
  ];
}
const hashPosition = {
  trading: 0,
  reporting: 1,
  readonly: 2,
};

function getCIDv1s(cidv0s) {
  let cidv1s = {
    trading: convertCidV0ToV1(cidv0s[hashPosition.trading].value),
    reporting: convertCidV0ToV1(cidv0s[hashPosition.reporting].value),
    readonly: convertCidV0ToV1(cidv0s[hashPosition.readonly].value),
  };
  return getSortedHashes(cidv1s);
}
function convertCidV0ToV1(v0) {
  let ret = "";
  if (v0 != "") {
    ret = contentHash.helpers.cidV0ToV1Base32(v0);
  }
  return ret;
}
function getContentHashes(cidv0s) {
  let contentHashes = {
    trading: convertCidV0ToContentHash(cidv0s[hashPosition.trading].value),
    reporting: convertCidV0ToContentHash(cidv0s[hashPosition.reporting].value),
    readonly: convertCidV0ToContentHash(cidv0s[hashPosition.readonly].value),
  };
  return getSortedHashes(contentHashes);
}
function convertCidV0ToContentHash(v0) {
  let ret = "";
  if (v0 != "") {
    ret = "0x" + contentHash.fromIpfs(v0);
  }
  return ret;
}
async function getJsonFromApi(url) {
  let response = await fetch(url);
  return response.json();
}

function getNote(targetId, latestId, isPreRelease) {
  let ret = "";
  if (targetId == latestId) {
    ret = "latest";
  }
  if (isPreRelease) {
    if (ret != "") {
      ret += ",";
    }
    ret += "pre-release";
  }
  if (ret == "") {
    ret = "-";
  }
  return ret;
}

function getCurrencies(tagName){
  if(CONSTANTS.AugurUiVersionInfo.hasOwnProperty(tagName)){
    return CONSTANTS.AugurUiVersionInfo[tagName].Currencies
  }else{
    return ["No Data"]
  }

}
