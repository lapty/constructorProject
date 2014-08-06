function Person(name, fullness, energy, bio) {

  this.name = name;
  this.fullness  = fullness;
  this.energy = energy;
  this.bio = bio;
  //this.thirst = thirst;
  //this.bladder = bladder;

  this.ate = function (foodAte) {
    this.fullness = this.fullness + foodAte;
    this.energy = this.energy + foodAte/2;
    if (this.fullness > 100 && this.fullness < 150) {
      return console.log("You're too full. You will get sick if you continue eating.");
  } else if (this.fullness > 151) {
      return console.log("YOU DIED FROM EATING TOO MUCH. NICE JOB.")
  }

  };



  this.did = function (actionDid) {
  this.energy = this.energy - actionDid;
  this.fullness = this.fullness - actionDid/4;


  if (this.energy < 0) {
    return console.log("YOU'RE DEAD FROM EXHAUSTION. POOR YOU.")

  } else if (this.energy > 0 && this.energy < 40) {
      return console.log("You're exhausted.")
    } else {
      return console.log("You're getting tired.")
  }

  };


};



function Food(name, howFilling) {
  this.name = name;
  this.howFilling = howFilling;
  this.eat = function(Person) {
    console.log("You ate.");
      Person.ate(this.howFilling);
    }
  };

function Action(name, energyCost) {
  this.name = name;
  this.energyCost = energyCost;
  this.do = function(Person) {
    console.log("You do the activity.");
      Person.did(this.energyCost);
    }
  };



var run = new Action ("Run", 10)
var swim = new Action ("Swim", 15)
var jog = new Action ("jog", 8)
var bike = new Action ("bike", 11)
var nap = new Action ("nap", 1)



var Brendan = new Person ("Brendan", 0, 100, "Brendan's favorite hobby: stomping kittens.");
var Charles = new Person ("Charles", 0, 100, "Charles is a cool dude.");
var Will = new Person ("Will", 0, 100, "Don't talk to Will. He smells really bad.");
var Margaret = new Person ("Margaret", 0, 100, "Margaret picks her nose often.");
var Andrew = new Person ("Andrew", 0, 100, "Andrew once punched a baby in the face.");

var hamburger = new Food ("Hamburger", 20);
var fries = new Food ("Fries", 7);
var fish = new Food ("Fish", 18)
var soup = new Food ("Soup", 15)


//help commands
var foodmenu = ["fries", "hamburger","fish","soup"];
var actions =["swim","run","jog","bike","nap"];
var personlist =["Brendan","Charles","Will","Margaret","Andrew"];
var help = ["To eat, type: food.eat(name). To do an action, type: action.do(name)"];


//Intro phrase
console.log ("Try not to die.    to begin, type personlist//foodmenu//actions//help")
