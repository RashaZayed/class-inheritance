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
