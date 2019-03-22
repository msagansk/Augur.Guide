---
title: Traders
---
# Traders 

Traders are the lifeblood of Augur. Your actions as a trader keep the system running and provide useful information about the likelihood of particular future events. You put your money where your mouth is by exchanging [ETH](https://augur.guide/glossary.html#ETH) for [SHARES](https://augur.guide/glossary.html#SHARE) (an [ERC 20](https://en.wikipedia.org/wiki/ERC-20) token) of a particular market outcome, at a specific price. As a trader trying to profit, you believe that those SHARES are likely going to be worth more in the future, based on your own internal estimate of the probabilities. The combination of many traders all exchanging their information on the likelihood of an event's outcome gives everyone useful information to help make better decisions.

**Note** - To facilitate trading ETH for SHARES and vice-versa, Augur also wraps ETH into an ERC-20 token called [CASH](https://augur.guide/glossary.html#Cash), behind the scenes. This is similar to wrapped ETH or WETH, used in other [dapps](https://augur.guide/glossary.html#Dapp). The very first time you want to trade on Augur with an Ethereum address, you will have to do an “Approve” transaction to allow Augur to do this.

The default Augur reference UI currently provides price information about a market from a financial traders point of view, but the same information can also be presented in the various forms of gambling standards (decimal odds, fractional odds, etc). We will stick to the financial traders perspective here.

Every outcome in a market has its own [order book](https://augur.guide/glossary.html#Order%20Book) (note: the default UI hides the “No” outcome in a Yes/No market for simplicity). You can [create orders](https://augur.guide/glossary.html#Order%20Creator) in an order book, [fill](https://augur.guide/glossary.html#Order%20Filler) other people’s orders in the order book, do both at the same time, or cancel your orders in the order book. Each of these actions are a transaction on the Ethereum blockchain which costs gas. A common misunderstanding is that just because you have placed an order in the order book, it does not mean you have an active [position](https://augur.guide/glossary.html#Position) in the market. If your order isn’t filled by someone else taking the other side of the trade/bet, then you will eventually have to cancel the order to get your money back.

There are many possibilities of how a trade can go, so we will go with the simplest example here. For a more thorough breakdown of all the possibilities, visit the [Trading Diagrams page](https://augur.guide/3-traders/trading-diagrams.html). To make a trade, you must first find a market you are interested in trading in. Use the reference UI or one of the [External Resources](https://augur.guide/5-external-resources.html) to find a market you have some knowledge in that also has liquidity (i.e. [open orders](https://augur.guide/glossary.html#Open%20Order) in the order book). 

For a [Yes/No market](https://augur.guide/glossary.html#Yes/No%20Market), the UI only lets you buy or sell Yes SHARES. “No” exists but is hidden for simplicity, instead it will show up as negative Yes shares if you own them. The red numbers at the top of the order book are sell orders (where you can buy YES shares), and the green numbers at the bottom of the order book are buy orders (where you can sell YES shares). You can click on the open orders in the order book to have Augur automatically fill in the required information for your trade. But there are essentially 4 parameters:

**Buy or Sell** - Do you want to Buy SHARES in this Yes outcome, or Sell them to someone else? Note that you don’t actually have to own Yes SHARES to sell them to someone else. If your Sell order is matched with a Buy order, and no one has any SHARES, Augur will create the Yes and No SHARES behind the scenes and distribute them accordingly.<br />
**Quantity** - This is the amount of SHARES you wish to own. For a Yes/No market, they will ultimately be worth either:<br />
0 ETH/SHARE: The market did not resolve as this outcome<br />
1 ETH/SHARE: The market did resolve as this outcome<br />
0.5 ETH/SHARE: The market resolved as Invalid <br />
**Price** - This is the amount you are willing to pay per share, denominated in ETH. This value is a fraction between 0 and 1, which can also be thought of as a probability in % terms. You want to have this price (+ fees) be less than your own estimated probability that this outcome will occur. If your estimates are correct, you should make money in the long run.<br />
**Fill Orders Only** - If this box is checked you are saying you only want to take orders off the order book, and not create your own. You may want to check this box to ensure you aren’t making a mistake and placing an open order you didn’t intend, and only want to take the odds someone else has provided. It is also possible that someone else may fill the order before you, which would cause your transaction to fail if this box is checked. If this box is not checked, and someone else beats you to filling an order, you would create a new order on the order book at the same price and quantity.

### Fees

There are a few different kinds of fees that you should concern yourself with:

[**Market Creator Fee**](https://augur.guide/glossary.html#Creator%20Fee) - This is a % fee in ETH that is given to the market creator whenever you settle SHARES back for ETH. This fee is set when the market is created. A typical and reasonable value for this is usually around 1%. Be sure to check what this value is set to, as a very high fee can make trading unprofitable.<br />
[**Reporting Fee**](https://augur.guide/glossary.html#Reporting%20Fee) - This is a % fee in ETH that is given to reporters who participate in a given fee window. This reporting fee is dynamic - it adjusts weekly to keep your market and Augur as a whole secure. This means that it may be a different value between the time you have made the trade and when you have redeemed your winnings and need to pay the fee. Historically it hasn’t risen above 0.01% but this may change in the long run.<br />
**Gas Costs** - Augur maintains the order book and trading all on-chain on the Ethereum blockchain. Ethereum transactions have gas costs at a varying gas price, denominated in ETH. Typically you can make trades for much less than $1 USD, but it is variable. As Ethereum improves and scales with time, the hope is that gas fees will go down.

Both the Market Creator Fee and the Reporting Fee trigger in a couple different cases. The first is when you redeem winning SHARES back for ETH after the market has been finalized. The second case is when you happen to sell your SHARES to someone else who also happens to be selling SHARES of the other outcome(s). If the SHARES combine to form a complete set (i.e. all possible outcomes), Augur will burn the SHARES and return ETH back to the traders, less the fees. Collectively, these are also called Settlement Fees.

### A Word on "Invalid"

For all of these markets types, [Invalid](https://augur.guide/glossary.html#Invalid%20Outcome) is always a potential outcome, but it is not explicitly tradeable (in version 1 of Augur). The Invalid result is used by reporters when the truthful answer was not apparent at the time the market entered the reporting phase. If a market resolves as Invalid, market SHARES are worth a specific amount based on the market type (examples are available on the [Market Types](https://augur.guide/1-getting-started/market-types.html page). Unfortunately, due to technical limitations, Invalid markets cannot "unwind" trading so that traders receive the exact amount of money they paid for their shares.

As a trader, this means you need to do your due diligence when deciding to trade on a market. Since anyone can create a market about anything, scams and tricks do exist, especially since the “Invalid” outcome is only an implied outcome and not directly tradeable. Be wary of markets that could potentially be interpreted in multiple ways, or if the market can potentially end earlier than the result would be known. A handy [check sheet](https://augur.guide/3-traders/checksheet.html) is provided to help you make mistakes.

For seasoned Augur users: Each outcome in the payout set of an Invalid market is set to the number of ticks divided by the number of outcomes (in order to ensure that the holders of each type of Share in the Market receive the same payout during Settlement).

### Waiting for Settlement - An Option to Exit Early

If you’ve been successful in making a trade and it looks like your selected outcome is going to win, you may still have to wait a while. Redeeming your SHARES back for their full ETH value can take a while, due to the nature of the decentralized oracle (i.e. the reporters). Check out the [Reporting Process](https://augur.guide/4-reporters/1-reporting-process.html) page to see the full extent of the potential delays you may have to wait for. 

Fortunately, you do have an option if you would like to receive your ETH earlier than waiting for the market to finalize. You can put orders in the order book for your quantity of SHARES at a price slightly discounted from 1 (i.e. 100%). Typical discounts range between 1-5%, depending on how long you think the market will take to resolve and your own personal evaluation of the time value of money. Other traders may be willing to earn a few % by waiting out the resolution, whereas you are then free to use your ETH for something else.
