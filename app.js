
//import dino.JSON

const dinos = [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ];



    // Create Dino Constructor

    function Dino (species, weight, height, diet, where, when, fact){
      this.species = species;
      this.weight = weight;
      this.heigt = height;
      this.diet = diet;
      this.where = where;
      this.when = when;
      this.fact = fact
    };


    // Create Dino Objects
    let triceratops = new Dino (dinos[0].species, dinos[0].weight, dinos[0].height, dinos[0].diet, dinos[0].where, dinos[0].when, dinos[0].fact);
    let tyrannosaurus = new Dino (dinos[1].species, dinos[1].weight, dinos[1].height, dinos[1].diet, dinos[1].where, dinos[1].when, dinos[1].fact);
    let anklyosaurus = new Dino (dinos[2].species, dinos[2].weight, dinos[2].height, dinos[2].diet, dinos[2].where, dinos[2].when, dinos[2].fact);
    let brachiosaurus = new Dino (dinos[3].species, dinos[3].weight, dinos[3].height, dinos[3].diet, dinos[3].where, dinos[3].when, dinos[3].fact);
    let stegosaurus = new Dino (dinos[4].species, dinos[4].weight, dinos[4].height, dinos[4].diet, dinos[4].where, dinos[4].when, dinos[4].fact);
    let elasmosaurus = new Dino (dinos[5].species, dinos[5].weight, dinos[5].height, dinos[5].diet, dinos[5].where, dinos[5].when, dinos[5].fact);
    let pteranodon = new Dino (dinos[6].species, dinos[6].weight, dinos[6].height, dinos[6].diet, dinos[6].where, dinos[6].when, dinos[6].fact);
    let pigeon = new Dino (dinos[7].species, dinos[7].weight, dinos[7].height, dinos[7].diet, dinos[7].where, dinos[7].when, dinos[7].fact);

    // Create Human Object

    function hallo() {

      let humanName = document.getElementById('name').value;
      document.getElementById('grid').innerHTML = humanName;
    }


    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array

        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
