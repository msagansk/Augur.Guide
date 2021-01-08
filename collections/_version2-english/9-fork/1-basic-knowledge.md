---
title: Basic knowledge
---

{% capture glossary_path %}{{ "/" | absolute_url }}/{{page.collection}}/7-glossary.html{% endcapture %}
{% assign glossary_fork = glossary_path | append: '#Fork' %}
{% assign glossary_market = glossary_path | append: '#Market' %}
{% assign glossary_report = glossary_path | append: '#Report' %}
{% assign glossary_initial_reporter = glossary_path | append: '#Initial_Reporter' %}
{% assign glossary_initial_report = glossary_path | append: '#Initial_Report' %}
{% assign glossary_dispute_round_phase = glossary_path | append: '#Dispute_Round_Phase' %}
{% assign glossary_outcome = glossary_path | append: '#Outcome' %}
{% assign glossary_tentative_outcome = glossary_path | append: '#Tentative_Outcome' %}
{% assign glossary_dispute_round = glossary_path | append: '#Dispute_Round' %}
{% assign glossary_dispute = glossary_path | append: '#Dispute' %}
{% assign glossary_reputation_token = glossary_path | append: '#Reputation_Token' %}
{% assign glossary_dispute_bond = glossary_path | append: '#Dispute_Bond' %}
{% assign glossary_universe = glossary_path | append: '#Universe' %}
{% assign glossary_final_outcome = glossary_path | append: '#Final_Outcome' %}
{% assign glossary_forking_market = glossary_path | append: '#Forking_Market' %}
{% assign glossary_creation_bond = glossary_path | append: '#Creation_Bond' %}
{% assign glossary_parent_universe = glossary_path | append: '#Parent_Universe' %}
{% assign glossary_child_universe = glossary_path | append: '#Child_Universe' %}
{% assign glossary_all_theoretical_rep = glossary_path | append: '#All_Theoretical_REP' %}
{% assign glossary_forking_period = glossary_path | append: '#Forking_Period' %}
{% assign glossary_winning_universe = glossary_path | append: '#Winning_Universe' %}
{% assign glossary_losing_universe = glossary_path | append: '#Losing_Universe' %}
{% assign glossary_locked_universe = glossary_path | append: '#Locked_Universe' %}
{% assign glossary_finalized_market = glossary_path | append: '#Finalized_Market' %}
{% assign glossary_rep = glossary_path | append: '#REP' %}
{% assign glossary_reporter = glossary_path | append: '#Reporter' %}
{% assign glossary_market_creator = glossary_path | append: '#Market_Creator' %}

{% capture fork_dir %}{{ "/" | absolute_url }}{{page.collection}}/9-fork/{% endcapture %}
{% assign url_restrictions_on_use = fork_dir | append: '3-restrictions-on-use.html' %}
{% assign url_migration_of_the_objects = fork_dir | append: '4-migration-of-the-objects.html' %}

# What is a fork?
[Forking]({{glossary_fork}}) is the last [market]({{glossary_market}}) resolution method. It is a very disruptive process and is intended to be a rare occurrence.

