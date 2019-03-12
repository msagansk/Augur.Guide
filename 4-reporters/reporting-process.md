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

8. Fork - (this section is adapted from the [Augur Whitepaper](https://www.augur.net/whitepaper.pdf) due to its highly technical nature) The fork state is a special state that can last up to 60 days.  Forking is the market resolution method of last resort; it is a very disruptive process and is intended to be a rare occurrence. This market is referred to as the forking market, as it has implications for the other markets that currently exist. When a fork is initiated, disputing for all other non-resolved markets is put on hold until this fork resolves.  The forking period is much longer than the usual fee window because the platform needs to provide ample time for REP holders and service providers (such as wallets and exchanges) to prepare.  A fork’s final outcome cannot be disputed. 

Every Augur market and all REP tokens exist in some universe. Currently there is only one universe - the genesis universe - since there has never been a fork. REP tokens can be used to report on outcomes (and thus earn fees) only for markets that exist in the same universe as  the REP tokens. When a market forks, new universes are created. Forking creates a new child universe for each possible outcome of the forking market (including Invalid). 

For example, a “Yes/No” market has 3 possible outcomes: Yes,No, and Invalid.  Thus, a“Yes/No” forking market will create three new child universes: universeYes, universeNo, and universeInvalid.

Initially, these newly created universes are empty: they contain no markets or REP tokens. When a fork is initiated, the parent universe becomes permanently locked. In a locked universe,  no new markets may be created. Users may continue trading shares in markets in locked universes, and markets in a locked universe may still receive their initial reports. However, no reporting rewards are paid out there, no disputes can occur, and markets in locked universes cannot be finalized.

In order for marketsor REP tokens in the locked universe to be useful, they must first be migrated to a child universe. Holders of REP tokens in the parent universe may migrate their tokens to a child universe of their choice. This choice should be considered carefully, because migration is one-way; it cannot be reversed. Tokens cannot be sent from one sibling universe to another. Migration is a permanent commitment of REP tokens to a particular market outcome. REP tokens that migrate to different child universes ought to be considered entirely separate tokens, and service providers like wallets and exchanges ought to list them as such. When a fork is initiated, all REP staked on all non-forking markets is unstaked so that it is free to be migrated to a child universe during the forking period. 

Whichever child universe receives the most migrated REP by the end of the forking period becomes the winning universe, and its corresponding outcome becomes the final outcome of the forking market.  Unfinalized markets in the parent universe may be migrated only to the winning universe and, if they have received an initial report, are reset back to the waiting for next fee window to begin phase. This means that those markets will have to go through the dispute process from round 1 which can additional delays to those markets resolving. The only exception is the REP staked by the initial reporter when they  made  the  initial  report.   That  REP  remains  staked  on  the initial reported outcome and is automatically migrated to the child universe that wins the fork.

In Augur version 1, there is no time limit to migrate REP tokens from the parent universe to a child universe. Tokens may be migrated after the forking period, but they will not count towards the determination of the winning universe. To encourage greater participation during the forking  period, all token holders who migrate their REP within 60 days of the start of a fork will receive 5% additional REP in the child universe to which they migrated. This reward is paid for by minting new REP tokens. 

Reporters that have staked REP on one of the forking market’s outcomes cannot change their position during a fork. REP that was staked on an outcome in the parent universe can be migrated only to the child universe that corresponds to that outcome.  For example, if a reporter  helped fulfill a successful dispute bond in favor of outcomeA during some dispute round, then the REP they have staked on outcomeA can only be migrated to universeA during a fork. Sibling  universes are entirely disjoint (separate). REP tokens that exist in one universe cannot be used  to report on events or earn rewards from markets in another universe. 

Since users presumably will not want to create or trade on markets in a universe whose oracle is untrustworthy, REP that exists in a universe that does not correspond to objective reality is unlikely to earn its owner any fees, and therefore should not hold any significant market value. Therefore, REP tokens migrated to a universe which does not correspond to objective reality should hold no market  value, regardless of whether or not the objectively false universe ends up being the winning universe after a fork. 

Note: Forking  periods  can  be  less  than  60  days:  a  forking  period  ends when either 60 days have passed, or more than 50% of all genesis REP is migrated to some child universe.




