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
