---
---
{% assign current_collection = site.collections | where: "label", page.collection | first %}
# Welcome to Augur.Guide for {{ current_collection.version }}

Augur is a censorship resistant [prediction market](https://en.wikipedia.org/wiki/Prediction_market) protocol with incredible potential. However, there is currently a steep learning curve when trying to use it. Information on how it works is scattered in many places and usually very technical. 

Augur.Guide’s purpose is to aggregate all of this information and provide it to you in an easily digestible format. Improvements to the site from the community are welcome, as [Augur.Guide is hosted on GitHub pages](https://github.com/msagansk/Augur.Guide).

At a high level, there are four major roles you can play in the Augur ecosystem. As a user you can create markets, trade on markets, and report/dispute markets. You can choose to participate in any of those roles that interest you, and there is a separate section on this site for each of these roles to learn about. If you’d like to learn a little more about the basics of Augur, check out our [Getting Started]({{ "/" | absolute_url }}/{{page.collection}}/1-getting-started.html) page. Go ahead and explore whatever you'd like, and good luck!

![Augur UI]({{ "/" | absolute_url }}/assets/images/{{page.collection}}/augur-ui.png )
