---
title: Reporters
---
# Reporters 

Reporters are people who own Augur’s token, [REP]({{ "/" | absolute_url }}/glossary.html#REP). Decentralized REP holders have the power to affect the final [outcome]({{ "/" | absolute_url }}/glossary.html#Outcome) of Augur’s [markets]({{ "/" | absolute_url }}/glossary.html#Market). This is very different from a typical prediction market where the reporting source is a centralized body, usually a company running the prediction market. Augur’s reporters have a job to oversee the [initial report]({{ "/" | absolute_url }}/glossary.html#Initial%20Report) of a market and ensure it is the correct answer. For doing this work REP holders are rewarded with [ETH]({{ "/" | absolute_url }}/glossary.html#ETH), collected as [reporting fees]({{ "/" | absolute_url }}/glossary.html#Reporting%20Fee).

### Why would a reporter want to report the truth? 

Why not lie and try to scam others? Well,  reporters have a symbiotic relationship with market traders. Traders pay reporters a percentage in fees when [SHARES]({{ "/" | absolute_url }}/glossary.html#SHARE) are redeemed or burned for ETH, which is called the reporting fee. They pay this fee to reporters so that they can have confidence that the market they are trading on will resolve correctly, so that it matches what actually happened in the real world. If traders do not have this confidence, they will not use Augur. If traders aren’t using Augur, REP is worthless.

### What happens if different reporters disagree as to what the truth is? 

Well, there are a series of [dispute rounds]({{ "/" | absolute_url }}/glossary.html#Dispute%20Round) where reporters can stake a [bond]({{ "/" | absolute_url }}/glossary.html#Dispute%20Bond) to make one of the outcomes the [tentative outcome]({{ "/" | absolute_url }}/glossary.html#Tentative%20Outcome). Then time is given to other reporters to stake a higher bond on one of the other outcomes. You can think of this as analogous to higher and higher levels of court in a judicial system. This dispute process continues until the next bond doesn’t fill after a week, or a [fork threshold]({{ "/" | absolute_url }}/glossary.html#Fork%20Threshold) is reached. The fork threshold could be thought of as the supreme court, to continue with our analogy. This process is detailed on the [Reporting Process]({{ "/" | absolute_url }}/4-reporters/1-reporting-process.html) page.

### Why would reporters risk their REP to correct a market for traders? 

Well, once a disputed market’s outcome is resolved, the reporters who staked on the winning outcome get to take the REP that was staked on the incorrect outcome(s). Due to the way the dispute round bond sizes scale, this results in a 50% ROI (payable in REP) for the reporters. So on any individual market, you can potentially earn 50% returns by disputing (i.e. staking) against liars by [reporting]({{ "/" | absolute_url }}/glossary.html#Report) the truth. And for Augur as a whole, reporters want to report the truth so that traders use the system, generate reporting fees, and thus give a fundamental value to REP.

### How do I figure out what the correct answer to the market is?

It should be possible for the average person to figure out the answer based on reading the on-chain market details fully, and looking for the answer once the market is in the reporting phase. If a resolution source is provided, the answer should be readily apparent on the resolution source. If the resolution source is “General Knowledge”, the answer should be easily findable - usually through an Internet search. You may want to also talk with other reporters on the various [community sites]({{ "/" | absolute_url }}/5-external-resources.html) to learn more about controversial markets.

### What if a market’s question doesn’t have a truthful answer?

Every market has [Invalid]({{ "/" | absolute_url }}/glossary.html#Invalid%20Outcome) as a potential outcome. This outcome is used for a variety of reasons, but the basic idea is that it is the correct answer to use when the market doesn’t have a singular, clear cut, objectively verifiable answer known at the market’s end time. This outcome is effectively Augur saying “I can’t answer this question”. There is a handy [check sheet]({{ "/" | absolute_url }}/4-reporters/2-checksheet.html) that you can use to ask yourself if a market is Invalid or not. When the truth is not clear, or changed during reporting, Augur can't provide a reliable or consistent answer. That's when invalid becomes the go-to option. 

### Can [whales](https://en.wikipedia.org/wiki/High_roller) just bully markets the way they want them to resolve?

Reporting isn't a [game of chicken](https://en.wikipedia.org/wiki/Chicken_(game)). Augur has fairly complicated game-theory for how the reporting process works, but it essentially revolves around traders and reporters using truth as a sort of [schelling point](https://en.wikipedia.org/wiki/Focal_point_(game_theory)). Additional details as to why can be found in the [Augur Whitepaper](https://www.augur.net/whitepaper.pdf).

### How does the reporting fee get set?

The [reporting fee]({{ "/" | absolute_url }}/glossary.html#Reporting%20Fee) is a percentage that is adjusted weekly. It is adjusted upwards (33% ceiling) to apply upwards pressure on the price of REP if it is too low. It is adjusted downwards if the price of REP is too high, to a floor of 0.01%. What determines what is too high or low? Well, we want to ensure that REP is valuable enough such that it costs more to attack the reporting process than what can be gained out of trading ETH on markets. This security model is detailed in the [Augur whitepaper](https://www.augur.net/whitepaper.pdf).

### How do I collect my reporting fees?

Reporting fees do not come to you automatically, unfortunately. You have to either a) participate in a dispute in a disputing period (every 7 days) or b) buy [participation tokens]({{ "/" | absolute_url }}/glossary.html#Participation%20Token). There may not be any markets to dispute in a given week, or you may miss out on the opportunity to do so, so your only option becomes the participation tokens. You exchange your REP for these tokens, and then after the week is over you can trade the tokens back in to get your REP plus your share of the ETH that was collected in fees. This needs to be done each week to collect that week’s reporting fees, to “prove” that you participated in the reporting process. Your share of the ETH in fees is proportional to the amount of participation tokens you purchased relative to everyone else. 

Note that historically, the gas fees required to purchase the participation tokens is usually higher than the amount of ETH gained. As usage of Augur grows, this will eventually stop being the case.

### I’ve heard that REP can be forked, how does that work?

Check out the [Forks]({{ "/" | absolute_url }}/4-reporters/3-forks.html) page. Note that a fork has not yet happened in Augur.
