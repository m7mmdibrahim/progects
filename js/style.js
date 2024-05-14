
var quoteNumber = 0;
var presentQuote = "";
var presentAuthor = "";
var quoteList = [{number: 1, quote: "So many books, so little time.'", author: " Frank Zappa"}, {number: 2, quote: "'When the going gets weird, the weird turn pro'", author: "-Hunter S. Thompson"}, {number: 3, quote: "'Man has to awaken to wonder - and so perhaps do peoples.  Science is a way of sending him to sleep again.'", author: "-Ludwig Wittgenstein"}, {number: 4, quote: "'The beautiful thing about poker is that everybody thinks they can play'", author: "-Chris Moneymaker"}, {number: 5, quote: "'There's a lotta things about me you don't know anything about, Dottie. Things you wouldn't understand. Things you couldn't understand. Things you shouldn't understand'", author: "-Pee-Wee Herman"}];

function randomNumber () {
  quoteNumber = Math.floor(Math.random() * quoteList.length + 1);
  
  for (i = 0; i < quoteList.length; i ++) {
    if (quoteNumber === quoteList[i].number) {
      document.getElementById("present-quote").innerHTML = quoteList[i].quote;
      document.getElementById("present-author").innerHTML = quoteList[i].author;
    }
  }
};



