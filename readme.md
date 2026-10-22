# Explicação da produção da Parte 1 da Composição nºIII de Piet Mondrian 

Na parte 1 foi nos proposto replicar com medidas exatas a composição n°III de Piet Mondrian.


Começei por medir o quadro com a ajuda do InDesign, retirei as medidas e usando a linha createCanvas(), coloquei essas medidas dentro dos parêntesis.
Após isso passei para os retângulos, para estes usei o Rect(), colori usando o fill() e colocando as cores que queria também dentro dos parêntesis, usando o noStroke() para que não ficassem com linhas das bordas.
Nas linhas fiz o mesmo procedimento com diferentes tamanhos de rect() para terem várias grossuras, tal como no quadro.

-Textura:
Depois disso adicionei a textura, para isso usei este tutorial:https://p5js.org/reference/p5/texture/
Baixei uma imagem, e coloquei-a na mesma pasta do código.
Começei por escrever img para guardar a textura que tinha colocado, que iguala a await que diz para que a imagem seja carregada antes de o site abrir (escrevi async antes do function setup para que o await funcionasse), ou seja, para que não fique a carregar mesmo depois de já termos entrado no site, como se fosse um pre-loading, de seguida coloquei o loadImage() para carregar a imagem a que dei o nome de 'textura.jpg'.
Escrevi noLoop() para que a imagem ficasse estática.

No final do código, adicionei linhas relacionadas á textura, para que esta funcionasse, abri um push() que usado juntamente com o pop(), serve para conter certas ações para linhas específicas sem se aplicar às outras linhas também.
Usei o blendMode(MULTIPLY) para fazer com que fique com menos opacidade.
Depois usei o tint() para escolher as cores que queria usar (cor de cima mais clara, cor de baixo mais escura, dentro dos parêntesis).
Referenciei novamente a imagem da textura que já tinha sido mencionada acima no código, "image(img,,,,);"
Dentro do parêntesis coloquei width e height para referenciar as medidas que dei no createCanvas(), e por fim fechei com o pop().


-Gradiente:
No final para deixar o quadro mais realista, adicionei uma espécie de gradiente, com a ajuda deste tutorial: https://p5js.org/tutorials/color-gradients/
Coloquei as linhas antes do function setup para que fosse chamado pela function draw, e retirei o background() que antes tinha colocado porque o background estava a ser desenhado antes do gradient, o que fazia com que ele não funcionasse.
Então usei o startColor para definir a cor de cima, o endColor para definir a cor de baixo, o for para repetir as linhas de cor pelo ecrã, o lerpColor(), o amt que servem para misturar as duas cores gradualmente, e o map() para que o lerpColor() saiba as coordenadas de onde misturar as duas cores.

Coloquei também o gradientFilter() dentro do function setup() para que fosse desenhado.

Não mexi na function windowResized() porque para colocar as coordenadas dos retângulos e linhas era mais apropriado deixar como estava, então deixei as coordenadas originais do exemplo do professor.