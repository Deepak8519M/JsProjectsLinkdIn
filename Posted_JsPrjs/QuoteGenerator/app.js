const quotesArray = [
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
  {
    quote:
      "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: It goes on.",
    author: "Robert Frost",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote:
      "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
    author: "William Allen White",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "You can't go back and change the beginning, but you can start where you are and change the ending.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "The only way to achieve the impossible is to believe it is possible.",
    author: "Charles Kingsleigh",
  },
  { quote: "If you can dream it, you can do it.", author: "Walt Disney" },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Unknown",
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Everything has beauty, but not everyone sees it.",
    author: "Confucius",
  },
  {
    quote:
      "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    author: "Jordan Belfort",
  },
  { quote: "If you want to be happy, be.", author: "Leo Tolstoy" },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    quote:
      "Good things come to those who wait, but better things come to those who go out and get them.",
    author: "Unknown",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "Everything has beauty, but not everyone sees it.",
    author: "Confucius",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "Opportunities don't happen, you create them.",
    author: "Chris Grosser",
  },
  { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
  {
    quote:
      "If you can’t explain it simply, you don’t understand it well enough.",
    author: "Albert Einstein",
  },
];

const voiceDiv = document.querySelector(".voice-div");
const newQuote = document.getElementById("newQuote");

newQuote.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 50);

  const bq = document.getElementById("bq");
  const author = document.getElementById("author");

  bq.textContent = quotesArray[random].quote;
  author.textContent = quotesArray[random].author;
});

const speech = new SpeechSynthesisUtterance();

voiceDiv.addEventListener("click", () => {
  let voice = bq.textContent;

  speech.text = voice;
  window.speechSynthesis.speak(speech);
});
