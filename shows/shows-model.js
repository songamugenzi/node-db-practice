const db = require("../data/db-config.js");

module.exports = {
  findShow,
  addShow,
  findGenre,
  addGenre,
  findCharacter,
  addCharacter,
};

function findShow() {
  return db("shows");
}

function addShow(showData) {
  return db("shows")
    .insert(showData)
    .then(() => {
      return showData;
    });
}

function findGenre() {
  return db("genre");
}

function addGenre(genreData) {
  return db("genre")
    .insert(genreData)
    .then(() => {
      return genreData;
    });
}

function findCharacter() {
  return db("character");
}

function addCharacter(characterData) {
  return db("character")
    .insert(characterData)
    .then(() => {
      return characterData;
    });
}
