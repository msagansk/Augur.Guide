---
title: Restrictions on use
---

{% capture fork_dir %}{{ "/" | absolute_url }}{{page.collection}}/9-fork/{% endcapture %}
{% assign url_migration_of_the_objects = fork_dir | append: '4-migration-of-the-objects.html' %}

{% capture glossary_path %}{{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html{% endcapture %}
{% assign glossary_child_universe = glossary_path | append: '#Child_Universe' %}
{% assign glossary_creator_fee = glossary_path | append: '#Creator_Fee' %}
{% assign glossary_finalized_market = glossary_path | append: '#Finalized_Market' %}
{% assign glossary_fork = glossary_path | append: '#Fork' %}
{% assign glossary_forking_period = glossary_path | append: '#Forking_Period' %}
{% assign glossary_locked_universe = glossary_path | append: '#Locked_Universe' %}
{% assign glossary_market = glossary_path | append: '#Market' %}
{% assign glossary_parent_universe = glossary_path | append: '#Parent_Universe' %}
{% assign glossary_participation_token = glossary_path | append: '#Participation_Token' %}
{% assign glossary_reporting_fee = glossary_path | append: '#Reporting_Fee' %}
{% assign glossary_reporting_fee_pool = glossary_path | append: '#Reporting_Fee_Pool' %}
{% assign glossary_reputation_token = glossary_path | append: '#Reputation_Token' %}
{% assign glossary_settlement = glossary_path | append: '#Settlement' %}
{% assign glossary_share = glossary_path | append: '#Share' %}
{% assign glossary_trading_fee = glossary_path | append: '#Trading_Fee' %}
{% assign glossary_winning_universe = glossary_path | append: '#Winning_Universe' %}

# What can users do during/after a fork?
The [whitepaper](https://github.com/AugurProject/whitepaper/blob/master/v2/english/augur-whitepaper-v2.pdf) says:

> When a fork is initiated, the parent universe becomes permanently locked. In a locked universe, no new markets may be created and no REP can be staked on any market. Therefore markets in a locked universe cannot be finalized. However, users may continue trading shares in markets in locked universes. In order for markets or REP tokens in the locked universe to be useful, they must first be migrated to a child universe.

Then, what is a [locked universe]({{glossary_locked_universe}})? And what can users do in the [parent universe]({{glossary_parent_universe}}) and [child universes]({{glossary_child_universe}}) specifically? The purpose of this page is to clear up those questions.

## Summary
From a conclusion, when a [fork]({{glossary_fork}}) starts, in the [parent universe]({{glossary_parent_universe}}), [REP]({{glossary_reputation_token}}) cannot be staked on any [market]({{glossary_market}}) and markets cannot be [finalized]({{glossary_finalized_market}}), in addition to that, new markets cannot be created. On the other hand, in [child universes]({{glossary_child_universe}}), users can do anything right after it is created.
<table>
  <thead>
    <tr>
      <th rowspan="2" colspan="2" class="center">Action</th>
      <th rowspan="1" colspan="2" class="center">Before a Fork</th>
      <th rowspan="1" colspan="2" class="center">During a Fork</th>
      <th rowspan="1" colspan="2" class="center">After a Fork</th>
    </tr>
    <tr>
      <th rowspan="1" colspan="1" class="center">Parent</th>
      <th rowspan="1" colspan="1" class="center">Child</th>
      <th rowspan="1" colspan="1" class="center">Parent</th>
      <th rowspan="1" colspan="1" class="center">Child</th>
      <th rowspan="1" colspan="1" class="center">Parent</th>
      <th rowspan="1" colspan="1" class="center">Child</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4" colspan="1"><b>Market</b></td>
      <td rowspan="1" colspan="1">Creation</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">-</td>
      <td rowspan="1" colspan="1" class="center">❌</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">❌</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
    </tr>
    <tr>
      <td rowspan="1" colspan="1" >Trading Share</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">-</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
    </tr>
    <tr>
      <td rowspan="1" colspan="1">Settlement</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">-</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
    </tr>
    <tr>
      <td rowspan="1" colspan="1">Finalization</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">-</td>
      <td rowspan="1" colspan="1" class="center">❌</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">❌</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
    </tr>
    <tr>
      <td rowspan="2" colspan="1"><b>Reporting</b></td>
      <td rowspan="1" colspan="1">Initial Reporting</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">-</td>
      <td rowspan="1" colspan="1" class="center">❌</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">❌</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
    </tr>
    <tr>
      <td rowspan="1" colspan="1">Disputing</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">-</td>
      <td rowspan="1" colspan="1" class="center">❌</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">❌</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
    </tr>
    <tr>
      <td rowspan="2" colspan="1"><b>Participation Token</b></td>
      <td rowspan="1" colspan="1">Purchasing</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">-</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
    </tr>
    <tr>
      <td rowspan="1" colspan="1">Redeeming</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">-</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
      <td rowspan="1" colspan="1" class="center">✅</td>
    </tr>
  </tbody>
</table>

Now let's break it down into each phase and see more details.

## Before a Fork
Before a [fork]({{glossary_fork}}), there are no restrictions in the [parent universe]({{glossary_parent_universe}}). And [child universes]({{glossary_child_universe}}) are not yet created at this point.

## During a Fork
"During a fork" means "during the [forking period]({{glossary_forking_period}})". During this period, REP holders cannot stake [REP]({{glossary_reputation_token}}) on any [market]({{glossary_market}}) in the [parent universe]({{glossary_parent_universe}}), since REP in the parent universe needs to be migrated to one of the [child universes]({{glossary_child_universe}}). Therefore, markets in the parent universe are never [finalized]({{glossary_finalized_market}}). And users may not create new markets in the parent univese after a fork starts.

Even if a market in the parent universe has not been migrated to the [winning universe]({{glossary_winning_universe}}), users may trade and [settle]({{glossary_settlement}}) their [shares]({{glossary_share}}) on the market. It does not matter whether the market is already finalized or not, users can do those on any market in the parent universe. Trading in the parent universe, traders pay [creator fee]({{glossary_creator_fee}}) and [reporting fee]({{glossary_reporting_fee}}), and those fees are added to [reporting fee pool]({{glossary_reporting_fee_pool}}). So users may purchase [participation tokens]({{glossary_participation_token}}) to collect those fees and redeem them.

In child universes, there are no restrictions. It doesn't matter whether a child universe is winning one or losing one. You can do everything on it as soon as it is created.  Note: child universes are not created as soon as a fork starts, they are created when the first time REP is migrated to them (See [migration of the objects]({{url_migration_of_the_objects}}#forking-market) for details).

## After a Fork
After the [forking period]({{glossary_forking_period}}), what users can do in the [parent universe]({{glossary_parent_universe}}) is the same as during the forking period. Traders still can trade/settle their [share]({{glossary_share}}) on the markets which have not been migrated to the [winning universe]({{glossary_winning_universe}}), and the [fees]({{glossary_trading_fee}}) which are paid by traders are added to [reporting fee pool]({{glossary_reporting_fee_pool}}) and distributed to [participation token]({{glossary_participation_token}}) holders in the parent universe.

In [child universes]({{glossary_child_universe}}), continuing from during the forking period, there are no restrictions.
