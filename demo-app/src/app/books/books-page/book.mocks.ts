export const books = [
  {
    id: 'clean-code',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293.jpg",
    opinion: 'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way. Noted software expert Robert C. Martin, presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship. Martin, who has helped bring agile principles from a practitioner’s point of view to tens of thousands of programmers, has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code “on the fly” into a book that will instill within you the values of software craftsman, and make you a better programmer―but only if you work at it.  What kind of work will you be doing? You’ll be reading code―lots of code. And you will be challenged to think about what’s right about that code, and what’s wrong with it. More importantly you will be challenged to reassess your professional values and your commitment to your craft.',
    author: 'Robert C. Martin',
  },
  {
    id: 'aprendiendo-git',
    title: 'Git Pocket Guide: A Working Introduction',
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.au6qWwpFuDNJbe40P_s6oAHaJ4%26pid%3DApi&f=1&ipt=4a2d4f03e5bb7d61fb21d0c74df50bd89a49e066dc189701f796b8ee4f3e0c8f&ipo=images",
    opinion: 'This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.',
    author: 'Richard Silverman'
  },
  {
    id: 'the-clean-coder',
    title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347470803i/10284614.jpg",
    opinion: 'Programmers who endure and succeed amidst swirling uncertainty and nonstop pressure share a common attribute: They care deeply about the practice of creating software. They treat it as a craft. They are professionals.',
    author: 'Robert C. Martin',
  },
  {
    id: 'javascript-the-good-parts',
    title: 'JavaScript: The Good Parts',
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328834793i/2998152.jpg',
    opinion: 'Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.',
    author: 'Douglas Crockford',
  },
  {
    id: 'eloquent-javascript',
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1308260856i/8910666.jpg',
    opinion: 'avaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
    author: 'Marijn Haverbeke',
  }
].map(book => ({...book, viewTransitionName: `view-transition-name: book-${book.id}`}));
