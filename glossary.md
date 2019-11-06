---
title: Glossary
---
# Glossary

A defined list of terms specific to Augur that are deep-linkable.

<table>
<thead><tr><th>Term</th><th>Description</th></tr></thead>
<tbody>
{% assign gs = site.data.glossary | sort:[0] %}
{% for kv in gs %}
<tr> 
  <td valign="top" width="300">
    <a href="#{{ kv[0] }}">{{ kv[0] }}</a>
    <a name="{{ kv[0] }}"></a> 
  </td>
  <td> {{ kv[1] }} </td>
</tr>
{% endfor %}
</tbody>
</table>
