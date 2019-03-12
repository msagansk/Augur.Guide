---
title: The Life of a Market
---

# Getting Started: The Life of a Market

Understanding the process flow of a market is important in using Augur effectively, no matter how you intend to participate. Here is a diagram depicting a simplified view on the life of a prediction market:

<div class="center">
{% include image.html url="/assets/images/Simplified Prediction Market Lifetime.svg" description="Figure 1. Simplified Prediction Market Lifetime" %}
</div>

Let’s go through the steps:

1. Market Created - Someone has decided to ask a question about a particular event that will occur in the future, which kicks off the whole process. Anybody can do this, provided they have enough capital to meet the required setup fees (Ethereum gas) and bonds. Details on market creation can be found on the [Market Creators page](https://augur.guide/2-market-creators.html).

2. Trading Occurs - As soon as the market is created, trading/betting on the potential outcomes can begin. It is important to understand that once a market is created, the potential to trade never ends, even if the market has been finalized! That is why Figure 1 depicts the next steps inside the trading step. Additional details on how trading works can be found on the [Traders page](https://augur.guide/3-traders.html).

3. Market End Time Reached - This is a time originally set by the market creator when the market was made. This time triggers the beginning of the reporting phase. The question that the market originally asked now should have an answer that is generally available to the public. It is important to remember that trading on the outcomes can still occur. This is useful for traders looking to exit out of their position earlier than waiting for the reporting process to finish. However, it can also be dangerous if you still have orders in the order book for a losing outcome - be sure to keep an eye on the markets you are participating in. It is critical to the Augur platform that the market event has happened and an answer is known. If that didn't occur, the market should resolve as invalid.

4. Reporting - It is now time to officially determine what Augur thinks the answer to the market question is (note that only a singular answer is possible in an Augur market, multiple answers will make the market resolve as invalid). In the best case, the market creator's designated reporter, which is usually the same address as the market creator, submits an "initial report" which is the answer the designated reporter believes to be true. However, to prevent lies and scamming, time is needed for reporters (REP holders) to review the submitted initial report and potentially dispute that answer for a different one. Assuming the initial report was truthful so no disputes were submitted, the market completes the reporting step. If a dispute was submitted, a more complicated process kicks off which is explained in detail in the next section below. Additional details on reporting can also be found on the [Reporters page](https://augur.guide/4-reporters.html).

5. Settlement - Now the traders who own shares in the winning outcome can exchange them back with the market for their winnings. There is actually a couple substeps here. After reporting the market is "resolved", but it needs an extra transaction to be “finalized” which cleans up the market and allows winnings to be redeemed after a three day delay. The 3 day delay was originally built into the Augur smart contracts as a safety valve in case of a critical bug, but that feature was removed while the delay remained. This delay will be removed in future versions of Augur as it no longer serves a purpose. 

## So What About That Reporting Box?

Ok, let’s blow up the reporting process box into its detailed sub-steps and go over them:

<div class="center">
{% include image.html url="/assets/images/Reporting Flowchart.svg" description="Figure 2. Reporting Flowchart" %}
</div>

1. Designated Reporting - This is the first step of the reporting phase and is triggered by the market end time occurring, which was originally set by the market creator when the market was created. The market creator picked an address to be the designated reporter, which is usually the market creator itself. This designated reporter now has 3 days to perform the initial report, which is the first tentative outcome for the market. The designated reporter has to post a bond (in REP) to incentivise other reporters to make sure the outcome selected is the correct answer. The designated reporter does not get to unilaterally decide how the market resolves, the rest of the reporter community has to generally agree. This decentralized resolution process is one of the main strengths of Augur, but it can also cause delays in resolution.

2. Designated Reporter Reported? - Did the designated reporter perform the initial report in the required 3 day window? It is possible that the designated reporter forgot to do so (or neglected to do so for some other reason), which means the market will go into Open Reporting. If the initial report was performed, the market will wait for the next fee window to give other reporters some time to analyze the market and potentially dispute an incorrect tentative outcome.

3. Open Reporting - Anyone can now perform the initial report to potentially claim the “no-show” REP bond the market creator posted. The bond will be rewarded if the initially reported outcome ends up becoming the finalized outcome. This is essentially “free money”, so competition to do open reporting is fierce.

4. Waiting for Next Fee Window - Augur groups all markets into the same 7 day time period/fee window. So, whenever an initial report or dispute occurs, there is a delay before another dispute can occur. This delay is deliberate, it allows for reporters to have a reliable schedule to analyze and discuss questionable markets, gather support for a particular outcome, and acquire enough REP from cold storage if necessary. The start of a fee window is currently set to be every Thursday at 00:00:00 UTC. 

5. Dispute Round - This is the same thing as the fee window. It has two names because reporting fees from markets are collected and dispersed in 7 day chunks based on reporting activity during that same time period. This is the time for reporters to dispute a tentative outcome if they believe it is not the correct answer. Different markets can be in different dispute round numbers, depending on how many times a market has been disputed. Successive dispute rounds escalate the amount of required REP to dispute the tentative outcome until it is no longer disputed or the fork threshold is reached. 

6. Tentative Outcome Disputed? - A market has to have one of its (non-tentative) outcomes REP bonds filled in order to successfully dispute the current tentative outcome. The amount of REP required to dispute scales depending on how many outcomes are in dispute. For the most typical case where only two outcomes are being disputed, the required REP bond doubles every round. This allows for a 50% return on investment for the reporters who staked on the final outcome, while the reporters who staked on the incorrect outcome(s) lose their bond. If the required REP bond is not filled, the market is no longer in dispute, so it moves to the resolved state.

7. Dispute Bond Above Fork Threshold? - The dispute bond has been filled for one of the (non-tentative) outcomes so a check is performed. If the required bond was at least 2.5% of the total supply of REP, the market triggers a fork. If the required bond was not that high, the disputed outcome becomes the new tentative outcome and the market waits for the next fee window to begin (i.e. loop back to step 4).

8. Fork - 


