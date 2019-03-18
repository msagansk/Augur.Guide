---
title: Reporters
---
# Reporters 

Reporters are people who own Augur’s token, REP. Decentralized REP holders have the power to affect the final outcome of Augur’s markets. This is very different from a typical prediction market where the reporting source is a centralized body, usually a company running the prediction market. Augur’s reporters have a job to oversee the initial report of a market and ensure it is the correct answer. For doing this work REP holders are rewarded with ETH, collected as reporting fees.

### Why would a reporter want to report the truth? 

Why not lie and try to scam others? Well,  reporters have a symbiotic relationship with market traders. Traders pay reporters a percentage in fees when SHARES are redeemed or burned for ETH, which is called the reporting fee. They pay this fee to reporters so that they can have confidence that the market they are trading on will resolve correctly, so that it matches what actually happened in the real world. If traders do not have this confidence, they will not use Augur. If traders aren’t using Augur, REP is worthless.

### What happens if different reporters disagree as to what the truth is? 

Well, there are a series of dispute rounds where reporters can stake a bond to make one of the outcomes the “tentative outcome”. Then time is given to other reporters to stake a higher bond on one of the other outcomes. This continues until the next bond doesn’t fill after a week, or a fork threshold is reached. This is detailed on the [Reporting Process](https://augur.guide/4-reporters/1-reporting-process.html) page.

### Why would reporters risk their REP to correct a market for traders? 

Well, once a disputed market’s outcome is resolved, the reporters who staked on the winning outcome get to take the REP that was staked on the incorrect outcome(s). Due to the way the dispute round bond sizes scale, this results in a 50% ROI (payable in REP) for the reporters. So on any individual market, you can potentially earn 50% by disputing against liars by reporting the truth. And for Augur as a whole, reporters want to report the truth so that traders use the system, generate fees, and thus give a fundamental value to ETH.

### How do I figure out what the correct answer to the market is?

It should be possible for the average person to figure out the answer based on reading the on-chain market details fully, and looking for the answer once the market is in the reporting phase. If a resolution source is provided, the answer should be readily apparent on the resolution source. If the resolution source is “General Knowledge”, the answer should be easily findable - usually through an Internet search. You may want to also talk with other reporters on the various community sites to learn more about controversial markets.

### What if a market’s question doesn’t have a truthful answer?

Every market has “Invalid” as a potential outcome. This outcome is used for a variety of reasons, but the basic idea is that it is the correct answer to use when the market doesn’t have a singular, clear cut, objectively verifiable answer known at the market’s end time. This outcome is basically Augur saying “I can’t answer this question”. There is a handy [check sheet](https://augur.guide/4-reporters/2-checksheet.html) that you can use to ask yourself if a market is Invalid or not.

### How does the reporting fee get set?

The reporting fee is a percentage that is adjusted weekly. It is adjusted upwards (33% ceiling) to apply upwards pressure on the price of REP if it is too low. It is adjusted downwards if the price of REP is too high, to a floor of 0.01%. What determines what is too high or low? Well, we want to ensure that REP is valuable enough such that it costs more to attack the reporting process than what can be gained out of trading on markets. This is modelled in the [Augur whitepaper](https://www.augur.net/whitepaper.pdf).

### How do I collect my reporting fees?

Reporting fees do not come to you automatically, unfortunately. You have to either a) participate in a dispute in a disputing period (every 7 days) or b) buy participation tokens. There may not be any markets to dispute in a given week, or you may miss out on the opportunity to do so, so your only option becomes the participation tokens. You exchange your REP for these tokens, and then after the week is over you can trade the tokens back in to get your REP plus your share of the ETH that was collected in fees. This needs to be done each week to collect that week’s reporting fees, to “prove” that you participated in the reporting process. Your share of the ETH in fees is proportional to the amount of participation tokens you purchased relative to everyone else. 

Note that historically, the gas fees required to purchase the participation tokens is usually higher than the amount of ETH gained. As usage of Augur grows, this will eventually stop being the case.

### I’ve heard that REP can be forked, how does that work?

Check out the [Forks](https://augur.guide/4-reporters/3-forks.html) page. Note that a fork has not yet happened in Augur.
