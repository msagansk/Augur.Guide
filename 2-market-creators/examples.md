---
title: Examples
---
# Market Creators: Examples

Here are a few examples of different markets that have been created in the past that are worded well to help ensure validity and clarity for traders and reporters. You can use these as templates to help you get started creating your own markets that are well crafted.

### Sports

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

The market is [categorical]({{ "/" | absolute_url }}/7-glossary.html#Categorical_Market) which allows for making a “draw” an explicit outcome, but the drawback here is that it splits liquidity between three outcomes. If that is a concern for you, it is possible to turn a sports market into a Yes/No market with wording like “Will team X beat team Y?”, as a draw would imply an answer of “No” - which could also be spelled out explicitly in the additional details of the market.

The market [end time]({{ "/" | absolute_url }}/7-glossary.html#End_Time) is also sufficiently after the event. A day after a sports game is typically enough time to know the result.

This particular market has low fees and easy to find categories and tags which makes it attractive for traders. The market creator has provided liquidity and hopes to make money through their spread.

A [resolution source]({{ "/" | absolute_url }}/7-glossary.html#Resolution_Source) of general knowledge is widely accepted to be satisfactory as there is almost never any ambiguity on who is the winner of a sports game, and it is typically widely reported on in the media. Putting in a specific resolution source would only increase the risk of having the market resolve as invalid, if something strange were to happen with that specific source.

### Politics

**Title:** [Will Donald Trump be Re-Elected in 2020?](https://predictions.global/augur-markets/will-donald-trump-be-re-elected-in-2020-0xdecbd869eccac116193886c3f7fa4a150ffab681)<br />
**Details:** Donald Trump shall be re-elected as president of the United States in 2020, as determined by the Electoral College count, regardless of any electoral college members changing their vote. Inauguration shall have no effect on this market.<br />
**Type:** Yes/No<br />
**Outcomes:** Yes, No<br />
**Ends:** Dec 6, 2020 12:00 AM<br />
**Fees:** 0.26%<br />
**Categories/Tag:** Politics, Trump, 2020<br />
**Resolution Source:** General Knowledge<br /> 

**Notes:** Politics markets are also one of the easiest categories to make valid markets for, but a little harder than sports markets. The additional details for the market really need to spell out as many of the edge cases as possible, so knowledge of the political system the market is about is crucial. In addition, the market end time typically needs to be *well* after you expect the event to occur, because large delays are possible (ex. election results). This particular market’s end time is over a month after the expected election date. That being said, a resolution source won’t be needed (general knowledge is fine) because election results tend to not have any ambiguity once the answer is determined.

In addition, for long running markets such as this one, additional risk factors start to come into play. Augur’s current design doesn’t make it well suited for markets that go out further than 6 months. One reason is that Augur expects to do contract upgrades which involves migrating [REP]({{ "/" | absolute_url }}/7-glossary.html#REP) from one version to another, potentially leaving markets behind with not enough honest REP holders to report the correct result. The other reason is that long running markets potentially don’t end up paying a “fair” amount of reporting fees based on how long Augur is required to ensure the security of the market. This gets into complex game-theory topics that we won’t dive into here, see the [Augur Whitepaper](https://www.augur.net/whitepaper.pdf) for more details.

### Cryptocurrency

**Title:** [Will the price of Ethereum (ETH) exceed $150 USD at the end of March 31, 2019?](https://predictions.global/augur-markets/will-the-price-of-ethereum-eth-exceed-150-usd-at-the-end-of-march-31-2019-0x45ecda1d6988e64429a5a9aec6579332f52e4ae3)<br />
**Details:** Outcome to be determined by the close price on the historical data table for Ethereum at CoinMarketCap. This market is for predicting the price of Ethereum (ETH) relative to USD at the very end of March 31, 2019 UTC (any intervening price until then will not be relevant).<br />
**Type:** Yes/No<br />
**Outcomes:** Yes, No<br />
**Ends:** Apr 2, 2019 6:00 AM<br />
**Fees:** 1.01%<br />
**Categories/Tag:** Cryptocurrencies, ETH, Binary<br />
**Resolution Source:** https://coinmarketcap.com/currencies/ethereum/historical-data/<br />

**Notes:** Cryptocurrency price markets are popular for Augur since the user base tends to be heavily invested in cryptocurrency in general, at least for now. This type of market is a kind of binary option, which is the simplest type of cryptocurrency price market to create. A more complicated version of this market would be a scalar one, allowing for a numerical range of values for more complex trading.

The one key parameter in this type of market that is unique compared to the ones above is the resolution source. Generally, cryptocurrency prices vary dramatically across the world on different exchanges. There is no single default source of truth that is generally agreed upon, so you have to pick one for the market. Otherwise you could end up in a situation where one exchange would make the answer resolve to “Yes”, whereas another exchange might make the answer “No” - this sort of conflict would make the market resolve as [Invalid]({{ "/" | absolute_url }}/7-glossary.html#Invalid_Outcome).

When you start to rely on only one resolution source, other problems do arise. For example, what if Coinmarketcap.com ceases to exist by the time your market expires? You could put backup resolution sources in the additional details section of the market, but then you need to clearly define when the backup source should be used - which can cause greater uncertainty itself. 

Not all resolution sources are equal either. You generally want to pick a resolution source that stores historical information rather than just a snapshot in time. Future traders and reporters need to be able to check the resolution source well *after* the event to determine what the correct answer was. It gets a lot harder to determine that if the snapshot has changed, which greatly increases the chances of the market resolving as Invalid. Tools such as web.archive.org are sometimes used to save those “snapshots” for later retrieval as evidence. How to treat specific resolution sources is still an open topic in Augur, so greater care should be taken as there are additional risks that your market may not resolve the way you intended it to.

For what it’s worth, coinmarketcap.com has been generally accepted as one of the best resolution source for cryptocurrency price markets, although there are others as well.

### Weather

**Title:** [Will Alta Ski Area report 100 or more inches of snowfall this February?](https://predictions.global/augur-markets/will-alta-ski-area-report-100-or-more-inches-of-snowfall-this-february-0x4451b91917cd2dc51ad0bab5b3560f269de7bdaa)<br />
**Details:** This market shall resolve to YES if the Cumulative Season Snow on the last reported date in February 2019 is 372.0 inches or more, otherwise NO.

If the resolution source changes formats but unambiguously presents the equivalent information, the market shall resolve to YES or NO as indicated thereby. If the resolution source is unavailable altogether or not up to date by the expiration date, and the reporting ETH address posts a comment to this market on https://reporters.chat, while holding at least 20 REP, testifying that they contacted Alta Ski Area directly and received an unambiguous answer, this market shall also resolve to YES or NO as indicated thereby. Only if such a post is unambiguously contradicted by authoritative alternate sources such as the Utah Avalanche Center, US National Weather Service, opensnow.com or the nearby Snowbird resort shall this market considered to be INVALID.<br />

**Type:** Yes/No<br />
**Outcomes:** Yes, No<br />
**Ends:** Mar 6, 2019 8:00 PM PM<br />
**Fees:** 0.05%<br />
**Categories/Tag:** Weather, Skiing<br />
**Resolution Source:** https://www.alta.com/conditions/weather-observations/snowfall-history<br />

**Notes:** This is a very good example of a well-defined market that also specifies how to resolve it if the primary resolution source is not available. Backup resolution sources have yet to be used in a major dispute, so at this time it has not been tested.

The work for reporters is almost to the point of being too complicated, as at first glance it appears that the market title (100 inces) and the additional details (372 inches) are in contradiction with one another. But the 372 inches is a cumulative amount of the year, which is the reported number by the resolution source, but the question is specifically about the amount for February. January had 272 inches of snow, so for February to have at least 100 inches of snow, the cumulative result should at least be 372 inches. 

There is ongoing debate about how complicated the resolution rules can be for reporters to validate the truth. At some point, if the answer is too difficult to figure out, reporters will mark the market as Invalid. Where that line is is yet to be determined, but this market is a good baseline to work with.

### Scalar

**Title:** [What will be the price of Bitcoin (BTC) in USD at 12am UTC on March 30, 2019?](https://predictions.global/augur-markets/what-will-be-the-price-of-bitcoin-btc-in-usd-at-12am-utc-on-march-30-2019-0xf608128a1b8b9144bcdce122855c4cce1abfb5b1)
<br />
**Details:** Resolution will be based on Veil's data feed located at https://veil.co/feed/btc-usd. The value can be found in the "Last feed value" column of the "Related markets" table, which will provide the feed value at the moment before 12am UTC on March 30, 2019. If rounding is necessary, the report should use the last feed value rounded down to the nearest multiple of 0.01.

If the real-world outcome for this market is above this market's maximum value, the maximum value (4800.37 USD) should be reported. If the real-world outcome for this market is below this market's minimum value, the minimum value (3200.25 USD) should be reported.<br />
**Type:** Scalar<br />
**Outcomes:** Min: 3200.25, Max: 4800.37<br />
**Denominated In:** USD<br />
**Ends:** March 31, 2019 12:00 AM<br />
**Fees:** 0.51%<br />
**Categories/Tag:** Veil, Bitcoin, Cryptocurrency<br />
**Resolution Source:** https://veil.co/feed/btc-usd<br />

**Notes:** This is a good example of a scalar market. Note that these work a little differently, as you have to set a lower and upper bound to the market, with a precision inbetween (typically 0.01 for something like USD). Choosing a good upper and lower bound can be tricky, as it can depend greatly on volatility. 

This market is also a great example of the market creator using their own custom resolution source. Market traders need to trust that the creator is not going to be malicious (i.e. cheat) with the resolution source, but that is can be ok. In this case, Veil is building up their own reputation as a platform on top of Augur.

The second paragraph of the "details" section is actually automatically added in by the Augur UI, it was not supplied by the market creator. This paragraph is always added in dynamically by the Augur UI to specify details about the upper and lower bounds of the market and how they affect market resolution.

### Miscellaneous

**Title:** [Will a SpaceX Starship test vehicle have a successful test flight before March 2nd?](https://predictions.global/augur-markets/will-a-spacex-starship-test-vehicle-have-a-successful-test-flight-before-march-2nd-0x8499fca0a811ede100c36a438dca755bc89c1fc3)<br />
**Details:** For the purpose of this market: 1) "successful test flight" shall mean that the test vehicle landed and stabilized in an upright position after reaching an elevation strictly greater than 1 meter above the original launchpad elevation 2) "before March 2nd" shall mean "before March 1st 2019 23:59:59 UTC included" The market shall resolve as YES if and only if 1 and 2 are true.<br />
**Type:** Yes/No<br />
**Outcomes:** Yes, No<br />
**Ends:** Mar 6, 2019 11:59 PM<br />
**Fees:** 1.01%<br />
**Categories/Tag:** Space, Spacex, Mars<br />
**Resolution Source:** General Knowledge<br />

**Notes:** This market is just a good example of how awesome Augur can be, because you can create markets about almost anything. As usual, the additional details section is critical to add additional context and to cover any potential edge cases that could come up. This market had a very low probability of resolving as Invalid, but it wasn’t entirely zero. There could have been uncertainty if the rocket had only reached an elevation of 0.9 meters, for example. It may have been unclear to the general public how high the rocket actually went. Enough clarity of intent in the market details allows for a large reduction in the probability of an Invalid market.
