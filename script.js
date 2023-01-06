let button = document.querySelector("#new-quote");
let person = document.querySelector(".person");
let quote = document.querySelector(".qoute");

const quotes = [
  {
    quote: `"The more I study religions the more I am convinced that man never worshipped anything but himself."`,
    person: `Sir Richard Francis Burton `,
  },
  {
    quote: `"Know most of the rooms of thy native country before thou goest over the threshold thereof."`,
    person: `Thomas Fuller `,
  },
  {
    quote: `"It is impossible to experience one's death objectively and still carry a tune."`,
    person: `Woody Allen `,
  },
  {
    quote: `"And this our life, exempt from public haunt,
    Finds tongues in trees, books in running brooks,
    Sermons in stones, and good in everything."`,
    person: `William Shakespeare`,
  },
  {
    quote: `"What we obtain too cheap, we esteem too lightly."`,
    person: ` Thomas Paine`,
  },
  {
    quote: `"Trouble is part of your life, and if you don't share it, you don't give the person who loves you a chance to love you enough."`,
    person: `Dinah Shore  `,
  },
  {
    quote: `"Use what you have to run toward your best - that's how I now live my life."`,
    person: ` Oprah Winfrey`,
  },
  {
    quote: `"There is no greater joy nor greater reward than to make a fundamental difference in someone's life."`,
    person: `Sister Mary Rose McGeady `,
  },
  {
    quote: `"It is never too late to give up our prejudices."`,
    person: ` Henry David Thoreau`,
  },
  {
    quote: `"It is a far, far better thing to have a firm anchor in nonsense than to put out on the troubled sea of thought."`,
    person: ` John Kenneth Galbraith`,
  },
];

button.addEventListener("click", randomQuote);

function randomQuote() {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
}
