---
title: Templates
---
# Market Creators: Templates

Here are a few examples of different markets that have been created in the past that are worded well to help ensure validity. You can use these as a starting point for your own markets to help you think it through.

## Sports

**Title:** [Europa League - Arsenal v Rennes (14 March 2019 UTC)](https://predictions.global/augur-markets/0x660b4f095f79bad94f0cb3774d7dfdbb7a42c6b0)<br />
**Details:** Which team will win the match? All bets apply to Full Time according to the match officials, plus any stoppage time. Extra-time/penalty shoot-outs are not included.<br />
**Type:** Categorical<br />
**Outcomes:** Arsenal, Rennes, Draw<br />
**Ends:** Mar 15, 2019 9:00 PM<br />
**Fees:** 0.01%<br />
**Categories/Tag:** Sports, Soccer, Europa league<br />
**Resolution Source:** General Knowledge <br />

**Notes:** Sports markets are one of the easiest categories to make valid markets for, but there are still some things to consider. This market specifies the league, teams, and the specific day (with a timezone) that the match will occur. It is important to isolate which game you are referring to, as multiple possibilities can make the market resolve as Invalid.

The additional details of the market specify how certain edge cases should be treated. Different betting rules account for overtime in different ways, so it is good to spell it out here. 

The market is categorical which allows for making a “draw” an explicit outcome, but the drawback here is that it splits liquidity between three outcomes. If that is a concern for you, it is possible to turn a sports market into a Yes/No market with wording like “Will team X beat team Y?”, as a draw would imply an answer of “No” - which could also be spelled out explicitly in the additional details of the market.

The market end time is also sufficiently after the event. A day after a sports game is typically enough time to know the result.

This particular market has low fees and easy to find categories and tags which makes it attractive for traders. The market creator has provided liquidity and hopes to make money through their spread.
A resolution source of general knowledge is widely accepted to be satisfactory as there is almost never any ambiguity on who is the winner of a sports game, and it is typically widely reported on in the media.

## Politics

**Title:** [Will Donald Trump be Re-Elected in 2020?](https://predictions.global/augur-markets/will-donald-trump-be-re-elected-in-2020-0xdecbd869eccac116193886c3f7fa4a150ffab681)<br />
**Details:** Donald Trump shall be re-elected as president of the United States in 2020, as determined by the Electoral College count, regardless of any electoral college members changing their vote. Inauguration shall have no effect on this market.<br />
**Type:** Yes/No<br />
**Outcomes:** Yes, No<br />
**Ends:** Dec 6, 2020 12:00 AM<br />
**Fees:** 0.26%<br />
**Categories/Tag:** Politics, Trump, 2020<br />
**Resolution Source:** General Knowledge<br /> 

**Notes:** Politics markets are also one of the easiest categories to make valid markets for, but a little harder than sports markets. The additional details for the market really need to spell out as many of the edge cases as possible, so knowledge of the political system the market is about is crucial. In addition, the market end time typically needs to be *well* after you expect the event to occur, because large delays are possible (ex. election results). This particular market’s end time is over a month after the expected election date. That being said, a resolution source won’t be needed (general knowledge is fine) because election results tend to not have any ambiguity once the answer is determined.

In addition, for long running markets such as this one, additional risk factors start to come into play. Augur’s current design doesn’t make it well suited for markets that go out further than 6 months. One reason is that Augur expects to do contract upgrades which involves migrating REP from one version to another, potentially leaving markets behind with not enough honest REP holders to report the correct result. The other reason is that long running markets potentially don’t end up paying a “fair” amount of reporting fees based on how long Augur is required to ensure the security of the market. This gets into complex game-theory topics that we won’t dive into here, see the [Augur Whitepaper](https://www.augur.net/whitepaper.pdf) for more details.

## Cryptocurrency

**Title:** [Will the price of Ethereum (ETH) exceed $150 USD at the end of March 31, 2019?](https://predictions.global/augur-markets/will-the-price-of-ethereum-eth-exceed-150-usd-at-the-end-of-march-31-2019-0x45ecda1d6988e64429a5a9aec6579332f52e4ae3)<br />
**Details:** Outcome to be determined by the close price on the historical data table for Ethereum at CoinMarketCap. This market is for predicting the price of Ethereum (ETH) relative to USD at the very end of March 31, 2019 UTC (any intervening price until then will not be relevant).<br />
**Type:** Yes/No<br />
**Outcomes:** Yes, No<br />
**Ends:** Apr 2, 2019 6:00 AM AM<br />
**Fees:** 1.01%<br />
**Categories/Tag:** Cryptocurrencies, ETH, Binary<br />
**Resolution Source:** https://coinmarketcap.com/currencies/ethereum/historical-data/<br />

**Notes:** Cryptocurrency price markets are popular for Augur since the user base tends to be heavily invested in cryptocurrency in general, at least for now. This type of market is a kind of binary option, which is the simplest type of cryptocurrency price market to create. A more complicated version of this market would be a scalar one, allowing for a numerical range of values for more complex trading.

The one key parameter in this type of market that is unique compared to the ones above is the resolution source. Generally, cryptocurrency prices vary dramatically across the world on different exchanges. There is no single default source of truth that is generally agreed upon, so you have to pick one for the market. Otherwise you could end up in a situation where one exchange would make the answer resolve to “Yes”, whereas another exchange might make the answer “No” - this sort of conflict would make the market resolve as Invalid.

When you start to rely on only one resolution source, other problems do arise. For example, what if Coinmarketcap.com ceases to exist by the time your market expires? You could put backup resolution sources in the additional details section of the market, but then you need to clearly define when the backup source should be used - which can cause greater uncertainty itself. 

Not all resolution sources are equal either. You generally want to pick a resolution source that stores historical information rather than just a snapshot in time. Future traders and reporters need to be able to check the resolution source well *after* the event to determine what the correct answer was. It gets a lot harder to determine that if the snapshot has changed, which greatly increases the chances of the market resolving as Invalid. Tools such as web.archive.org are sometimes used to save those “snapshots” for later retrieval as evidence. How to treat specific resolution sources is still an open topic in Augur, so greater care should be taken as there are additional risks that your market may not resolve the way you intended it to.

For what it’s worth, coinmarketcap.com has been generally accepted as one of the best resolution source for cryptocurrency price markets, although there are others as well.
