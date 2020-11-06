export function getData() {
  const ReleasesUrl =
    "https://api.github.com/repos/AugurProject/augur/releases";
  return new Promise(async (resolve, reject) => {
    let latestRelease = await getJsonFromApi(ReleasesUrl + "/latest");
    let arrReleases = await getJsonFromApi(ReleasesUrl);
    let arrJson = [];
    let CIDv1s = {};
    for (let i = 0; i < arrReleases.length; i++) {
      CIDv1s = getCIDv1s(arrReleases[i].body);

      arrJson[i] = {
        tagName: {
          value: arrReleases[i].tag_name,
          titleName: "tag",
        },
        githubUrl: {
          value: arrReleases[i].html_url,
          titleName: "Github",
        },
        createdDatetime: {
          value: arrReleases[i].created_at,
          titleName: "created date",
        },
        publishedDatetime: {
          value: arrReleases[i].published_at,
          titleName: "publiched date",
        },
        tradingUiUrl: {
          value: getUiUrl(CIDv1s.trading),
          titleName: "trading UI",
        },
        reportingUiUrl: {
          value: getUiUrl(CIDv1s.reporting),
          titleName: "reporting UI",
        },
        note: {
          value: getNote(
            arrReleases[i].id,
            latestRelease.id,
            arrReleases[i].prerelease
          ),
          titleName: "note",
        },
      };
    }
    resolve(arrJson);
  });
}

function getCIDv1s(body) {
  let startPosition = body.search("## IPFS Hashes");
  let endPosition = body.search("## Changes");
  let ipfsHashesBody = body.substring(startPosition, endPosition);
  let splittedIpfsHashesBody = ipfsHashesBody.split("\r\n");
  let reportingCDIv1 = "";
  let tradingCDIv1 = "";
  for (let i = 0; i < splittedIpfsHashesBody.length; i++) {
    if (reportingCDIv1 == "") {
      reportingCDIv1 = getCIDv1(
        splittedIpfsHashesBody,
        i,
        "Reporting",
        "Trading"
      );
    }
    if (tradingCDIv1 == "") {
      tradingCDIv1 = getCIDv1(
        splittedIpfsHashesBody,
        i,
        "Trading",
        "Reporting"
      );
    }
  }
  return { reporting: reportingCDIv1, trading: tradingCDIv1 };
}

function getCIDv1(splittedIpfsHashesBody, i, targetName, untargetedName) {
  let cid = "";
  let startPosition = 0;
  if (splittedIpfsHashesBody[i].search(targetName) > 0) {
    for (let j = i + 1; j < splittedIpfsHashesBody.length; j++) {
      if (splittedIpfsHashesBody[j].search(untargetedName) > 0) {
        break;
      }
      if (splittedIpfsHashesBody[j].search("CIDv1") > 0) {
        startPosition = splittedIpfsHashesBody[j].search(":");
        cid = splittedIpfsHashesBody[j]
          .substring(startPosition)
          .replace(":", "")
          .trim();
        break;
      }
    }
  }
  return cid;
}

async function getJsonFromApi(url) {
  let response = await fetch(url);
  return response.json();
}

function getUiUrl(CIDv1) {
  let url = "";
  if (CIDv1 != "") {
    url = "https://" + CIDv1 + ".ipfs.dweb.link/#!/markets";
  }
  return url;
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
