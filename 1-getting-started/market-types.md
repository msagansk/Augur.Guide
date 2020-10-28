---
title: Market Types
---

# Getting Started: Market Types

There are three types of markets that can exist in Augur. They are Yes/No, Categorical, and Scalar. The main difference between them is the number of possible [outcomes]({{ "/" | absolute_url }}/glossary.html#Outcome) (i.e. potential answers) which has implications on the number of [order books]({{ "/" | absolute_url }}/glossary.html#Order%20Book) and the complexity of trading. 

Examples of the different types of markets can be found on the [Examples]({{ "/" | absolute_url }}/2-market-creators/examples.html) page.

### A Word on "Invalid"

For all of these markets types, [Invalid]({{ "/" | absolute_url }}/glossary.html#Invalid%20Outcome) is always an available outcome, but it is not explicitly tradeable (in version 1 of Augur). The Invalid result is used by reporters when the truthful answer was not apparent at the time the market entered the [reporting phase]({{ "/" | absolute_url }}/4-reporters/1-reporting-process.html). If a market resolves as Invalid, market [SHARES]({{ "/" | absolute_url }}/glossary.html#SHARE) are worth a specific amount based on the market type (examples will be described below). Unfortunately, due to technical limitations, Invalid markets cannot "unwind" trading so that traders receive the exact amount of money they paid for their shares.

### Yes/No Markets

This is the simplest kind of market, with only two possible choices for tradeable answers (Yes or No). In the default Augur UI, the No option and order book is hidden, to simplify these types of markets even further. That means you can only buy or sell SHARES of Yes. If you sell SHARES of Yes to someone else and you don't actually own any Yes SHARES, Augur will create a complete set of both Yes and No SHARES and give you the No SHARES. In the Augur UI, this will show up as a negative quantity of Yes.

In the event that a yes/no market resolves as Invalid, each Yes or No share is worth 0.5 ETH each. Note that depending on the price you paid for that Yes or No share, it is possible that you can win or lose money on an Invalid result. This is planned to change in Augur version 2, where Invalid will become a tradeable outcome such that Yes or No shares will be worth 0 if the market resolves to Invalid.

### Categorical Markets

A categorical market can have up to 8 possible choices for answers, and the answers are defined by the market creator. Each potential answer has its own order book, so it is more complicated to trade. Note that Augur can only resolve one answer as the correct result. So if the question is worded in such a way that more than one answer is correct, the market should resolve as Invalid.

Buying SHARES of a potential outcome is as straightforward as buying Yes in a Yes/No market, but selling SHARES of an outcome you do not own will actually result in you owning SHARES of *all* the other outcomes.

In the event that a categorical market resolves as Invalid, every SHARE is worth 1 ETH divided by the number of outcomes. For example, if there were 8 outcomes, each SHARE would be worth 0.125 ETH each.

### Scalar Markets (a.k.a. Numerical Range)

These are the most complicated markets to understand, but provide the most flexibility in the number of potential outcomes and how they are paid out. In the other two market types, only the one true outcome is worth any ETH once the market is finalized and valid. All the other outcomes are worth nothing, but that is not true for scalar markets. Since these are the most complicated to understand, it is probably best to avoid this kind of market until you are more comfortable with Augur.

An example of a scalar market title would be “According to finance.yahoo.com, what will be the price of MSFT on January 3rd, 2020 at market close?”. In this example market, potential answers might range from $0 to $500, because a lower and upper bound are required to be defined when the market is created. In addition, the market creator had to specify the precision for the market, which determines how many individual price points are available as choices between $0 and $500. 

A trader in this example would have to decide whether to go LONG (Buy) or SHORT (Sell) on this market, and at a specific price. The trader in a LONG position makes more money the higher the final result is above the specific price, and loses money if the final result is below the specific price. The opposite is true for the trader who took the SHORT position.

In the case of Invalid, the final answer becomes the midpoint between the lower bound and upper bound. 
