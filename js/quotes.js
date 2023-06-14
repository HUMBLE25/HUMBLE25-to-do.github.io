const quotes = [
    {
        quote: "Rivers know this: there is no hurry. We shall get there someday.",
        author: "A.A. Milne"
    },
    {
        quote: "Small is not just a stepping-stone. Small is a great destination itself.",
        author: "Jason Fried"
    },
    {
        quote: "He that can have patience can have what he will.",
        author: "Benjamin Franklin"
    },
    {
        quote: "The only one who can tell you “you can’t win” is you and you don’t have to listen.",
        author: "Jessica Ennis"
    },
    {
        quote: "Set your goals high, and don’t stop till you get there.",
        author: "Bo Jackson"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quote: "I have never let my schooling interfere with my education.",
        author: "Mark Twain"
    },
    {
        quote: "If you can’t yet do great things, do small things in a great way.",
        author: "Napoleon Hill"
    },
    {
        quote: "The greater the difficulty, the more the glory in surmounting it.",
        author: "Epicurus"
    },
    {
        quote: "We Are All In The Gutter, But Some Of Us Are Looking At The Stars.",
        author: "Oscar Wilde"
    },
    {
        quote: "Life is a daring adventure or it is nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "Success isn't determined by how many times you win, but by how you play the week after you lose.",
        author: "Pele"
    },
    {
        quote: "Ignore your mistakes. The number one thing to worry about is: Am I doing what I'm good at?",
        author: "Max Levchin"
    },
];

const quote = document.querySelector("#quote span:first-child");

const author = document.querySelector("#quote span:last-child");

const randomIndex = Math.trunc(Math.random() * quotes.length);

const quotesObj = quotes[randomIndex];

quote.innerText = quotesObj.quote;

author.innerText = quotesObj.author;