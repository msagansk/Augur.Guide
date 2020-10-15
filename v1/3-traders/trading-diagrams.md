---
title: Trading Diagrams
---
# Traders: Trading Diagrams

This page details the nitty-gritty for what happens behind the scenes when you trade on Augur. Trades can either be partially filled or completely filled. Within each of those two categories, specific examples will be shown below. 

Note that these examples don't include the simple example of just creating an [order](https://augur.guide/glossary.html#Order) on the [order book](https://augur.guide/glossary.html#Order%20Book). Remember, you need a counterparty for an actual trade to occur.

In all of the examples shown, the market in question has two [outcomes](https://augur.guide/glossary.html#Outcome), A and B. You can think of these as "Yes" and "No" for a [Yes/No market](https://augur.guide/glossary.html#Yes/No%20Market), or "Long" vs. "Short" for a [scalar market](https://augur.guide/glossary.html#Scalar%20Market). [Categorical markets](https://augur.guide/glossary.html#Categorical%20Market) will behave slightly differently, since there are more than 2 outcomes in a [complete set](https://augur.guide/glossary.html#Complete%20Set). This list of examples is not exhaustive for all the possibilities in Augur, but covers the possibilities for a two outcome market. In the examples below, note that [bidding/buying](https://augur.guide/glossary.html#Bid%20Order) a SHARE of A for price "x" is equivalent to [asking/selling](https://augur.guide/glossary.html#Ask%20Order) a SHARE of B for price "1-x".

## Completely Filled Orders

### Create Complete Set

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has no SHARES. She wants to buy 1 SHARE of A for 0.8 ETH.
Bob	| He has no SHARES. He wants to buy 1 SHARE of B for 0.2 ETH.

![Augur UI]({{site.url}}/assets/images/trading-diagrams/completely-filled-orders/create-complete-set.svg)

Note that Bob could have also wanted to sell 1 SHARE of A for 0.8 ETH, which would have been a "Ask Outcome A, 1 SHARE for 0.8 ETH". This would have had created the same result as shown above, even though he has no SHARES.

### Settle Complete Set

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has 1 SHARE of A. She wants to sell it for 0.8 ETH.
Bob	| He has 1 SHARE of B. He wants to sell it for 0.2 ETH.

![Augur UI]({{site.url}}/assets/images/trading-diagrams/completely-filled-orders/settle-complete-set.svg)

### Redeem Winning SHARES

Actor | Situation
--- | ---
Market | Finalized. Winning Outcome is A. The order book is empty.
Alice	| She has 1 SHARE of A. She wants to cash it in.
Bob	| He has 1 SHARE of B. (His SHARES are worthless)

![Augur UI]({{site.url}}/assets/images/trading-diagrams/completely-filled-orders/redeem-winning-shares.svg)

### Direct Trade

Actor | Situation
--- | ---
Alice	| She has 1 SHARE of A.  She wants to sell it for 0.8 ETH.
Bob	| He has some ETH. He wants to buy 1 SHARES of A.

![Augur UI]({{site.url}}/assets/images/trading-diagrams/completely-filled-orders/direct-trade.png)

### Escrow Share and ETH

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has 1 SHARE of A. She wants to sell it for 0.8 ETH.
Bob	| He has some ETH. He wants to buy 1 SHARE of A for 0.8 ETH.

![Augur UI]({{site.url}}/assets/images/trading-diagrams/completely-filled-orders/escrow-share-and-eth.svg)

## Partially Filled Orders

### Create Complete Set

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has no SHARES. She wants to buy 1 SHARE of A for 0.8 ETH.
Bob	| He has no SHARES. He wants to buy 0.5 SHARES of B for 0.1 ETH.

![Augur UI]({{site.url}}/assets/images/trading-diagrams/partially-filled-orders/create-complete-set.svg)

### Settle Complete Set

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has 1 SHARE of A. She wants to sell it for 0.8 ETH.
Bob	| He has 0.5 SHARES of B. He wants to sell it for 0.1 ETH.

![Augur UI]({{site.url}}/assets/images/trading-diagrams/partially-filled-orders/settle-complete-set.svg)
