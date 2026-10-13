async function setup() {

//tela
createCanvas(800,784);
background(245, 243, 240);


//textura
img = await loadImage ('textura.jpg');
noLoop();
}

function draw() {

//Retângulos

//vermelho
noStroke();
fill(215,32,0);
rect(0,0,351,324);
 
//amarelo 
noStroke();
fill(227,198,0);
rect(0,529,77,271);

//azul
noStroke();
fill(33,31,104);
rect(363,529,235,226);


//Linhas pretas

fill(2,2,4);
rect(351,0,12,800);

fill(2,2,4);
rect(0,324,800,17);

fill(2,2,4);
rect(0,512,800,17);

fill(2,2,4);
rect(77,529,9,271);

fill(2,2,4);
rect(598,529,9,271); 

fill(2,2,4);
rect(363,755,235,9);

push();
blendMode(MULTIPLY);
tint(255,100);
image(img, 0, 0, width, height); 
pop();


function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

}
