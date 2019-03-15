---
title: Trading Diagrams
---
# Traders: Trading Diagrams

This page details the nitty-gritty for what happens behind the scenes when you trade on Augur. Trades can either be partially filled or completely filled. Within each of those two categories, specific examples will be shown below.

Note that these examples don't include the simple example of just placing an order on the order book. Remember, you need a counterparty for an actual trade to occur.

In all of the examples shown, the market in question has two outcomes, A and B. You can think of these as "Yes" and "No" for a Yes/No market, or "Long" vs. "Short" for a scalar market. Categorical markets will behave slightly differently, since there are more than 2 outcomes in a complete set.

## Completely Filled Orders

1. Create Complete Set

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has no shares. She wants to buy 1 share of A for 0.8 ETH.
Bob	| He has no shares. He wants to buy 1 share of B for 0.2 ETH, or sell 1 share of A for 0.8 ETH.

![Augur UI]({{site.url}}/assets/images/trading-diagrams/completely-filled-orders/create-complete-set.svg)

2. Settle Complete Set

Actor | Situation
--- | ---
Market | Non-finalized. The order book is empty.
Alice	| She has no share. She want to buy 1 share of A for 0.8 ETH.
Bob	| He has no share. He want to buy 0.5 share of B for 0.1 ETH.
