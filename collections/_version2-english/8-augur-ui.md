---
title: Augur UI
---

{% capture glossary_path %}{{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html{% endcapture %}
{% assign glossary_smarty_pants = glossary_path | append: '#Smarty-pants' %}
{% assign glossary_forecast_foundation = glossary_path | append: '#Forecast_Foundation' %}

# Quick way to access Augur UI
Are you in a hurry? Use the links below.

<table id="quick-access-table"></table>

(*1) For browsers which have installed [MetaMask-Extention](https://metamask.io/) or browsers support [ENS](https://ens.domains/) ([Brave](https://brave.com/), [Opera](https://www.opera.com/), [Status](https://status.im/web-three-browser/)).

(*2) For browsers that don't have MetaMask-Extention and not support ENS.

# Augur UIs are served in IPFS

To be censorship resistant, Augur UIs are served via a peer-to-peer content network called [IPFS](https://ipfs.io/). The content of Augur UI is referenced by a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) (`content identifier`). You can either run your own IPFS gateway so you don't have to trust anyone by installing [IPFS Desktop](https://github.com/ipfs-shipyard/ipfs-desktop/blob/master/README.md) or you can trust a [Public IPFS Gateway](https://docs.ipfs.io/concepts/ipfs-gateway/#gateway-providers) like dweb.link, eth.link, cf-ipfs.com.

As an example, the CIDv1 of Augur UI for trading (version 2.1.10) is:
```
bafybeig25rero6xqll7vawbdcu3neccpaagelibl7zp6wrj76tynndkfnm
```
This content would have a URL of:
```
ipfs://bafybeig25rero6xqll7vawbdcu3neccpaagelibl7zp6wrj76tynndkfnm
```
If viewed via a local IPFS gateway:
```
http://bafybeig25rero6xqll7vawbdcu3neccpaagelibl7zp6wrj76tynndkfnm.ipfs.localhost:8080
```
If viewed via centralized gateway:
```
https://bafybeig25rero6xqll7vawbdcu3neccpaagelibl7zp6wrj76tynndkfnm.ipfs.dweb.link
https://bafybeig25rero6xqll7vawbdcu3neccpaagelibl7zp6wrj76tynndkfnm.ipfs.cf-ipfs.link
https://bafybeig25rero6xqll7vawbdcu3neccpaagelibl7zp6wrj76tynndkfnm.ipfs.eth.link
```

As you see, the URL containing CID is long and not human readable. In addition, each new UI release will produce a different CID. ​These make it almost impossible to memorize the URLs of the UI. However by using the (*semi-trusted*) ENS solutions listed below, you can reduce the pain you experience when accessing the UI.

# Community Managed UIs with ENS

## What is Community Managed UI?
​"Community Managed UI" is the Augur UI which is linked by ENS whose content (CID) is updated by a community.

## What is ENS?
[ENS](https://ens.domains/) (`Ethereum Name Service`) is a censorship resistant name resolution system. It natively supports IPFS content hashes. It serves the same purpose that DNS does in the legacy internet. While a DNS address generally maps to an IP address that is hosting a website, an ENS address generally maps to the content hash of a website. If you want to know more about ENS, check the [ENS documentation](https://docs.ens.domains/).

In short, ENS lets you access Augur UI with a URL that does not contain a CID.

It should be noted that when the UI is updated, the CID changes. Therefore the CID registered with the ENS must be updated each time the UI is updated. Otherwise the UI referenced by the ENS will remain out of date.

## Requirements
To access the UI from ENS, your browser needs to support ENS natively, or you need to install a browser plugin that adds ENS support such as [MetaMask-Extention](https://metamask.io/) or [IPFS Companion](https://github.com/ipfs-shipyard/ipfs-companion/blob/master/README.md)

Browsers that support ENS natively are:
- [Brave](https://brave.com/)
- [Opera](https://www.opera.com/)
- [Status](https://status.im/web-three-browser/)

## *.eth.link
Don't worry if you don't meeet the above [requirements](#requirements), there is a way to access Augur UI without using the content hash directly. That is to append `.link` to the end of any ENS domain name.

For example, if the ENS domain name is:
```
augur2.eth
```
then append `.link` to the end:
```
augur2.eth.link
```
That's all. Just type this string into your browser's address-bar, then you get the content from IPFS via the eth.link public IPFS Gateway!

**Note:** `eth.link` is operated by [Ethereum Name Service](https://ens.domains/) with support from [Protocol Labs](https://protocol.ai/) with no guarantees, so when you access the UI from `*.eth.link`, you need to trust them.

---

## augur2.eth
`augur2.eth` is one of the ENS domains where Augur UI is registered. This domain is managed by Augur community members called [smarty-pants]({{glossary_smarty_pants}}).

The CID registered with the ENS is updated by a DAO whose members are these Augur community members. They have shown a deep knowledge and interest in Augur and have received the [smarty-pants]({{glossary_smarty_pants}}) role in [Discord](https://invite.augur.net/). Each time the UI is updated, they will verify that the CID provided by the Augur devs is the correct one and update the CID registered with `augur2.eth` via vote (majority wins, quorum of 2).

### Links & Current Status
**Note:** Subdomains do not work well with ens.link, so they have ceased to be updated.  It is recommended to **NOT** use `trading.augur2.eth`, `reporting.augur2.eth` as they are not maintained.

<div class="center"><table id="smarty-pants-table"></table></div>

## ENS domains other than the above
If there are ENS domain which has Augur UI content other than the above, these will be listed here. If the list is not shown, that means there are no such ENS domain.

<div class="center"><table id="unknown-ens-domain-table"></table></div>

# Official Release

This is the list of products that have been released in the [Augur GitHub Repository](https://github.com/AugurProject/augur/releases/). 

## Official Release List
<table id="official-release-table"></table>



## Why are there two versions in one release?
Every Augur release has two versions, `trading` and `reporting`. The reporting UI is basically browse-only as it has trading disabled but you can use it to participate in the Augur reporting system. The trading UI has no restrictions, which means you can use it for both reporting and trading.

Why does the reporting version (read only) exist? **The underlying reasons are unknown**, but it is *suspected* to be for legal reasons.
 
Gambling is prohibited in some countries, and when those people use Augur UI, it is suspected that the developers of Augur want to disable trading for them. In fact, when accessing Augur UI from the link on [augur.net](https://augur.net/), people in certain countries are redirected to the reporting UI, and people in other countries get sent to the trading UI.

There is no official announcement about the reasoning for this from [Forecast Foundation]({{glossary_forecast_foundation}}).


{% include augur-ui.html %}
