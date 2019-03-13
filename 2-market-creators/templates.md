---
title: Templates
---
# Market Creators: Templates

Here are a few examples of different markets that have been created in the past that are worded well to help ensure validity. You can use these as a starting point for your own markets to help you think it through.

## Sports

*Title:* [Europa League - Arsenal v Rennes (14 March 2019 UTC)](https://predictions.global/augur-markets/0x660b4f095f79bad94f0cb3774d7dfdbb7a42c6b0)
*Details:* Which team will win the match? All bets apply to Full Time according to the match officials, plus any stoppage time. Extra-time/penalty shoot-outs are not included.
*Type:* Categorical
*Outcomes:* Arsenal, Rennes, Draw
*Ends:* Mar 15, 2019 9:00 PM
*Fee:* 0.01%
*Categories/Tag:* Sports, Soccer, Europa league
*Resolution Source:* General Knowledge

*Notes:* Sports markets are one of the easiest categories to make valid markets for, but there are still some things to consider. This market specifies the league, teams, and the specific day (with a timezone) that the match will occur. It is important to isolate which game you are referring to, as multiple possibilities can make the market resolve as Invalid.

The additional details of the market specify how certain edge cases should be treated. Different betting rules account for overtime in different ways, so it is good to spell it out here. 

The market is categorical which allows for making a “draw” an explicit outcome, but the drawback here is that it splits liquidity between three outcomes. If that is a concern for you, it is possible to turn a sports market into a Yes/No market with wording like “Will team X beat team Y?”, as a draw would imply an answer of “No” - which could also be spelled out explicitly in the additional details of the market.

The market end time is also sufficiently after the event. A day after a sports game is typically enough time to know the result.

This particular market has low fees and easy to find categories and tags which makes it attractive for traders. The market creator has provided liquidity and hopes to make money through their spread.
A resolution source of general knowledge is widely accepted to be satisfactory as there is almost never any ambiguity on who is the winner of a sports game, and it is typically widely reported on in the media.
