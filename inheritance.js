class Ninja {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log(this.name);
  }
  showStates() {
    console.log(
      `The Ninja's name is ${this.name} and his speed is ${this.speed} , his strength is ${this.strength}, his health is : ${this.health}`
    );
  }
  drinkSake() {
    this.health = 10 + this.health;
  }
}

const ninja1 = new Ninja("Hyuabusa", 20);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStates();

class Sensi extends Ninja {
  constructor(wisdom) {
    super(name, 200, wisdom);
    this.wisdom = 10;
    this.speed = 10;
    this.strength = 10;
  }
  speakWisdom() {
    console.log("Be kind to all");
    super.drinkSake();
  }
}

const superSensi = new Sensi();
superSensi.name = "Master Splinter";
superSensi.speakWisdom();
console.log(superSensi.wisdom);
superSensi.showStates();
console.log(superSensi.health);
superSensi.sayName();
