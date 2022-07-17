// let quote = document.getElementById("myDiv");

let quotes = [
  "Don't Think, just do!",
  "NO PAIN NO GAIN",
  "IF NOT NOW THEN WHEN?",
  "your future self is proud of you for not giving up ",
  "The next few months will go by whether you workout or not!",
  "NOTHING WILL WORK UNLESS YOU DO",
  "A year from now you may wish you had started today",
  "Most people fail, not because of lack of desire, but, because of lack of commitment.",
  "Look in the mirror. That’s your competition.",
  "Tough times don’t last. Tough people do",
  "The only place where success comes before work is in the dictionary",
];

let random_quote_div = document.getElementById("random-quote");

var randomQuote = Math.floor(Math.random() * quotes.length);

random_quote_div.innerHTML += `<span> ${quotes[randomQuote]} </span>`;

// function rand_quotes(quotes) {
//   return quotes[Math.floor(Math.random() * quotes.length)];
// }

// myDiv.innerHTML += `<span> #${quote}: ${quotes[rand_quotes]} </span>`;

// console.log(rand_quotes(quotes));
// document.getElementById("quotes");

// document.getElementById("random").onclick = rand_quotes;
// var el = document.getElementById("random");
// if (el.addEventListener) el.addEventListener("click", rand_quotes, false);
// else if (el.attachEvent) el.attachEvent("onclick", rand_quotes);
