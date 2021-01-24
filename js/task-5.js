'use stirct'
class Car {

static getSpecs(car) {
      console.log(car);
   }
   
   constructor(object) {
      this.maxSpeed = object.maxSpeed;
      this.speed = 0;
      this.isOn = false;
      this.distance = 0;
      this.price = object.price;
   }

   get price() {
      return this._price;
   }

   set price(car) {
      this._price = car;
   }

   turnOn() {
      this.isOn = true;
  }

   turnOff() {
      this.isOn = false;
      this.speed = 0;
  }

   accelerate(value) {
      if (this.speed + value < this.maxSpeed) {
         this.speed += value;
     }
  }

   decelerate(value) {
     if (this.speed - value > 0) {
         this.speed = this.speed - value;
     }
  }

   drive(hours) {
      if ((this.isOn)) {
         this.distance += hours * this.speed;
     }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);


mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price); 