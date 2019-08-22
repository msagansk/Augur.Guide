---
title: FAQ
---
# Frequently Asked Questions 

#### [Anchor](Why-is-it-not-possible-to-refund-traders-in-the-case-of-a-market-resolving-as-INVALID?)

The short answer is that it is possible for traders to trade shares amongst themselves without Augur, so it is 
impossible for the Augur smart contracts to know which shares should be repaid which amount. Augur outcome shares are 
fungible by design.

Here is a longer form answer, an example:
1. Alice escrows 100 ETH and gets 100 YES tokens and 100 NO tokens.
2. Alice sells Bob 100 NO tokens in exchange for 30 ETH.

Alice had to front 100 ETH, but she got back 30 from Bob when she sold him the NO tokens, so she really only paid 70 ETH for the 100 YES tokens.  The system (Augur) just automates this process so Alice doesn't have to front extra cash.

Imagine Bob bought those NO shares from Alice for 30 ETH, then he sold the NO shares to Carol for 50 ETH (good job Bob!).  Bob then walks away and never comes back.

The system still only has 100 ETH, but Alice who owns 100 YES shares paid 70 ETH for them, while Carol who owns 100 NO shares paid 50 ETH for them.

We cannot steal money from Bob (yay for ledgers!), so with our 100 ETH we cannot refund both the 70 ETH to Alice and the 50 ETH to Carol.

(taken from Augur Discord chat, credit to <https://discordapp.com/channels/378030344374583298/378030785829273620/614130372179132473>)
