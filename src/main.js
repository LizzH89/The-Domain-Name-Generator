/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

let pronoun = ["the", "our"]; //este va a ser i
let adj = ["great", "big"]; // este va a ser j
let noun = ["jogger", "racoon"]; // este va a ser k
let puntoalgo = [".com", ".net", ".us", ".io"]; //este va a ser el del punto algo l

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < puntoalgo.length; l++) {
        document.write(pronoun[i] + adj[j] + noun[k] + puntoalgo[l] + "<br>");
      }
    }
    //document.write("<br>");
  }
}
