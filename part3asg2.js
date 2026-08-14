/*🔴 PART 3 — PROBLEM 3
🚗 Vehicle Rental Management System

Build a small vehicle rental system using JavaScript OOP.

This will test classes, inheritance, private fields, getters/setters, static methods, methods, super, and error handling.

1. Create a Vehicle class

Every vehicle should have:

vehicleNumber
brand
pricePerDay
isRented

Example:

const car = new Vehicle(
    "MH12AB1234",
    "Toyota",
    2500
);

Initially:

isRented = false
2. Make price private

Use:

#pricePerDay

The price should not be directly accessible.

Create a getter:

get pricePerDay()

so this works:

console.log(car.pricePerDay);
3. Rent the vehicle

Create:

rent()

If the vehicle is already rented:

Vehicle is already rented

Otherwise:

Vehicle rented successfully

and change:

isRented → true
4. Return the vehicle

Create:

returnVehicle()

If the vehicle isn't rented:

Vehicle is not rented

Otherwise:

Vehicle returned successfully

and change:

isRented → false
5. Calculate Rental Cost

Create:

calculateRent(days)

Formula:

pricePerDay × days

For example:

₹2500 × 3

Result:

₹7500

If days are:

0 or negative

throw an error.

6. Create a Setter

Create:

set pricePerDay(newPrice)

Rule:

newPrice < 500
     ↓
Error


newPrice >= 500
     ↓
Accept
7. Static Method

Create:

static validateVehicleNumber(vehicleNumber)

A vehicle number is valid if its length is at least 8.

Example:

Vehicle.validateVehicleNumber("MH12AB1234");

Should return:

true

And:

Vehicle.validateVehicleNumber("ABC");

should return:

false
8. Create Car

Now create:

class Car extends Vehicle

A car should additionally have:

numberOfSeats

Use:

super(...)
9. Create Bike

Create another child class:

class Bike extends Vehicle

A bike should additionally have:

engineCC

Example:

150
10. Add Different Rental Rules
Car

Create:

getVehicleInfo()

Return something like:

Toyota Car - 5 Seats
Bike

Create:

getVehicleInfo()

Return:

Royal Enfield Bike - 350 CC

This gives you practice with method overriding.

11. Create Vehicles

Create:

const car = new Car(
    "MH12AB1234",
    "Toyota",
    2500,
    5
);

And:

const bike = new Bike(
    "MH12XY5678",
    "Royal Enfield",
    1500,
    350
);
12. Test the Car

Your program should:

Display car information
↓
Display price
↓
Rent car
↓
Try renting again
↓
Calculate 3-day rental
↓
Return car
↓
Try returning again
*/


class Vehicle {
  #pricePerDay;

  constructor(vehicleNumber, brand, pricePerDay) {
    this.vehicleNumber = vehicleNumber;
    this.brand = brand;
    this.pricePerDay = pricePerDay;
    this.isRented = false;
  }

  get pricePerDay() {
    return this.#pricePerDay;
  }

  rent() {
    if (this.isRented) {
      console.log("Vehicle is already rented");
    } else {
      this.isRented = true;
      console.log("=== Vehicle ===");
      console.log(
        "Vehicle Number: " +
          this.vehicleNumber +
          " Is Rented Successfully"
      );
    }
  }

  returnVehicle() {
    if (this.isRented) {
      this.isRented = false;
      console.log("Vehicle returned successfully");
    } else {
      console.log("Vehicle is not rented");
    }
  }

  calculateRent(days) {
    if (days > 0) {
      return this.#pricePerDay * days;
    } else {
      throw new Error("Minimum 1 day to rent");
    }
  }

  set pricePerDay(newPrice) {
    if (newPrice < 500) {
      throw new Error("Price cannot be less than 500");
    }

    this.#pricePerDay = newPrice;
  }

  static validateVehicleNumber(vehicleNumber) {
    return vehicleNumber.length >= 8;
  }
}

class Car extends Vehicle {
  constructor(vehicleNumber, brand, pricePerDay, numberOfSeats) {
    super(vehicleNumber, brand, pricePerDay);
    this.numberOfSeats = numberOfSeats;
  }

  getVehicleInfo() {
    console.log("=== Vehicle Info ===");
    console.log("Vehicle Number: " + this.vehicleNumber);
    console.log("Brand: " + this.brand);
    console.log("Number Of Seats: " + this.numberOfSeats);
  }
}

class Bike extends Vehicle {
  constructor(vehicleNumber, brand, pricePerDay, engineCC) {
    super(vehicleNumber, brand, pricePerDay);
    this.engineCC = engineCC;
  }

  getVehicleInfo() {
    console.log("=== Vehicle Info ===");
    console.log("Vehicle Number: " + this.vehicleNumber);
    console.log("Brand: " + this.brand);
    console.log("Engine: " + this.engineCC + " CC");
  }
}

const car = new Car(
  "MH12AB1234",
  "Toyota",
  2500,
  5
);

const bike = new Bike(
  "MH12XY5678",
  "Royal Enfield",
  1500,
  350
);

console.log("===== CAR =====");

car.getVehicleInfo();

console.log("Price Per Day:", car.pricePerDay);
console.log("Is Rented:", car.isRented);

car.rent();

console.log("Is Rented:", car.isRented);

car.rent();

console.log("3 Days Rent:", car.calculateRent(3));

car.returnVehicle();

console.log("Is Rented:", car.isRented);

car.returnVehicle();

try {
  car.pricePerDay = 3000;
  console.log("New Price:", car.pricePerDay);
} catch (error) {
  console.log(error.message);
}

try {
  car.pricePerDay = 200;
} catch (error) {
  console.log(error.message);
}

try {
  car.calculateRent(0);
} catch (error) {
  console.log(error.message);
}

console.log("===== BIKE =====");

bike.getVehicleInfo();

console.log("Price Per Day:", bike.pricePerDay);

bike.rent();

console.log("5 Days Rent:", bike.calculateRent(5));

bike.returnVehicle();

console.log(
  "Valid Vehicle Number:",
  Vehicle.validateVehicleNumber("MH12AB1234")
);

console.log(
  "Invalid Vehicle Number:",
  Vehicle.validateVehicleNumber("ABC")
);
