---
---
main();

async function main(){

  const Url = "{{ site.github.api_url }}/repos/{{ site.github.owner_name }}/{{ site.github.repository_name }}/commits?path=" + getFilepathOnGithub();

  let arrCommitInfo = await getJsonFromApi(Url)
  let utcDatetime = arrCommitInfo[0].commit.committer.date;

  let dateFormat = {
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
  let localDatetime = dateFormat.format(new Date(utcDatetime), "yyyy-MM-dd hh:mm:ss");
  document.getElementById("last_update_datetime").innerText = "Last update: " + localDatetime;

}
function getFilepathOnGithub(){
  const PagePath = document.currentScript.getAttribute('page_path');
  const GlossaryMdFileName = "7-glossary.md"
  let filePathOnGithub = "";
  if (PagePath.search(GlossaryMdFileName) > 0){
    filePathOnGithub = "_data/" + PagePath.slice(1).replace(GlossaryMdFileName, "glossary.yml");
  } else {
    filePathOnGithub = "{{ site.collections_dir }}/" + PagePath;
  }
  return filePathOnGithub.replace("/", "%2F");
}

async function getJsonFromApi(url) {
  let response = await fetch(url);
  return response.json()
}
