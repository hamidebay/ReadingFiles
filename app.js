/*
1. App.js olusturulur.
2. okunacak olan textfile bulunur (ornekDosya.txt)
3. Dosya okutulur
*/

//burda textfile okutulur
const fs = require("fs");
fs.readFile("./ornekDosya.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
