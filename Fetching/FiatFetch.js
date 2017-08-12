// Don't use this please.
$("#content > div.container > table > tbody > tr").each(function (k, row) {
  var childs = row.children;
  if(k == 0) return;
  if(childs.length != 3) return;
  console.log(childs[2].innerText + "\t" + childs[1].innerText);
})
