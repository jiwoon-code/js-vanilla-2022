const quotes = [
  {
    quotes: "One day, my father, he told me, 'Son, don't let it slip away'",
    author: "Avicii-The Nights",
  },
  {
    quotes:
      "When you get older your wild heart will live for younger days Think of me if ever youre afraid",
    author: "Avicii=The Nights",
  },
  {
    quotes:
      "One day, you'll leave this world behind So live a life you will remember",
    author: "Avicii-The Nights",
  },
  {
    quotes: "These are the nights that never die, My father told me",
    author: "Avicii-The Nights",
  },
  {
    quotes: "It's such a night, such a beautiful night",
    author: "Avicii-Heaven",
  },
  {
    quotes: "I got to learn how to love without you",
    author: "Avicii-Without you",
  },
  {
    quotes: "I might hate myself tomorrow But I'm on my way tonight",
    author: "Avicii-Lonely Together",
  },
  {
    quotes: "There's nothing in this world I wouldn't do",
    author: "Avicii-Hey Brother",
  },
  {
    quotes: "Life's a game made for everyone And love is a prize",
    author: "Avicii-Wake Me Up",
  },
  {
    quotes:
      "And if there's love in this life, there's no obstacle That can't be defeated",
    author: "Avicii-Waiting for Love",
  },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
