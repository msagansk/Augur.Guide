---
title: FAQ
---
# Frequently Asked Questions 

<ol>
<li><a href="#invalid_refunds">Why is it not possible to refund traders in the case of a market resolving as INVALID?</a></li>
<li><a href="#why_don't_reporters_combat_scam_markets">Why don't reporters combat scam markets?</a></li>
<li><a href="#why_don't_reporters_follow_guideline_x">Why don't reporters follow guideline X?</a></li>
<li><a href="#Augur_v1_to_v2_upgrade">As a REP holder, do I have to do anything as part of the Augur v1 to Augur v2 upgrade?</a></li>
<li><a href="#REP_v1_to_v2_upgrade_process">What is the process for converting REPv1 to REPv2?</a></li>
</ol>
<br /><br />

### <div id="invalid_refunds">Why is it not possible to refund traders in the case of a market resolving as INVALID?</div>

(taken from Augur Discord chat, credit to <https://discordapp.com/channels/378030344374583298/378030785829273620/614130372179132473>)

The short answer is that it is possible for traders to trade shares amongst themselves without Augur, so it is 
impossible for the Augur smart contracts to know which shares should be repaid which amount. Augur outcome shares are 
fungible by design.

Here is an example:
1. Alice escrows 100 ETH and gets 100 YES tokens and 100 NO tokens.
2. Alice sells Bob 100 NO tokens in exchange for 30 ETH.

Alice had to front 100 ETH, but she got back 30 from Bob when she sold him the NO tokens, so she really only paid 70 ETH for the 100 YES tokens.  The system (Augur) just automates this process so Alice doesn't have to front extra cash.

Imagine Bob bought those NO shares from Alice for 30 ETH, then he sold the NO shares to Carol for 50 ETH (good job Bob!).  Bob then walks away and never comes back.

The system still only has 100 ETH, but Alice who owns 100 YES shares paid 70 ETH for them, while Carol who owns 100 NO shares paid 50 ETH for them.

We cannot steal money from Bob (yay for ledgers!), so with our 100 ETH we cannot refund both the 70 ETH to Alice and the 50 ETH to Carol.

### <div id="why_don't_reporters_combat_scam_markets">Why don't reporters combat scam markets?</div>

A common question new users have is why reporters don't report against the letter of the market in order to combat obvious scams.  An example of such a scam is a market that asks some legitimate sounding question but sets the reporting source as a site the scammer controls.  People bet on what seems like a "sure thing" and then the market creator sets their website to report an outcome that is not in line with reality.  Reporters report in line with what the reporting source says, rather than in line with the question, should reporting source be ignored.

The problem here is that while scammers currently use obvious scam sites, it is not particularly difficult for them to create a website that looks legitimate.  The job of reporters is not to try to gauge the legitimacy of reporting sources, but instead only to report on the market per the rules of the market, even if reporters know that it was a scam.

If reporters started reporting on these markets based on whether or not they think the market was a scam, then they would open themselves up to attacks against the reporting system.  In this type of attack, the attacker creates a website used as a reporting source that appears legitimate to most people, but not everyone.  This creates conflict among reporters and can potentially lead to a fork.  Since all reporters have to stake their REP on an outcome during a fork, this means that reporters now have to take on a lot of risk when trying to pick which side of the fence to be on, as they do not know how future traders will align themselves.

When reporting is a risky endeavor, people will start to sell their REP which leads to the price of REP falling.  When the price of REP falls sufficiently, reporting fees will automatically increase to try to drive the price of REP back up so the system can remain secure against othere attacks.  This means that traders, ultimately, will pay the price of reporters trying to "protect" them from scams, and in the end the scams aren't actually stopped/prevented, only mutated.

### <div id="why_don't_reporters_follow_guideline_x">Why don't reporters follow guideline X?</div>

People often ask why reporters don't just follow guideline X, where X is some proposal that usually tries to address some _current_ scam market.  This is a natural response when you see a problem to try to fix it by suggesting some obvious solution.  We see this a lot in politics where someone sees some problem and they recommend the first fix that pops into their head as a solution.  The issue with this strategy is that often times the fixes can be worse than the original problem once they are implemented and allowed to play out, which results in the need for another fix which then has an even worse problem, etc.

In order for Augur to be useful, traders need to have confidence that the Oracle will resolve _predictably_.  It matters significantly less what specific strategy the oracle uses as long as it is predictable as traders are able to account for any quirks but they cannot account for unpredictability.  Right off the bat, any suggested change that is likely to reduce the predictability of Augur comes with great cost and should be avoided whenever possible.  There will always be some amount of unpredictability in life, but we want to minimize that as much as possible.

Another common pitfal of trying to address some particular scam is the incorrect assumption that scammers will not adapt when the guidelines change.  Scammers tend to be much more keenly aware of the "rules" than regular people because they are actively looking for ways they can break the _intent_ of the rules and get away with it.  This means that if you propose a new reporting guideline to address some current scam market, you must consider how the scammer will try to scam people _given_ that new guideline.  If the new guideline creates new opportunities to scam, then we haven't really solved the underlying problem and instead we have just moved it.  If the new guideline _reduces_ predictability of reporting then, as mentioned above, we have introduced a large cost with the new guideline and we haven't really solved the problem of scams.

Since completely preventing scams is likely impossible (we can only change their nature), the best we can hope for is to at least be consistent in how the reporting system resolves markets.  We don't want to destroy the value proposition of Augur by creating huge amounts of uncertainty in reporting while in a constant ever-shifting battle with scammers.

### <div id="Augur_v1_to_v2_upgrade">As a REP holder, do I have to do anything as part of the Augur v1 to Augur v2 upgrade?</div>

Once Augur v2 has launched, Reporters will be able to convert their v1 REP into v2 REP at a 1:1 conversion rate.  This process is voluntary and if you believe that Augur v1 will receive more usage than Augur v2 you are free to leave your REP in Augur v1 forever.

Since Augur v2 implements use-it-or-lose-it for forks, this means that you must choose whether to leave your REP in Augur v1 or migrate to Augur v2 **BEFORE** the end of the first Augur v2 fork.  If Augur v2 never forks, then you never have to migrate (at least, not until Augur v3 in case the migration rules are different for Augur v3).

As a REP holder, starting with the launch of Augur v2 it is imperative that you regularly check in on Augur and make sure that there is not a fork happening.  Forks last 2 months, so it is recommended to checkin on the system at least once a month to verify that no fork is occurring.  If a fork is occuring, then you must participate or risk your REP being stuck forever (effectively burned).

### <div id="REP_v1_to_v2_upgrade_process">What is the process for converting REPv1 to REPv2?</div>

There will be a conversion tool in the reference UI.  Following the instructions in the reference UI will be the easiest way to migrate your REP and will likely involve two Ethereum transactions that you will need to sign.

The technical process for the conversion will be to first approve the Augur v2 contracts to transfer your v1 REP (this will require an Ethereum transaction) and then calling a method on REP v2 contracts that will burn your REP v1 and mint you an equal amount of REP v2 (this will also require an Ethereum transaction).
