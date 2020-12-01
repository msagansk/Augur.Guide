import * as ExternalData from "./externalData/index.js";
import * as HtmlElements from "./htmlElementCreators/index.js";
import * as CONSTANTS from "../constants.js";

main();

async function main() {
  let arrReleaseData = await ExternalData.Github.getData();
  //console.log("GithubData", arrReleaseData);

  // official release list
  HtmlElements.TableOfficialRelease.create(arrReleaseData);

  let arrEnsDomainData = await ExternalData.EnsDomain.getData(arrReleaseData);
  //console.log("arrEnsDomainData", arrEnsDomainData);

  // quick access list
  HtmlElements.TableQuickAccess.create(arrEnsDomainData);

  // augur2.eth list
  let paramTableAugurUiOnEns = {
    arrEnsDomainData: arrEnsDomainData,
    tableID: "smarty-pants-table",
    outputCommunity: CONSTANTS.ENS.CommunityManagedAugurUiDomains.SmartyPants,
  };
  HtmlElements.TableAugurUiOnEns.create(paramTableAugurUiOnEns);

  // unknown ENS domains list
  paramTableAugurUiOnEns = {
    arrEnsDomainData: arrEnsDomainData,
    tableID: "unknown-ens-domain-table",
    outputCommunity: null,
  };
  HtmlElements.TableAugurUiOnEns.create(paramTableAugurUiOnEns);
}