After a market enters [reporting]({{glossary_report}}), its [initial reporter]({{glossary_initial_reporter}}) submits [initial report]({{glossary_initial_report}}), and the market enters the [dispute round phase]({{glossary_dispute_round_phase}}). and the reported [outcome]({{glossary_outcome}}) becomes the market's [tentative outcome]({{glossary_tentative_outcome}}).
During a [dispute round]({{glossary_dispute_round}}), any [REP]({{glossary_reputation_token}}) holder may [dispute]({{glossary_dispute}}) the tentative outcome by staking REP on an alternative outcome of the market which they consider the "truth". To be successful the dispute, their staking REP needs to reach a certain amount. This amount is called [dispute bond]({{glossary_dispute_bond}}). With each successive dispute round, a higher dispute bond is needed. If the size of dispute bond reaches a certain [threshold](#how-the-market-enters-the-fork-state), the [universe]({{glossary_universe}}) where the disputed market exists is split into multiple universes, one for each possible outcome of the disputed market. This split is the fork.

There are [some things REP holders must do]({{ "/" | absolute_url }}/{{page.collection}}/9-fork/2-to-dos.html) for a fork to not lose their REP.

## What happens when a fork starts?
When a market forks, new [universes]({{glossary_universe}}) are created. Forking creates a new universe for each possible outcome of the market. For example, a market has 3 possible outcomes: `Yes`, `No`, and `Invalid`. When the market forks, 3 new universes are created: universe `Yes`, universe `No`, universe `Invalid`. In each universe, its corresponding outcome becomes the [final outcome]({{glossary_final_outcome}}), such as in the universe `Yes` the final outcome of the [forking market]({{glossary_forking_market}}) is `Yes`, in the universe `No` the final outcome of the forking market is `No`.

The universe that created new universes is called the [parent universe]({{glossary_parent_universe}}), and the newly created universes are called [child universes]({{glossary_child_universe}}).

{% capture image_src %}{{ "/" | absolute_url }}assets/images/{{page.collection}}/fork/basic-knowledge/forked-universe.svg{% endcapture %}
{% include zoom-image.html src=image_src caption="Figure 1. forked universe" %}

## How the market enters the fork state?
If the size of the filled [dispute bond]({{glossary_dispute_bond}}) is greater than or equal to 2.5% of [all theoretical REP]({{glossary_all_theoretical_rep}}), then the market will enter the fork state. This market is referred to as the [forking market]({{glossary_forking_market}}).

For example, the forking market is in the following state:
 - The market has 3 possible outcomes: `Yes`, `No`, and `Invalid`
 - The [creation bond]({{glossary_creation_bond}}) is `0.35` REP
 - All theoretical REP is `11,000,000`
 - 2.5% of all theoretical REP is `275,000`

And assuming that the outcomes `Yes` and `No` are disputed alternately, the changes in the filled dispute bonds which are calculated from the [formula]({{glossary_dispute_bond}}) are shown below:
<table>
  <thead>
    <tr>
      <th rowspan="2" colspan="1" class="center">Dispute Round</th>
      <th rowspan="1" colspan="3" class="center">successfully-filled Dispute Bond</th>
    </tr>
    <tr>
      <th rowspan="1" colspan="1" class="center">Yes</th>
      <th rowspan="1" colspan="1" class="center">No</th>
      <th rowspan="1" colspan="1" class="center">Invalid</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td class="center" >Initial Reporting</td>
    <td class="right" >0.35</td>
    <td class="right" >0</td>
    <td class="right" >0</td>
  </tr>
  <tr>
    <td class="center" >Dispute Round 1</td>
    <td class="right" >0</td>
    <td class="right" >0.7</td>
    <td class="right" >0</td>
  </tr>
  <tr>
    <td class="center" >Dispute Round 2</td>
    <td class="right" >1.05</td>
    <td class="right" >0</td>
    <td class="right" >0</td>
  </tr>
  <tr>
    <td class="center" >Dispute Round 3</td>
    <td class="right" >0</td>
    <td class="right" >2.1</td>
    <td class="right" >0</td>
  </tr>
  <tr>
    <td  rowspan="1" colspan="4" class="center" >〜</td>
  </tr>
  <tr>
    <td class="center" >Dispute Round 18</td>
    <td class="right" >68,812.8</td>
    <td class="right" >0</td>
    <td class="right" >0</td>
  </tr>
  <tr>
    <td class="center" >Dispute Round 19</td>
    <td class="right" >0</td>
    <td class="right" >137,625.6</td>
    <td class="right" >0</td>
  </tr>
  <tr>
    <td class="center" >Dispute Round 20</td>
    <td class="right" ><b>275,251.2</b></td>
    <td class="right" >0</td>
    <td class="right" >0</td>
  </tr>
  </tbody>
 </table>

In this case, the threshold (`275,000` REP) is exceeded in Dispute Round 20. That is, a fork occurs when the dispute succeeds in Round 20.

## When does a fork end?
The period from the start to the end of a fork is referred to as the [forking period]({{glossary_forking_period}}). The forking period ends when either 60 days have passed, or more than 50% of [all theoretical REP]({{glossary_all_theoretical_rep}}) is migrated to one of the [child universes]({{glossary_child_universe}}). Whichever child universe receives the most migrated REP by the end of the forking period becomes the [winning universe]({{glossary_winning_universe}}), the other child universes become the [losing universe]({{glossary_losing_universe}}).

## What happens to the parent universe?
When a fork starts, the [parent universe]({{glossary_parent_universe}}) becomes permanently locked. In the [locked universe]({{glossary_locked_universe}}), no new [markets]({{glossary_market}}) can be created and no markets can go through the [reporting]({{glossary_report}}) process. As a result of this, no markets can be [finalized](glossary_finalized_market). (See [restrictions on use]({{url_restrictions_on_use}}) for details.)

## What happens to the child universes?
As mentioned [above](#when-does-a-fork-end), when the [forking period]({{glossary_forking_period}}) ends, [child universes]({{glossary_child_universe}}) become the [winning universe]({{glossary_winning_universe}}) or the [losing universe]({{glossary_losing_universe}}).

In terms of what you can do, there is no difference between the winning universe and the losing universe. There are no restrictions for either universe. (See [Restrictions on use]({{url_restrictions_on_use}}) for details.)

However, all markets in the [parent universe]({{glossary_parent_universe}}) can only be migrated to the winning universe and the objects attached to the forking market, such as shares, open interest, unfilled orders, are also only migrated to the winning universe. (See [Migration of the objects]({{url_migration_of_the_objects}}) for details.)

Additionally, [REP]({{glossary_rep}}) in the losing universe will lose its value. Because traders will not want to trade in a universe where [reporters]({{glossary_reporter}}) have lied, and [market creators]({{glossary_market_creator}}) will not want to create a market in a universe where there are no traders. In a universe without markets or trading, REP does not provide any dividends to those holding it. However, we never know if the price of REP in the losing universe will be as expected until a [fork]({{glossary_fork}}) actually occurs.
