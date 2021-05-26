canvas = document.getElementById("canvas1");

ctx = canvas.getContext("2d");

car1width = 120;

car1height = 70;

car2width = 120;

car2height = 70;

background_image = "racing.jpeg";

car_image1 = "car1.png";

car_image2 = "car2.png";

car1x = 10;

car1y = 10;

car2x = 10;

car2y = 100;

function add() {
    background_imagenew = new Image();

    background_imagenew.onload = uploadBackground;

    background_imagenew.src = background_image;

    car_image1new = new Image();

    car_image1new.onload = uploadcar1;

    car_image1new.src = car_image1;

    car_image2new = new Image();

    car_image2new.onload = uploadcar2;

    car_image2new.src = car_image2;
}

function uploadBackground() {
    ctx.drawImage(background_imagenew, 0, 0, canvas.width, canvas.height)
}

function uploadcar1() {
    ctx.drawImage(car_image1new, car1x, car1y, car1width, car1height)
}

function uploadcar2() {
    ctx.drawImage(car_image2new, car2x, car2y, car2width, car2height)
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        
        console.log("car1up");
        up();
    }
    if(keyPressed == '40') {
        
        console.log("car1down");
        down();
    }
    if(keyPressed == '37') {
        
        console.log("car1left");
        left();
    }
    if(keyPressed == '39') {
        
        console.log("car1right");
        right();
    }
    if(keyPressed == '87') {
        
        console.log("car2up");
        car2up();
    }
    if(keyPressed == '83') {
        
        console.log("car2down");
        car2down();
    }
    if(keyPressed == '65') {
        
        console.log("car2left");
        car2left();
    }
    if(keyPressed == '68') {
        
        console.log("car2right");
        car2right();
    }
}

function car2up() {
    if(car2y >= 0) {
        car2y = car2y - 5;
        console.log("When up arrow is pressed, x = " + car2x + ", and y = " + car2y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function car2down() {
    if(car2y <= 510) {
        car2y = car2y + 5;
        console.log("When up arrow is pressed, x = " + car2x + ", and y = " + car2y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
function car2left() {
    if(car2x >= 0) {
        car2x = car2x - 5;
        console.log("When up arrow is pressed, x = " + car2x + ", and y = " + car2y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
function car2right() {
    if(car2x <= 700) {
        car2x = car2x + 5;
        console.log("When up arrow is pressed, x = " + car2x + ", and y = " + car2y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
        if (car2x > 680) {
            console.log("Car/Player 2 WON!!!!")
            document.getElementById("wonornot").innerHTML = "Car/Player 2 WON!!!!";
        }        
    }
}

function up() {
    if(car1y >= 0) {
        car1y = car1y - 5;
        console.log("When up arrow is pressed, x = " + car1x + ", and y = " + car1y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function down() {
    if(car1y <= 510) {
        car1y = car1y + 5;
        console.log("When up arrow is pressed, x = " + car1x + ", and y = " + car1y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function left() {
    if(car1x >= 0) {
        car1x = car1x - 5;
        console.log("When up arrow is pressed, x = " + car1x + ", and y = " + car1y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function right() {
    if(car1x <= 680) {
        car1x = car1x + 5;
        console.log("When up arrow is pressed, x = " + car1x + ", and y = " + car1y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
        if (car1x > 680) {
            console.log("Car/Player 1 WON!!!!")
            document.getElementById("wonornot").innerHTML = "Car/Player 1 WON!!!!";
        }
    }
}