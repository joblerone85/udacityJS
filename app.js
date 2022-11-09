//import dino.JSON
// var json = JSON.parse(fs.readFileSync('./dino.json').toString());

var dinos = [
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
      this.height = height;
      this.diet = diet;
      this.where = where;
      this.when = when;
      this.fact = fact
    };


    // Create Dino Objects
    var triceratops = new Dino (dinos[0].species, dinos[0].weight, dinos[0].height, dinos[0].diet, dinos[0].where, dinos[0].when, dinos[0].fact);
    var tyrannosaurus = new Dino (dinos[1].species, dinos[1].weight, dinos[1].height, dinos[1].diet, dinos[1].where, dinos[1].when, dinos[1].fact);
    var anklyosaurus = new Dino (dinos[2].species, dinos[2].weight, dinos[2].height, dinos[2].diet, dinos[2].where, dinos[2].when, dinos[2].fact);
    var brachiosaurus = new Dino (dinos[3].species, dinos[3].weight, dinos[3].height, dinos[3].diet, dinos[3].where, dinos[3].when, dinos[3].fact);
    var stegosaurus = new Dino (dinos[4].species, dinos[4].weight, dinos[4].height, dinos[4].diet, dinos[4].where, dinos[4].when, dinos[4].fact);
    var elasmosaurus = new Dino (dinos[5].species, dinos[5].weight, dinos[5].height, dinos[5].diet, dinos[5].where, dinos[5].when, dinos[5].fact);
    var pteranodon = new Dino (dinos[6].species, dinos[6].weight, dinos[6].height, dinos[6].diet, dinos[6].where, dinos[6].when, dinos[6].fact);
    var pigeon = new Dino (dinos[7].species, dinos[7].weight, dinos[7].height, dinos[7].diet, dinos[7].where, dinos[7].when, dinos[7].fact);

    // Create Human Object
    var human = {
      humanName: 'not definded',
      humanHeightFeet: 0,
      humanHeightInches: 0,
      humanWeight: 0,
      humanDiet: 'not defined',
      weightComparison: function(dinoname,dinoweight) {
        var rueckgabe = 'The Dinosaur \'' + dinoname + '\' weights ' + dinoweight + ' lbs, and ' + this.humanName + ' weights ' + this.humanWeight + ' lbs. ';
        if (dinoweight>this.humanWeight) {
          rueckgabe += dinoname + ' is ' + (dinoweight-this.humanWeight) + ' lbs heavier than ' + this.humanName + '.';
        } else if (dinoweight<this.humanWeight) {
          rueckgabe += dinoname + ' is ' + (this.humanWeight-dinoweight) + ' lbs lighter than ' + this.humanName + '.';
        } else {
          rueckgabe += dinoname + ' and ' + this.humanName + ' have the same weight.';
        }
        return rueckgabe;
      },
      heightComparison: function(dinoname,dinoheight) {
        var humanInInches = this.humanHeightInches * 1 + this.humanHeightFeet * 12;
        var rueckgabe = 'The Dinosaur \'' + dinoname + '\' is ' + dinoheight + ' inches tall, and ' + this.humanName + ' is ' + humanInInches + ' inches tall. ';
        if (dinoheight>humanInInches) {
          rueckgabe += dinoname + ' is ' + Math.round(100*dinoheight/humanInInches)/100 + ' times as big as ' + this.humanName + '.';
        } else if (dinoheight<humanInInches) {
          rueckgabe += dinoname + ' is ' + Math.round(100*dinoheight/humanInInches)/100 + ' times as big as ' + this.humanName + '.';
        } else {
          rueckgabe += dinoname + ' and ' + this.humanName + ' have the same height.';
        }
        return rueckgabe;
      },
      dietComparison: function(dinoname,dinodiet) {
        var rueckgabe = 'The Dinosaur \'' + dinoname + '\' is ' + dinodiet + ' and ' + this.humanName + ' is ' + this.humanDiet + '. ';
        if (dinodiet.toLowerCase() == this.humanDiet.toLowerCase(this.humanDiet)) {
          rueckgabe += dinoname + ' and ' + this.humanName + ' share the same diet.';
        } else {
          rueckgabe += dinoname + ' and ' + this.humanName + ' don\'t share the same diet.';
        }
        return rueckgabe;
      }
    };

    // Use IIFE to get human data from form

    var button = document.getElementById('btn');

    button.addEventListener('click', (function() {
      return function() {
        human.humanName = document.getElementById('name').value;
        human.humanHeightFeet = document.getElementById('feet').value;
        human.humanHeightInches = document.getElementById('inches').value;
        human.humanWeight = document.getElementById('weight').value;
        human.humanDiet = document.getElementById('diet').value;
        // document.getElementById('dino-compare').style.display = "none";
        // alert(human.weightComparison(triceratops.species,triceratops.weight));
        document.getElementById('grid').insertAdjacentHTML("beforeend", '<p>' + human.weightComparison(triceratops.species,triceratops.weight) + '</p>');
        document.getElementById('grid').insertAdjacentHTML("beforeend", '<p>' + human.heightComparison(triceratops.species,triceratops.height) + '</p>');
        document.getElementById('grid').insertAdjacentHTML("beforeend", '<p>' + human.dietComparison(triceratops.species,triceratops.diet) + '</p>');
      };
    })());


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
    // alert("haha");
    // alert(human.weightComparison(123));


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array

        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
