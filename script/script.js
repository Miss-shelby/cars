//let cars =["volvo", "bmw", "lexus", 4,{
  //  name:"fruit",type:"mango"}
 //]

 let cars = [
     {
         name: "Audi",
         car_img: '2020 audi',
         price: '$44,895'
     },
     {
        name: "Bentley flying Spur",
        car_img: '2020 bentley spur',
        price: '$214,600'
    },
    {
        name: "Chevrolet Corvette-",
        car_img: '2020-Chevrolet-Corvette-',
        price: '$59,995'
    },
    {
        name: "Ford Escape",
        car_img: '2020-Ford-Escape',
        price: '$24,885'
    },
    {
        name: "GMC Acadia AT4",
        car_img: '2020-GMC-Acadia-AT4-',
        price: '$42,925'
    },
    {
        name: "Hyundia Sonata",
        car_img: '2020-Hyundai-Sonata',
        price: '$23,600'
    },
    {
        name: "Infinity QX80",
        car_img: '2020-Infiniti-QX80-',
        price: '$66,750'
    },
    {
        name: "Kia Niro",
        car_img: '2020-Kia-Niro',
        price: '$25,00o'
    },
    {
        name: "Land-Rover Defender",
        car_img: '2020-Land-Rover-Defender',
        price: '$49,900'
    },
    {
        name: "Lexus RC F",
        car_img: '2020-Lexus-RC-F-',
        price: '$49,900'
    },
    {
        name: "Mazda CX-30",
        car_img: '2020-Mazda-CX-30-',
        price: '$21,900'
    },
    {
        name: "Mercedes-Benz-GLB",
        car_img: '2020-Mercedes-Benz-GLB',
        price: '$36,600'
    },
 ]
 
 let carSection =document.getElementById('car-wrap');
 let html ="";
 cars.forEach(e => {
     html += `
     <div class="car-particulars">
                <div class="car-image">
                    <img src="images/${e.car_img}.jpg" class="img-fluid">
                </div>
                <div class="car-info">
                    <h3>${e.name}</h3>
                    <h3 class="price">${e.price}</h3>
                </div>
            </div>
     `
     carSection.innerHTML = html
 });
