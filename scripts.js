/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const characters = [
  {
    name: "Charlie Brown",
    image: "https://static.wikia.nocookie.net/peanuts/images/b/b6/Charlie_Brown_smiling.png",
    description: "Lovable underdog who never gives up.",
    fun_fact: "Charlie Brown's dad is a barber just like Charles Schulz's father was.",
    debut: "October 2, 1950",
    gender: "male",
    pet: false,
    fav: false,
    favorites: {
      food: "buttered toast",
      color: "yellow",
      activity: "trying to kick a football",
    },
  },
  {
    name: "Snoopy",
    image: "https://static.wikia.nocookie.net/peanuts/images/5/5e/Snoopy-60s.png",
    description: "Imaginative beagle with many personas.",
    fun_fact: "Snoopy reads 'War and Peace' at the rate of one word a day.",
    debut: "October 4, 1950",
    gender: "male",
    pet: true,
    fav: false,
    favorites: {
      food: "dog food",
      color: "red",
      activity: "flying his doghouse",
    },
  },
  {
    name: "Woodstock",
    image: "https://static.wikia.nocookie.net/peanuts/images/b/b3/Woodstock-1.png",
    description: "Tiny yellow bird and Snoopy's best friend.",
    fun_fact: "Woodstock is Snoopy’s second-in-command when they lead Beagle Scout hikes.",
    debut: "April 4, 1967",
    gender: "male",
    pet: true,
    fav: false,
    favorites: {
      food: "birdseed",
      color: "yellow",
      activity: "chirping and flying around Snoopy",
    },
  },
  {
    name: "Schroeder",
    image: "https://static.wikia.nocookie.net/peanuts/images/b/b7/Schroeder_Piano.png",
    description: "Piano prodigy and Beethoven fanatic.",
    fun_fact: "Schroeder is a fan of all things Beethoven. He even considers the composer’s birthday a national holiday.",
    debut: "May 30, 1951",
    gender: "male",
    pet: false,
    fav: false,
    favorites: {
      food: "peanut butter sandwiches",
      color: "purple",
      activity: "playing piano",
    },
  },
  {
    name: "Lucy van Pelt",
    image: "https://static.wikia.nocookie.net/peanuts/images/e/e9/Lucy_van_Pelt.png",
    description: "Bossy, opinionated, and a psychiatrist.",
    fun_fact: "Lucy charges 5 cents for psychiatric advice.",
    debut: "March 3, 1952",
    gender: "female",
    pet: false,
    fav: false,
    favorites: {
      food: "lemon drops",
      color: "blue",
      activity: "giving unsolicited advice",
    },
  },
  {
    name: "Linus van Pelt",
    image: "https://static.wikia.nocookie.net/peanuts/images/7/79/LinusBlanket.gif",
    description: "Philosopher who loves his blanket.",
    fun_fact: "Linus is the original believer in the Great Pumpkin.",
    debut: "September 19, 1952",
    gender: "male",
    pet: false,
    fav: false,
    favorites: {
      food: "apple pie",
      color: "green",
      activity: "clutching his blanket",
    },
  },
  {
    name: "Sally Brown",
    image: "https://static.wikia.nocookie.net/peanuts/images/8/88/Sally_Brown.png",
    description: "Charlie Brown’s little sister, sweet and sassy.",
    fun_fact: "For 6 months, Sally experienced amblyopia ('lazy eye') and wore an eye patch.",
    debut: "August 23, 1959",
    gender: "female",
    pet: false,
    fav: false,
    favorites: {
      food: "mac and cheese",
      color: "pink",
      activity: "daydreaming about Linus",
    },
  },
  {
    name: "Peppermint Patty",
    image: "https://static.wikia.nocookie.net/peanuts/images/a/a0/Peppermint_Patty.png",
    description: "Tomboy with confidence and school struggles.",
    fun_fact: "She constantly calls Charlie Brown 'Chuck'.",
    debut: "August 22, 1966",
    gender: "female",
    pet: false,
    fav: false,
    favorites: {
      food: "chocolate chip cookies",
      color: "teal",
      activity: "playing baseball",
    },
  },
  {
    name: "Rerun van Pelt",
    image: "https://static.wikia.nocookie.net/peanuts/images/9/94/Rerun-bw.jpg",
    description: "Youngest sibling with wise thoughts.",
    fun_fact: "Rerun isn’t quite sure that Spike is actually a dog.",
    debut: "March 26, 1973",
    gender: "male",
    pet: false,
    fav: false,
    favorites: {
      food: "grilled cheese",
      color: "orange",
      activity: "drawing and asking deep questions",
    },
  },
  {
    name: "Franklin",
    image: "https://static.wikia.nocookie.net/peanuts/images/1/13/Franklin-rmbg.png",
    description: "Smart, kind friend of Charlie Brown.",
    fun_fact: "Franklin made his Peanuts debut when he helped Charlie Brown rebuild his crooked sandcastle.",
    debut: "July 31, 1968",
    gender: "male",
    pet: false,
    fav: false,
    favorites: {
      food: "spaghetti",
      color: "navy blue",
      activity: "talking about history",
    },
  },
  {
    name: "Marcie",
    image: "https://static.wikia.nocookie.net/peanuts/images/6/6f/Marcie-colored-2.png",
    description: "Smart and studious friend of Peppermint Patty.",
    fun_fact: "Though Marcie first appeared by name in 1971, a girl named Clara who bears a striking resemblance attended Camp Kamp with Peppermint Patty in 1968.",
    debut: "July 20, 1971",
    gender: "female",
    pet: false,
    fav: false,
    favorites: {
      food: "salad",
      color: "lavender",
      activity: "reading books",
    },
  },
  {
    name: "Spike",
    image: "https://static.wikia.nocookie.net/peanuts/images/9/9c/Spike_-_Main.png",
    description: "Snoopy's brother who lives in Needles, California.",
    fun_fact: "His closest friends are the cacti and tumbleweeds. Spike is thoughtful, and at times, melancholic.",
    debut: "August 13, 1975",
    gender: "male",
    pet: false,
    fav: false,
    favorites: {
      food: "cactus juice",
      color: "brown",
      activity: "writing letters to Snoopy",
    },
  }
];

