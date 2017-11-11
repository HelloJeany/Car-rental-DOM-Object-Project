var carRent = {
    name: 'Speedy Rentals Inc.',
    types: ['Economy', 'Midsize'],
    ecoCarsRented: 0,
    midsizeCarsRented: 0,
    ecoCarsAvail: 10,
    midCarsAvail: 10,
    
}

function update() {
        document.getElementById("cars").innerHTML = carRent.types;
        document.getElementById("ecoCarsAvail").innerHTML = carRent.ecoCarsAvail;
        document.getElementById("midCarsAvail").innerHTML = carRent.midCarsAvail;
         
        
    }

        document.getElementById("bName").innerHTML = carRent.name;


function getMid() {
        document.getElementById("midCarsAvail").innerHTML = carRent.midCarsAvail--;
}
    
function getEco() {
        document.getElementById("ecoCarsAvail").innerHTML = carRent.ecoCarsAvail--;
}





