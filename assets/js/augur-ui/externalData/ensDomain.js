import * as CONSTANTS from "../../constants.js";
import * as GraphQl from "./graphql/index.js";

export async function getData(arrReleaseData) {
  return new Promise(async (resolve, reject) => {
    const queryString = GraphQl.getQueryStringEnsDomainData(arrReleaseData);
    console.debug("queryString",queryString)
    let queryResult = await GraphQl.executeQuery(
      CONSTANTS.URL.GraphQL.ENS,
      queryString
    );
    let arrEnsDomainData = getArrEnsDomainData(queryResult, arrReleaseData);
    resolve(arrEnsDomainData);
  });
}

function getArrEnsDomainData(queryResult, arrReleaseData) {
  let arrEnsDomainData = [];
  let ensDomainData = {};
  let tagAndUse = {};
  let cidv0 = "";
  let cidv1 = "";

  for (const resolver of queryResult.data.resolvers) {
    tagAndUse = getTagAndUse(
      resolver.domain.resolver.contentHash,
      arrReleaseData
    );
    cidv0 = contentHash.decode(resolver.domain.resolver.contentHash.slice(2));
    cidv1 = contentHash.helpers.cidV0ToV1Base32(cidv0);

    ensDomainData = {
      domainName: resolver.domain.name,
      tagName: tagAndUse.tagName,
      use: tagAndUse.use,
      contentHash: resolver.domain.resolver.contentHash,
      CIDv0: cidv0,
      CIDv1: cidv1,
      blockNumber: resolver.domain.resolver.events[0].blockNumber,
      transactionID: resolver.domain.resolver.events[0].transactionID,
      currencies: tagAndUse.currencies,
    };

    arrEnsDomainData.push(ensDomainData);
  }

  return arrEnsDomainData;
}

function getTagAndUse(domainContentHash, arrReleaseData) {
  let tagName = "";
  let use = "";
  let currencies = [];

  for (const releaseData of arrReleaseData) {
    for (const releasedContentHash of releaseData.contentHashes) {
      if (domainContentHash == releasedContentHash.value) {
        tagName = releaseData.tagName;
        use = releasedContentHash.name;
        currencies = releaseData.currencies;
        break;
      }
    }
    if (tagName != "") {
      break;
    }
  }
  return { tagName: tagName, use: use, currencies: currencies };
}