function showCards(filteredCharacters = characters) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  filteredCharacters.forEach((character) => {
    const nextCard = templateCard.cloneNode(true);
    nextCard.style.display = "block";

    const cardHeader = nextCard.querySelector("h2");
    const cardImage = nextCard.querySelector("img");
    const cardDesc = nextCard.querySelector(".description");
    const cardFunFact = nextCard.querySelector(".fun-fact");

    cardHeader.textContent = character.name;
    cardImage.src = character.image;
    cardImage.alt = character.name;
    cardDesc.textContent = character.description;
    cardFunFact.textContent = character.fun_fact;

    // Add favorite button
    const favBtn = document.createElement("button");
    favBtn.textContent = character.fav ? "★" : "☆";
    favBtn.classList.add("fav-button");
    favBtn.addEventListener("click", () => {
      character.fav = !character.fav;
      showCards(filteredCharacters);
    });

    nextCard.appendChild(favBtn);
    cardContainer.appendChild(nextCard);
  });
}

function setupFavoritesToggle() {
  const toggle = document.getElementById("toggle-favs");
  const searchBar = document.getElementById("search-bar");

  toggle.addEventListener("change", () => {
    updateFilteredCards();
  });

  searchBar.addEventListener("input", () => {
    updateFilteredCards();
  });
}

function updateFilteredCards() {
  const searchQuery = document.getElementById("search-bar").value.toLowerCase();
  const showOnlyFavs = document.getElementById("toggle-favs").checked;

  let filtered = characters.filter((char) =>
    char.name.toLowerCase().includes(searchQuery)
  );

  if (showOnlyFavs) {
    filtered = filtered.filter((char) => char.fav); 
  }

  showCards(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Document loaded");
  showCards();
  setupFavoritesToggle();
});

function setupSearch() {
  const searchBar = document.getElementById("search-bar");

  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    const filtered = characters.filter((char) =>
      char.name.toLowerCase().includes(query)
    );
    showCards(filtered);
  });
}

