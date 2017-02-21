$(document).ready(function(){


var john_wick = {
  "Title": "John Wick",
  "Year": "2014",
  "Rated": "R",
  "Released": "24 Oct 2014",
  "Runtime": "101 min",
  "Genre": "Action, Crime, Thriller",
  "Director": "Chad Stahelski, David Leitch",
  "Writer": "Derek Kolstad",
  "Actors": "Keanu Reeves, Michael Nyqvist, Alfie Allen, Willem Dafoe",
  "Plot": "An ex-hitman comes out of retirement to track down the gangsters that took everything from him.",
  "Language": "English, Russian, Hungarian",
  "Country": "USA",
  "Awards": "4 wins & 6 nominations.",
  "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
  "Metascore": "68",
  "imdbRating": "7.2",
  "imdbVotes": "275,833",
  "imdbID": "tt2911666",
  "Type": "movie",
  "Response": "True"
}


var key = Object.keys(john_wick);

console.log(key);

key.splice(key.indexOf("Poster"), 1)

console.log(key);



var table = $("<table>");

table.addClass("striped");

var thead = $("<thead>");

var tr = $("<tr>");

var th_key = $("<th>");

var th_info = $("<th>");

th_key.text("key");

th_info.text("info");

table.appendTo("#info")

thead.appendTo(table);

tr.appendTo(thead);

th_key.appendTo(tr)
th_info.appendTo(tr)


var tbody = $("<tbody>");

tbody.appendTo(table);

for (let i = 0; i < key.length; i++) {
  
  let tr = $("<tr>");

  tr.appendTo(tbody);

  let td_key = $("<td>");

  td_key.text(key[i])

  td_key.appendTo(tr);

  let td_field = $("<td>");

  td_field.text(john_wick[key[i]]);

  td_field.appendTo(tr);

}


var src = john_wick.Poster;

console.log(src);

var img = $("<img>");

img.attr({
  "src" :  src
});

img.appendTo("#poster");

/*
<table>
  <thead>
    <tr>
        <th data-field="id">Name</th>
        <th data-field="name">Item Name</th>
        <th data-field="price">Item Price</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Alvin</td>
      <td>Eclair</td>
      <td>$0.87</td>
    </tr>
    <tr>
      <td>Alan</td>
      <td>Jellybean</td>
      <td>$3.76</td>
    </tr>
    <tr>
      <td>Jonathan</td>
      <td>Lollipop</td>
      <td>$7.00</td>
    </tr>
  </tbody>
</table>
*/




});
