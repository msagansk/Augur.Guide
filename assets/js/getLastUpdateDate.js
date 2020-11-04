---
---

const url = "{{ site.github.api_url }}/repos/{{ site.github.owner_name }}/{{ site.github.repository_name }}/commits?path={{ site.collections_dir }}%2F{{ page_path }}&page=1&per_page=1"
let request = new XMLHttpRequest();

request.open('GET', url, true);
request.responseType = 'json';

request.onload = function () {
  let utcDatetime = this.response[0].commit.committer.date;
  let localDatetime = dateFormat.format(new Date(utcDatetime), "yyyy-MM-dd hh:mm:ss");
  document.getElementById("last_update_datetime").innerText = "Last update: " + localDatetime;

};
request.send();

dateFormat = {
  _fmt : {
    "yyyy": function(date) { return date.getFullYear() + ''; },
    "MM": function(date) { return ('0' + (date.getMonth() + 1)).slice(-2); },
    "dd": function(date) { return ('0' + date.getDate()).slice(-2); },
    "hh": function(date) { return ('0' + date.getHours()).slice(-2); },
    "mm": function(date) { return ('0' + date.getMinutes()).slice(-2); },
    "ss": function(date) { return ('0' + date.getSeconds()).slice(-2); }
  },
  _priority : ["yyyy", "MM", "dd", "hh", "mm", "ss"],
  format: function(date, format){
    return this._priority.reduce((res, fmt) => res.replace(fmt, this._fmt[fmt](date)), format)
  }
};