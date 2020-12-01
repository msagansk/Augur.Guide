export function getQueryStringEnsDomainData(arrReleaseData) {
  let strContentHashes = function (arrReleaseData) {
    let ret = "";
    for (const releaseData of arrReleaseData) {
      for (const releasedContentHash of releaseData.contentHashes) {
       if (releasedContentHash.value != "") {
          ret += `"` + releasedContentHash.value + `" `;
        }
      }
    }
    return ret;
  };

  return (
    `{
    resolvers(where: { contentHash_in: [` +
    strContentHashes(arrReleaseData) +
    `] }) 
      {
      domain {
        name
        resolver {
          contentHash
          events(first: 1, orderBy: blockNumber, orderDirection: desc) {
            ... on ContenthashChanged {
              blockNumber
              transactionID
            }
          }
        }
      }
    }
  }`
  );
}
