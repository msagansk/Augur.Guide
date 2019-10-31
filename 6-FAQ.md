---
title: FAQ
---
# Frequently Asked Questions 

#### Why is it not possible to refund traders in the case of a market resolving as INVALID?

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

(taken from Augur Discord chat, credit to <https://discordapp.com/channels/378030344374583298/378030785829273620/614130372179132473>)


### Why don't reporters combat scam markets?

A common question new users have is why reporters don't report against the letter of the market in order to combat obvious scams.  An example of such a scam is a market that asks some legitimate sounding question but sets the reporting source as a site the scammer controls.  People bet on what seems like a "sure thing" and then the market creator sets their website to report an outcome that is not in line with reality.  Reporters report in line with what the reporting source says, rather than in line with the question, should reporting source be ignored.

The problem here is that while scammers currently use obvious scam sites, it is not particularly difficult for them to create a website that looks legitimate.  The job of reporters is not to try to gauge the legitimacy of reporting sources, but instead only to report on the market per the rules of the market, even if reporters know that it was a scam.

If reporters started reporting on these markets based on whether or not they think the market was a scam, then they would open themselves up to attacks against the reporting system.  In this type of attack, the attacker creates a website used as a reporting source that appears legitimate to most people, but not everyone.  This creates conflict among reporters and can potentially lead to a fork.  Since all reporters have to stake their REP on an outcome during a fork, this means that reporters now have to take on a lot of risk when trying to pick which side of the fence to be on, as they do not know how future traders will align themselves.

When reporting is a risky endeavor, people will start to sell their REP which leads to the price of REP falling.  When the price of REP falls sufficiently, reporting fees will automatically increase to try to drive the price of REP back up so the system can remain secure against othere attacks.  This means that traders, ultimately, will pay the price of reporters trying to "protect" them from scams, and in the end the scams aren't actually stopped/prevented, only mutated.
