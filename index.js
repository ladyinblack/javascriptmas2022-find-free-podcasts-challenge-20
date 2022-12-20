// Import stylesheets
import './style.css';
import podcasts from './data.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Find Free Podcasts</h1>`;

/**
 * Using map() and filter()
 *
 * We have a list of podcasts and need the ability to filter by only podcasts which are free.
 *
 * Write a function that takes in the podcast data and returns a new array of only those podcasts which are free.
 *
 * Additionally, your new array should return only objects containing only the podcast title, rating, and whether or not it is paid.
 *
 * Expected output:
 * [
 *      {title: "Scrimba Podcast", rating: 10, paid: false},
 *      {title: "Something about Witches", rating: 8, paid: false},
 *      {title: "Coding Corner", rating: 9, paid: false}
 * ]
 */
function getFreePodcasts(data) {
  return data
    .filter((list) => !list.paid)
    .map((list) => ({
      title: list.title,
      rating: list.rating,
      paid: list.paid,
    }));
}

console.log(getFreePodcasts(podcasts));
