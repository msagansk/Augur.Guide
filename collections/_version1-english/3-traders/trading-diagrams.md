---
title: Trading Diagrams
---
# Traders: Trading Diagrams

This page details the nitty-gritty for what happens behind the scenes when you trade on Augur. Trades can either be partially filled or completely filled. Within each of those two categories, specific examples will be shown below. 

Note that these examples don't include the simple example of just creating an [order]({{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html#Order) on the [order book]({{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html#Order_Book). Remember, you need a counterparty for an actual trade to occur.

In all of the examples shown, the market in question has two [outcomes]({{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html#Outcome), A and B. You can think of these as "Yes" and "No" for a [Yes/No market]({{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html#Yes/No_Market), or "Long" vs. "Short" for a [scalar market]({{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html#Scalar_Market). [Categorical markets]({{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html#Categorical_Market) will behave slightly differently, since there are more than 2 outcomes in a [complete set]({{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html#Complete_Set). This list of examples is not exhaustive for all the possibilities in Augur, but covers the possibilities for a two outcome market. In the examples below, note that [bidding/buying]({{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html#Bid_Order) a SHARE of A for price "x" is equivalent to [asking/selling]({{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html#Ask_Order) a SHARE of B for price "1-x".

## Completely Filled Orders

### Create Complete Set

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has no SHARES. She wants to buy 1 SHARE of A for 0.8 ETH.
Bob	| He has no SHARES. He wants to buy 1 SHARE of B for 0.2 ETH.
![Augur UI]({{ "/" | absolute_url }}/assets/images/{{page.collection}}/trading-diagrams/completely-filled-orders/create-complete-set.svg)

Note that Bob could have also wanted to sell 1 SHARE of A for 0.8 ETH, which would have been a "Ask Outcome A, 1 SHARE for 0.8 ETH". This would have had created the same result as shown above, even though he has no SHARES.

### Settle Complete Set

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has 1 SHARE of A. She wants to sell it for 0.8 ETH.
Bob	| He has 1 SHARE of B. He wants to sell it for 0.2 ETH.

![Augur UI]({{ "/" | absolute_url }}/assets/images/{{page.collection}}/trading-diagrams/completely-filled-orders/settle-complete-set.svg)

### Redeem Winning SHARES

Actor | Situation
--- | ---
Market | Finalized. Winning Outcome is A. The order book is empty.
Alice	| She has 1 SHARE of A. She wants to cash it in.
Bob	| He has 1 SHARE of B. (His SHARES are worthless)

![Augur UI]({{ "/" | absolute_url }}/assets/images/{{page.collection}}/trading-diagrams/completely-filled-orders/redeem-winning-shares.svg)

### Direct Trade

Actor | Situation
--- | ---
Alice	| She has 1 SHARE of A.  She wants to sell it for 0.8 ETH.
Bob	| He has some ETH. He wants to buy 1 SHARES of A.

![Augur UI]({{ "/" | absolute_url }}/assets/images/{{page.collection}}/trading-diagrams/completely-filled-orders/direct-trade.png)

### Escrow Share and ETH

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has 1 SHARE of A. She wants to sell it for 0.8 ETH.
Bob	| He has some ETH. He wants to buy 1 SHARE of A for 0.8 ETH.

![Augur UI]({{ "/" | absolute_url }}/assets/images/{{page.collection}}/trading-diagrams/completely-filled-orders/escrow-share-and-eth.svg)

## Partially Filled Orders

### Create Complete Set

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has no SHARES. She wants to buy 1 SHARE of A for 0.8 ETH.
Bob	| He has no SHARES. He wants to buy 0.5 SHARES of B for 0.1 ETH.

![Augur UI]({{ "/" | absolute_url }}/assets/images/{{page.collection}}/trading-diagrams/partially-filled-orders/create-complete-set.svg)

### Settle Complete Set

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has 1 SHARE of A. She wants to sell it for 0.8 ETH.
Bob	| He has 0.5 SHARES of B. He wants to sell it for 0.1 ETH.

![Augur UI]({{ "/" | absolute_url }}/assets/images/{{page.collection}}/trading-diagrams/partially-filled-orders/settle-complete-set.svg)
