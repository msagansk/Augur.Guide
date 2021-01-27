---
title: Migration of the objects
---

{% capture fork_dir %}{{ "/" | absolute_url }}{{page.collection}}/9-fork/{% endcapture %}
{% assign url_basic_knowledge = fork_dir | append: '1-basic-knowledge.html' %}

{% capture glossary_path %}{{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html{% endcapture %}
{% assign glossary_child_universe = glossary_path | append: '#Child_Universe' %}
{% assign glossary_creation_bond = glossary_path | append: '#Creation_Bond' %}
{% assign glossary_creator_fee = glossary_path | append: '#Creator_Fee' %}
{% assign glossary_designated_reporter = glossary_path | append: '#Designated_Reporter' %}
{% assign glossary_dispute_window = glossary_path | append: '#Dispute_Window' %}
{% assign glossary_end_time = glossary_path | append: '#End_Time' %}
{% assign glossary_final_outcome_ = glossary_path | append: '#Final_Outcome' %}
{% assign glossary_finalized_market = glossary_path | append: '#Finalized_Market' %}
{% assign glossary_fork = glossary_path | append: '#Fork' %}
{% assign glossary_forking_market = glossary_path | append: '#Forking_Market' %}
{% assign glossary_forking_period = glossary_path | append: '#Forking_Period' %}
{% assign glossary_initial_reporter = glossary_path | append: '#initial_reporter' %}
{% assign glossary_invalid_outcome = glossary_path | append: '#Invalid_Outcome' %}
{% assign glossary_losing_universe = glossary_path | append: '#Losing_Universe' %}
{% assign glossary_market = glossary_path | append: '#Market' %}
{% assign glossary_market_creator = glossary_path | append: '#Market_Creator' %}
{% assign glossary_non_finalized_market = glossary_path | append: '#Non-Finalized_Market' %}
{% assign glossary_outcome = glossary_path | append: '#Outcome' %}
{% assign glossary_parent_universe = glossary_path | append: '#Parent_Universe' %}
{% assign glossary_participation_token = glossary_path | append: '#Participation_Token' %}
{% assign glossary_reputation_token = glossary_path | append: '#Reputation_Token' %}
{% assign glossary_roi = glossary_path | append: '#ROI' %}
{% assign glossary_smart_contract = glossary_path | append: '#Smart_Contract' %}
{% assign glossary_share = glossary_path | append: '#Share' %}
{% assign glossary_transaction_fee = glossary_path | append: '#Transaction_Fee' %}
{% assign glossary_unfilled_order = glossary_path | append: '#Unfilled_Order' %}
{% assign glossary_universe = glossary_path | append: '#Universe' %}
{% assign glossary_validity_bond = glossary_path | append: '#Validity_Bond' %}
{% assign glossary_winning_universe = glossary_path | append: '#Winning_Universe' %}

# Migratable objects in Augur
This page covers the details of what objects in the Augur system of [contracts]({{glossary_smart_contract}}) are migratable between [parent]({{glossary_parent_universe}}) and [child universes]({{glossary_child_universe}}). However *all* objects are not covered on this page, but only those that are likely to directly affect end users.

# Hierarchical Relationships between Objects
The objects in the [universe]({{glossary_universe}}) form a hierarchical relationship with the universe as a top.
{% capture image_src %}{{ "/" | absolute_url }}assets/images/{{page.collection}}/fork/migration-of-the-objects/relationships-between-objects.svg{% endcapture %}
{% include zoom-image.html src=image_src caption="Figure 1. hierarchical relationships between objects" %}

The universe has [REP]({{glossary_reputation_token}}), [Market]({{glossary_market}}), and [Dispute Window]({{glossary_dispute_window}}) attached. And Market and Dispute Window have some attached objects, while REP doesn't have any attached object. The point is that **when forks occur, the lower objects migrate where their upper object migrates, and if the upper object may not migrate then their lower objects may not migrate**. Of course, there are some exceptions, but this principle might help you understand the migration of the objects.

# Overview
The following figure shows where the objects in the [parent universe]({{glossary_parent_universe}}) are migrated after a fork. (Click to enlarge)
{% capture image_src %}{{ "/" | absolute_url }}assets/images/{{page.collection}}/fork/migration-of-the-objects/outline.svg{% endcapture %}
{% include zoom-image.html src=image_src caption="Figure 2. overview of migration" %}

The red objects can only be migrated to the [winning universe]({{glossary_winning_universe}}), the blues can only be migrated to the [losing universe]({{glossary_losing_universe}}), the purples can be migrated to one of the [child universes]({{glossary_child_universe}}), and the greens cannot be migrated to any child universe.

Before a [fork]({{glossary_fork}}), all objects are in the parent universe. After a fork, in the parent universe, there are the [finalized markets]({{glossary_finalized_market}}), [dispute windows]({{glossary_dispute_window}}), and the objects which are attached to them. The winning universe and the losing universe are created, and the [forking market]({{glossary_forking_market}}), [non-finalized markets]({{glossary_non_finalized_market}}), and [REP]({{glossary_reputation_token}}) are migrated to them.

This can be summarized as follows:

  - The migratable objects are:
    - Forking market
    - Non-Finalized Markets
    - REP
  - The un-migratable objects are:
    - Finalized Markets
    - Dispute Windows
  - The winning universe receives:
    - Forking market and its attached objects
    - Non-Finalized markets
    - REP
  - The losing universe receives:
    - Forking market
    - REP

# Child universe is created by REP holders
A [child universe]({{glossary_child_universe}}) is created when the [REP]({{glossary_reputation_token}}) holder who *first* migrates their REP to it. Even if the [forking market]({{glossary_forking_market}}) has [finalized]({{glossary_finalized_market}}) or the [forking period]({{glossary_forking_period}}) ends, the [child universe]({{glossary_child_universe}}) is not created without migrating REP. And the REP holder who *first* migrates their REP has to pay not only the [transaction fee]({{glossary_transaction_fee}}) of migrating their REP, but also the transaction fee of creating the child universe.

# Migration of Forking Market
## Market Itself
The [forking market]({{glossary_forking_market}}) is duplicated in each [child universe]({{glossary_child_universe}}). In a child universe, the forking market is [finalized]({{glossary_finalized_market}}) as the [outcome]({{glossary_outcome}}) that aligns with that particular child universe. (See [basic knowledge]({{url_basic_knowledge}}#what-happens-when-a-fork-starts) for details on how child universes are created.)

This duplication occurs when the child universe is created.  This happens when the *first* [REP]({{glossary_reputation_token}}) holder migrates their REP to that child universe.

## Staked REP
The staked [REP]({{glossary_reputation_token}}) on any [outcome]({{glossary_outcome}}) of the [forking market]({{glossary_forking_market}}) is migrated to the [child universe]({{glossary_child_universe}}) corresponding to the staked outcome.

That REP will be unstaked and refunded to their owners in a child universe when the migration has done. They will also receive a 40% [ROI]({{glossary_roi}}) in additional REP minted in the universe they staked on prior to the fork.

## Attached Objects
The objects which are attached to the [forking market]({{glossary_forking_market}}) are:
 - [share]({{glossary_share}})
 - [unfilled order]({{glossary_unfilled_order}})
 - [creator fee]({{glossary_creator_fee}})
 - [validity bond]({{glossary_validity_bond}})

When the forking market is [finalized]({{glossary_finalized_market}}), those objects are migrated to the [winning universe]({{glossary_winning_universe}}) by the Augur contracts automatically.

Regarding [validity bond]({{glossary_validity_bond}}), which is paid by the [market creator]({{glossary_market_creator}}) when creating the [market]({{glossary_market}}), if the corresponding outcome of the winning universe is `Invalid`, this bond is paid out to [participation token]({{glossary_participation_token}}) holders in proportion to the amount of participation token in the winning universe. If not `Invalid`, this bond is returned to the market creator in the winning universe.

As to [creation bond]({{glossary_creation_bond}}), which is also paid by the market creator, no longer exists at the time of forking. Since this bond is already used by the [designated reporter]({{glossary_designated_reporter}}) or the [first public reporter]({{glossary_first_public_reporter}}) as the [initial reporter]({{glossary_initial_reporter}})'s stake after the market's [event end time]({{glossary_end_time}}).

The summary is shown in the following figure:
{% capture image_src %}{{ "/" | absolute_url }}assets/images/{{page.collection}}/fork/migration-of-the-objects/forking-market.svg{% endcapture %}
{% include zoom-image.html src=image_src caption="Figure 3. migration of forking market"%}

---

*The rest is in progress.*
# Migration of Non-Forking Markets (not finalized)
## Market Itself
## Staked REP
## Attached Objects

# Migration of REP in Wallet

# Un-migratable objects
## Finalized Markets
## Dispute Windows
