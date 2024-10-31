// Don't use this please.
$("#content > div.container > table > tbody > tr").each(function (k, row) {
  if(k == 0 || row.children.length != 3) return;
  console.log(row.children[2].innerText + "\t" + row.children[1].innerText);
})
