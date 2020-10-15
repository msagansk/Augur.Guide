---
title: The Life of a Market
---

# Getting Started: The Life of a Market

Understanding the process flow of a market is important in using Augur effectively, no matter how you intend to participate. Here is a diagram depicting a simplified view on the life of a prediction market:

<div class="center">
{% include image.html url="/assets/images/Simplified Prediction Market Lifetime.svg" description="Figure 1. Simplified Prediction Market Lifetime" %}
</div>

Let’s go through the steps:

1. **Market Created** - Someone has decided to ask a question about a particular event that will occur in the future, which kicks off the whole process. Anybody can do this, provided they have enough capital to meet the required setup fees (Ethereum gas) and bonds. Details on market creation can be found on the [Market Creators page](https://augur.guide/2-market-creators.html).

2. **Trading Occurs** - As soon as the market is created, trading/betting on the potential outcomes can begin. It is important to understand that once a market is created, the potential to trade never ends, even if the market has been finalized! That is why Figure 1 depicts the next steps inside the trading step. Additional details on how trading works can be found on the [Traders page](https://augur.guide/3-traders.html).

3. **Market End Time Reached (a.k.a. Reporting Start Time)** - This is a time originally set by the market creator when the market was made. This time triggers the beginning of the reporting phase. The question that the market originally asked now should have an answer that is generally available to the public. It is important to remember that trading on the outcomes can still occur. This is useful for traders looking to exit out of their [position](https://augur.guide/glossary.html#Position) earlier than waiting for the reporting process to finish. However, it can also be dangerous if you still have orders in the [order book](https://augur.guide/glossary.html#Order%20Book) for a losing outcome - be sure to keep an eye on the markets you are participating in. It is critical to the Augur platform that the market event has happened and an answer is known. If that didn't occur, the market should resolve as [Invalid](https://augur.guide/glossary.html#Invalid%20Outcome).

4. **Reporting** - It is now time to officially determine what Augur thinks the answer to the market question is (note that only a singular answer is possible in an Augur market, multiple answers will make the market resolve as invalid). In the best case, the market creator's [designated reporter](https://augur.guide/glossary.html#Designated%20Reporter), which is usually the same address as the market creator, submits an [Initial Report](https://augur.guide/glossary.html#Initial%20Report) which is the answer the designated reporter believes to be true. However, to prevent lies and scamming, time is needed for [reporters](https://augur.guide/glossary.html#Reporter) ([REP](https://augur.guide/glossary.html#REP) holders) to review the submitted initial report and potentially [dispute](https://augur.guide/glossary.html#Dispute) that answer for a different one. Assuming the initial report was truthful so no disputes were submitted, the market completes the reporting step. If a dispute was submitted, a more complicated process kicks off which is explained in detail on [Reporting Process]() page.

5. **Settlement** - Now the traders who own [SHARES](https://augur.guide/glossary.html#SHARE) in the winning outcome can exchange them back with the market for their winnings. There is actually a couple substeps here. After reporting the market is "resolved", but it needs an extra transaction to be [finalized](https://augur.guide/glossary.html#Finalized%20Market) which cleans up the market and allows winnings to be redeemed after a three day delay. The 3 day delay was originally built into the Augur smart contracts as a safety valve in case of a critical bug, but that feature was removed while the delay remained. This delay will be removed in future versions of Augur as it no longer serves a purpose. Once the market is finalized, there is nothing left to do, although trading outcome SHARES is still possible, so don't forget to cancel orders in the order book if you have any!