function removeLastCard() {
  // remove last character and refresh the cards
  characters.pop();
  showCards();
}

const comics = [
  "https://featureassets.gocomics.com/assets/a89c93e0f6ce013d9a79005056a9545d",
  "https://featureassets.gocomics.com/assets/ba30f050f87d013014e9001dd8b71c47",
  "https://featureassets.gocomics.com/assets/1a1d9cc0f88b013014fa001dd8b71c47",
  "https://featureassets.gocomics.com/assets/f36af830fb9b01301760001dd8b71c47",
  "https://featureassets.gocomics.com/assets/eab8580009f40134633d005056a9545d",
  "https://featureassets.gocomics.com/assets/8d6e24b0e79b013b007b005056a9545d",
  "https://featureassets.gocomics.com/assets/a5cb21c0f6ce013d9a79005056a9545d?optimizer=image&width=1200&quality=85",
  "https://featureassets.gocomics.com/assets/b92bcef0d5e5013d9300005056a9545d?optimizer=image&width=1200&quality=85",
  "https://featureassets.gocomics.com/assets/ed852c50f137013d9954005056a9545d?optimizer=image&width=1200&quality=85",
  "https://featureassets.gocomics.com/assets/835cf5c0f138013d9954005056a9545d?optimizer=image&width=1200&quality=85",
  "https://featureassets.gocomics.com/assets/ea688540f137013d9954005056a9545d?optimizer=image&width=1200&quality=85",
  "https://featureassets.gocomics.com/assets/7f3dcba0f138013d9954005056a9545d?optimizer=image&width=1200&quality=85",
  "https://featureassets.gocomics.com/assets/e4d64070f137013d9954005056a9545d?optimizer=image&width=1200&quality=85"
];

function showRandComic() {
  const randIndex = Math.floor(Math.random() * comics.length);
  const comicImage = document.getElementById("comic-image");
  comicImage.src = comics[randIndex];
  document.getElementById("comic-popup").style.display = "flex";
}

function hideComicPopup(event) {
  if (
    event.target.classList.contains("popup-overlay") ||
    event.target.classList.contains("close-btn")
  ) {
    document.getElementById("comic-popup").style.display = "none";
  }
}

function showQuotePopup() {
  
  const quotes = [
    "In the book of life, the answers aren't in the back.",
    "Happiness is a warm puppy.",
    "All you need is love. But a little chocolate now and then doesn't hurt.",
    "I think I've discovered the secret of life – you just hang around until you get used to it.",
    "Just remember, when you're over the hill, you begin to pick up speed.",
    "Sometimes I lie awake at night and think, and then I just lay there and let it happen.",
    "It’s not the size of the dog in the fight, it’s the size of the fight in the dog.",
    "I love mankind, it’s people I can’t stand.",
    "Life is like a 10-speed bicycle. Most of us have gears we never use.",
    "Spike, Snoopy's brother, is a beautiful example of images evoked by a location: we know he lives with the coyotes outside Needles, and that's about all we know.",
    "Charlie Brown must be the one who suffers, because he’s a caricature of the average person.",
    "I have a new philosophy. I’m only going to dread one day at a time.",
    "I never worry about diets. The only carrots that interest me are the number you get in a diamond.",
    "I don't need to be a millionaire. I just need to be rich.",
    "I think I’m going to have to get a new dog. This one is too old.",
    "I’m not a bad dog. I’m just a little misunderstood.",
    "Most of us are much more acquainted with losing than winning. Winning is great, but it isn’t funny.",
    "Woodstock knows that he is very small and inconsequential indeed. It’s a problem we all have. The universe boggles us…",
    "I like the fact that when he’s in real trouble, he can retreat into a fantasy."
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById("quote-text").textContent = randomQuote;
  document.getElementById("quote-popup").style.display = "block";
}

function hideQuotePopup(event) {
  if (
    event.target.classList.contains("popup-overlay") ||
    event.target.classList.contains("close-quote-btn")
  ) {
    document.getElementById("quote-popup").style.display = "none";
    document.querySelector(".popup-overlay").style.display = "none";
  }
}

