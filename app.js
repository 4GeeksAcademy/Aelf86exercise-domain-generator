let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domainGenerator = function(pronoun, adj, noun){
  let website = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++){
      for(let k = 0; k < noun.length; k++){
        website.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  console.log(website);
};
domainGenerator(pronoun, adj, noun);