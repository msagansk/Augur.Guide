---
title: Market Creators
---
# Market Creators

Anyone can be a market creator. This is a necessity for Augur to be censorship resistant, but that also means that not all markets are going to be high quality. There are many factors that go into creating a "good" market, and it can be a bit tricky.

A market should ask a question about a future event that is publicly verifiable in some way. Common topics include the outcome of sports games, political events, financial trading, derivatives, insurance, bug bounties, the weather, and more.

Once a market question has been thought of, there are a few parameters you must be aware of that are required to create a market on Augur:

_Market End Time_ - This is the time where the market enters the reporting phase to determine what the correct answer is. The answer to the market must be known **before** the market end time. If the answer to the market is not known by this time, the market will be invalid. It is recommended to set the market end time well after the event is expected to occur, to give plenty of wiggle room for unexpected delays. Potential delays can vary dramatically between domains: sports games usually resolve within a day but political election results can be delayed for weeks.
