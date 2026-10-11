function setup() {
//tela
createCanvas(800,784);
background(245, 243, 240);
}

function draw() {

//Retângulos

//vermelho
fill(215,32,0);
rect(0,0,351,324);
 
//amarelo 
fill(227,198,0);
rect(0,529,77,271);

//azul
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

}
