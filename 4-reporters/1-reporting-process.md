---
title: Reporting Process
---

# Reporters: Reporting Process

Ok, let’s blow up the reporting process box from ["The Life of a Market"](https://augur.guide/1-getting-started/the-life-of-a-market.html) page into its detailed sub-steps and go over them:

<div class="center">
{% include image.html url="/assets/images/Reporting Flowchart.svg" description="Figure 2. Reporting Flowchart" %}
</div>

1. Designated Reporting - This is the first step of the reporting phase and is triggered by the market end time occurring, which was originally set by the market creator when the market was created. The market creator picked an address to be the designated reporter, which is usually the market creator itself. This designated reporter now has 3 days to perform the initial report, which is the first tentative outcome for the market. The designated reporter has to post a bond (in REP) to incentivise other reporters to make sure the outcome selected is the correct answer. The designated reporter does not get to unilaterally decide how the market resolves, the rest of the reporter community has to generally agree. This decentralized resolution process is one of the main strengths of Augur, but it can also cause delays in resolution.

2. Designated Reporter Reported? - Did the designated reporter perform the initial report in the required 3 day window? It is possible that the designated reporter forgot to do so (or neglected to do so for some other reason), which means the market will go into Open Reporting. If the initial report was performed, the market will wait for the next fee window to give other reporters some time to analyze the market and potentially dispute an incorrect tentative outcome.

3. Open Reporting - Anyone can now perform the initial report to potentially claim the “no-show” REP bond the market creator posted. The bond will be rewarded if the initially reported outcome ends up becoming the finalized outcome. This is essentially “free money”, so competition to do open reporting is fierce.

4. Waiting for Next Fee Window - Augur groups all markets into the same 7 day time period/fee window. So, whenever an initial report or dispute occurs, there is a delay before another dispute can occur. This delay is deliberate, it allows for reporters to have a reliable schedule to analyze and discuss questionable markets, gather support for a particular outcome, and acquire enough REP from cold storage if necessary. The start of a fee window is currently set to be every Thursday at 00:00:00 UTC. 

5. Dispute Round - This is the same thing as the fee window. It has two names because reporting fees from markets are collected and dispersed in 7 day chunks based on reporting activity during that same time period. This is the time for reporters to dispute a tentative outcome if they believe it is not the correct answer. Different markets can be in different dispute round numbers, depending on how many times a market has been disputed. Successive dispute rounds escalate the amount of required REP to dispute the tentative outcome until it is no longer disputed or the fork threshold is reached. 

6. Tentative Outcome Disputed? - A market has to have one of its (non-tentative) outcomes REP bonds filled in order to successfully dispute the current tentative outcome. The amount of REP required to dispute scales depending on how many outcomes are in dispute. For the most typical case where only two outcomes are being disputed, the required REP bond doubles every round. This allows for a 50% return on investment for the reporters who staked on the final outcome, while the reporters who staked on the incorrect outcome(s) lose their bond. If the required REP bond is not filled, the market is no longer in dispute, so it moves to the resolved state and the reporting phase is over.

7. Dispute Bond Above Fork Threshold? - The dispute bond has been filled for one of the (non-tentative) outcomes so a check is performed. If the required bond was at least 2.5% of the total supply of REP, the market triggers a fork. If the required bond was not that high, the disputed outcome becomes the new tentative outcome and the market waits for the next fee window to begin (i.e. loop back to step 4).

8. Fork - 



