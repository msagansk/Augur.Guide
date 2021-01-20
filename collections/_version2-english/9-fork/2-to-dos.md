---
title: To-do's
---
{% capture glossary_path %}{{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html{% endcapture %}
{% assign glossary_child_universe = glossary_path | append: '#Child_Universe' %}
{% assign glossary_dispute = glossary_path | append: '#Dispute' %}
{% assign glossary_final_outcome = glossary_path | append: '#Final_Outcome' %}
{% assign glossary_finalized_market = glossary_path | append: '#Finalized_Market' %}
{% assign glossary_fork = glossary_path | append: '#Fork' %}
{% assign glossary_forking_market = glossary_path | append: '#Forking_Market' %}
{% assign glossary_forking_period = glossary_path | append: '#Forking_Period' %}
{% assign glossary_locked_universe = glossary_path | append: '#Locked_Universe' %}
{% assign glossary_losing_universe = glossary_path | append: '#Losing_Universe' %}
{% assign glossary_parent_universe = glossary_path | append: '#Parent_Universe' %}
{% assign glossary_reputation_token = glossary_path | append: '#Reputation_Token' %}
{% assign glossary_repv1 = glossary_path | append: '#REPv1' %}
{% assign glossary_repv2 = glossary_path | append: '#REPv2' %}
{% assign glossary_roi = glossary_path | append: '#ROI' %}
{% assign glossary_sibling_universe = glossary_path | append: '#Sibling_Universe' %}
{% assign glossary_truth_universe = glossary_path | append: '#Truth_Universe' %}
{% assign glossary_winning_universe = glossary_path | append: '#Winning_Universe' %}

# To-do's
If you are a REP holder, there are some things you **MUST** do for a [fork]({{glossary_fork}}) to not lose your [REP]({{glossary_reputation_token}}).

## Before a fork starts
Before a [fork]({{glossary_fork}}) starts, REP holders still have to be actively involved so that they don't lose the value of their [REP]({{glossary_reputation_token}}). The minimum involvement necessary to avoid permanent losses of REP is to **check monthly to see if a fork occurs**.

[Forks]({{glossary_fork}}) last for 60 days, so it is strongly recommended that all REP holders "check in" on the project at least once a month to make sure that no fork is underway or they risk losing all of their REP.

The process of "checking in" just means open the [Augur UI]({{ "/" | absolute_url }}/{{page.collection}}/8-augur-ui.html) or ask around (Discord, Twitter, Reddit, etc.) and see if a fork is underway. If no fork is underway then you can go back to passively holding for a month until your next check in without risk of losing your REP.

Useful links for checking if a fork occurs are:
 - [Augur Discord server](https://invite.augur.net)  ⭐*recommended*⭐
 - The [official Twitter account](https://twitter.com/augurproject)
 - The [official blog](https://augur.net/blog)
 - The subreddit [/r/Augur](https://www.reddit.com/r/Augur/)

## By the end of a fork
[REPv1]({{glossary_repv1}}) holders **MUST** convert their REPv1 to [REPv2]({{glossary_repv2}}) before 60 days have passed since the [fork]({{glossary_fork}}) started, because [REP]({{glossary_reputation_token}}) in the [parent universe]({{glossary_parent_universe}}) can be migrated to only its [child universe]({{glossary_child_universe}}) and once the fork is complete migration into a child universe is no longer possible!

That means they have to follow the chain of [universes]({{glossary_universe}}). For example, forks occur in the following order:
```
universe A → universe B → universe C
```
and REP exits in the *universe A*, it has to be migrated as follows: 
```
universe A → universe B → universe C
```
It cannot skip `universe B`.
{% capture image_src %}{{ "/" | absolute_url }}assets/images/{{page.collection}}/fork/to-dos/chain-of-universes.svg{% endcapture %}
{% include zoom-image.html src=image_src caption="Figure 1. chain of universes" %}

## After starting a fork (60 days)
REP holders needs to pick a side and migrate their REP to the [child universe]({{glossary_child_universe}}) they believe aligns with reality within 60 days from starting a [fork]({{glossary_fork}}).

After 60 days from starting a fork, [REP]({{glossary_reputation_token}}) in the [parent universe]({{glossary_parent_universe}}) are [locked]({{glossary_locked_universe}}) and can not be migrated to the child universe permanently.

However, the choice should be considered carefully, because migration is one-way; it cannot be reversed. REP cannot be sent from one [sibling universe]({{glossary_sibling_universe}}]) to another.

## What if REP holders don't wish to join in the fork?
They may sell their [REP]({{glossary_reputation_token}}) before the [fork]({{glossary_fork}}) is over, but beware that if many people exercise this strategy the price of REP may drop leading up to the fork and then rebound in the [truth universe]({{glossary_truth_universe}}) after the fork, this could be a costly strategy.

## Is there any reward for migrating REP to a child universe?
No. If you migrate your [REP]({{glossary_reputation_token}}) during the [forking period]({{glossary_forking_period}}), there is no reward for that. However, if you staked your REP on the [forking market]({{glossary_forking_market}})'s outcome before the fork starts and the outcome you staked on becomes the [final outcome]({{glossary_final_outcome}}) of the forking market, you will receive a 40% [ROI]({{glossary_roi}}) on your stake in the [winning universe]({{glossary_winning_universe}}).

In other words, there is possibility only for the REP participated in a [dispute]({{glossary_dispute}}) to receive a 40% ROI. The REP migrated during the forking period cannot receive any reward, even if the child universe which the REP migrated to is the winning universe.
