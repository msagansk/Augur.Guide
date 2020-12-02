export const URL = {
  GraphQL: {
    ENS: "https://api.thegraph.com/subgraphs/name/ensdomains/ens",
  },
  IPFS: {
    Explorer: "https://explore.ipld.io/#/explore/",
  },
  EtherScan: {
    tx: "https://etherscan.io/tx/",
    block: "https://etherscan.io/block/",
  },
  GitHub: {
    AugurProject: {
      ReleaseTag: "https://github.com/AugurProject/augur/releases/tag/",
    },
    API: {
      Releases: "https://api.github.com/repos/AugurProject/augur/releases",
      LatestRelease:
        "https://api.github.com/repos/AugurProject/augur/releases/latest",
    },
  },
  ENS: {
    App: "https://app.ens.domains/name/",
  },
};

export const ENS = {
  CommunityManagedAugurUiDomains: {
    SmartyPants: {
      "augur2.eth": true,
      "reporting.augur2.eth": false,
      "trading.augur2.eth": false,
    },
    AugurDAO: {
      "augurapp.eth": false,
      "bet.augurapp.eth": false,
    },
  },
};

export const AugurUiVersionInfo = {
  "v2.1.13-beta.2": { Currencies: ["DAI"] },
  "v2.1.13-beta.1": { Currencies: ["DAI"] },
  "v2.1.13-beta0": { Currencies: ["DAI"] },
  "v2.1.12": { Currencies: ["DAI"] },
  "v2.2.0": { Currencies: ["ETH", "DAI"] },
  "v2.1.11": { Currencies: ["DAI"] },
  "v2.1.10": { Currencies: ["DAI"] },
  "v2.1.9": { Currencies: ["DAI"] },
  "v2.1.8": { Currencies: ["DAI"] },
  "v2.1.7": { Currencies: ["DAI"] },
  "v2.1.6": { Currencies: ["DAI"] },
  "v2.1.4": { Currencies: ["DAI"] },
  "v2.1.0": { Currencies: ["DAI"] },
  "v2.0.10": { Currencies: ["DAI"] },
  "v2.0.7": { Currencies: ["DAI"] },
  "v2.0.5": { Currencies: ["DAI"] },
  "v2.0.3": { Currencies: ["DAI"] },
};
