---
title: To-do's
---
{% capture glossary_path %}{{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html{% endcapture %}
{% assign glossary_child_universe = glossary_path | append: '#Child_Universe' %}
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
REP holders have 2 things to do even before a [fork]({{glossary_fork}}) starts so that they don't lose the value of their [REP]({{glossary_reputation_token}}). One is to [convert REPv1 to REPv2](#convert-repv1-to-repv2) and the other is to [check monthly to see if a fork occurs](#check-monthly-to-see-if-a-fork-occurs).

### Convert REPv1 to REPv2
REPv1 holders **MUST** convert their [REPv1]({{glossary_repv1}}) to [REPv2]({{glossary_repv2}}), because REP in the [parent universe]({{glossary_parent_universe}}) can be migrated to only its [child universe]({{glossary_child_universe}}) and once the fork is complete migration into a child universe is no longer possible!

That means they have to follow the chain of [universes]({{glossary_universe}}). For example, [forks]({{glossary_fork}}) occur in the following order:
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

### Check monthly to see if a fork occurs
[Forks]({{glossary_fork}}) last for 60 days, so it is strongly recommended that all REP holders "check in" on the project at least once a month to make sure that no fork is underway or they risk losing all of their REP.

The process of "checking in" just means open the [Augur UI]({{ "/" | absolute_url }}/{{page.collection}}/8-augur-ui.html) or ask around (Discord, Twitter, Reddit, etc.) and see if a fork is underway. If no fork is underway then you can go back to passively holding for a month until your next check in without risk of losing your REP.

Useful links for checking if a fork occurs are:
 - [Augur Discord server](https://discord.gg/guXC9Bd4)  ⭐*recommended*⭐
 - The [official Twitter account](https://twitter.com/augurproject)
 - The [official blog](https://augur.net/blog)
 - The subreddit [/r/Augur](https://www.reddit.com/r/Augur/)

## After starting a fork (60 days)
REP holders needs to pick a side and migrate their REP to the [child universe]({{glossary_child_universe}}) they believe aligns with reality within 60 days from starting a [fork]({{glossary_fork}}).

After 60 days from starting a fork, [REP]({{glossary_reputation_token}}) in the [parent universe]({{glossary_parent_universe}}) are [locked]({{glossary_locked_universe}}) and can not be migrated to the child universe permanently.

However, the choice should be considered carefully, because migration is one-way; it cannot be reversed. REP cannot be sent from one [sibling universe]({{glossary_sibling_universe}}]) to another.

### What if REP holders don't wish to join in the fork?
They may sell their [REP]({{glossary_reputation_token}}) before the [fork]({{glossary_fork}}) is over, but beware that if many people exercise this strategy the price of REP may drop leading up to the fork and then rebound in the [truth universe]({{glossary_truth_universe}}) after the fork, this could be a costly strategy.

### You receive 40% ROI by joining in the fork?
Wether you receive 40% [ROI]({{glossary_roi}}) on your migrated [REP]({{glossary_reputation_token}}) by joining in the [fork]({{glossary_fork}}) depends on when and where you migrate your REP. If you migrate your REP during the [forking period]({{glossary_forking_period}}) and the [child universe]({{glossary_child_universe}}) which you migrate it becomes [*winning universe*]({{glossary_winning_universe}}) , then you get 40% ROI on your migrated REP. If you migrate after the forking period, you may not get 40% ROI but you can migrate it without risk of migrating to [*losing universe*]({{glossary_losing_universe}}). Because the [final outcome]({{glossary_final_outcome}}) of the [forking market]({{glossary_forking_market}}) is fixed when the forking period ends.

In other words, you must migirate your REP within 60 days after a fork starts, but it is not necessarily to migrate it during the forking period. The forking period ends when the forking market enters the [finalized state]({{glossary_finalized_market}}), it can take less than 60 days. While, the period which you can migrate your REP is always fixed 60 days.

{% capture image_src %}{{ "/" | absolute_url }}assets/images/{{page.collection}}/fork/to-dos/forking-period.svg{% endcapture %}
{% include zoom-image.html src=image_src caption="Figure 2. forking period and migratable period" %}
