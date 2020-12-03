//=====================================================================================
//  SECTION II
//=====================================================================================
console.log("=================================================================")
console.log("Working with Objects");

let car = new Object();
car.name = "Toyota Rav 4";
car.price = 1299;
car.enginer = "V12";
car.quality = "Very High";


console.log("Toyota Car " + JSON.stringify(car));

//With Object initializer

let house = {
    area: {
        name: "Viginia Ohio",
        address: "South Street 412"
    },

    rooms: 42,

    seller: {
        name: "Mr. Joana Mudiro",
        age: 70,
        residency: "22 Years"
    },

    price: 2000,

    futurePrice: function(years) {
        let projection = this.price * 52 * years;
        return projection;
    }

};

console.log("House Details\n" + JSON.stringify(house));
console.log("House Future Price 2 Years: " + house.futurePrice(2));
console.log("House Future Price 6 Years: " + house.futurePrice(6));
console.log("House Future Price 12 Years: " + house.futurePrice(12));