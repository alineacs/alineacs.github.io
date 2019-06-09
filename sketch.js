/* 
    Equipe: 
    Aline Andressa Carvalho da Silva - Subturma C (Líder) 
    Maria Eduarda Lagos Fernandes  - Subturma C 
    Etapas: 9 e 10;
        
*/

//player
x= 35;
y= 365;
z=35;
w=35;

//lixo organico melan
movObjeto=3
qtObjetos=3; 
aIn=[];
bIn=[];
rxo=25;
ryo=25;

//lixo ornganico banana
movBanana=3
qtBanana=10; 
aBn=[];
bBn=[];
rxoB=25;
ryoB=25;

//inimigos LIXO TOXICO
movToxico=2;
qtToxico=5; 
xT=[];
yT=[];
rxoT=25;
ryoT=25;

//tiro
tiro = false;
xd=0;
yd=0;

//dinamica
vidas= 3;
score= "0";
level=0;
nivel=0;
barraScore=10;
barralevel=10;
barraVida=3;
tela=1;
plant=false
plant2=false
plant3=false

//plantinha(s)
qtPlanta=4;
aPl=[];
aPl[0]= 70;
bPl1=480
ra1=100;
rb1=100
vPlanta=[]
contPlant=0;
o=0;
p=0;
j=0;
h=0;

r=2;


let image1;
let image5;
let image2;
function preload(){
  
  pilha=loadImage("Pilhapng.png")
  fazenda=loadImage("image10.jpg")
  banana=loadImage("image6.png")
  pers=loadImage("lixo.png")
  melan=loadImage("image5.png")
  planta1=loadImage("image2.png")
  planta2=loadImage("image3.png")
  planta3=loadImage("image4.png")
  fundo=loadImage("image11.jpg")
  tela3=loadImage("arvore.png")
  

  vPlanta [0] = planta1
  vPlanta [1] = planta2
  vPlanta [2] = planta3
  vPlanta [3] = tela3
}
function setup() {
  createCanvas(640, 500);
  LetrasCor = color(100, 50, 150)

  for(var i=0;i<qtObjetos;i++) {
    aIn[i]= +800+(random(200)) 
    bIn[i]= random(30,400)
  }
    for(var q=0;q<qtBanana;q++) {
    aBn[q]= +800+(random(200)) 
    bBn[q]= random(30,400)
  }
  for(var e=0;e<qtPlanta;e++) {
    aPl[e+1]= aPl[e]+160
  }
  
  for (var t=0;t<qtToxico;t++) {
   xT[t]=+800+(random(200)) 
   yT[t]= random(30,400)
  }

}

function draw () {
  if(tela==1){
    LetrasCor.setGreen(128 + 128 * sin(millis() / 100));
    background(1000);
    fill(LetrasCor)  
    textSize(40);
    text("Seja um ser humano consciente,", 40, 200)
    textSize(30)
     text(" adube as árvores com lixo orgânico.", 50, 250)
    textSize(30);
    text("Pressione SHIFT para começar a plantar",30,410)
    
    if(keyIsDown(16)){
     tela=2;
     }
     }
  if(tela==2) {
  background(0);
  
  fill(0, 102, 153)  
  textSize(25);
  text('Vida: '+ vidas, 10, 30);
  text('Tamanho: '+ score, 200, 30);
  text('Level: '+level, 480, 30);
  
  if (keyIsDown(LEFT_ARROW))
    x-=12;

  if (keyIsDown(RIGHT_ARROW))
    x+=7;

  if (keyIsDown(UP_ARROW))
    y-=7;

  if (keyIsDown(40))
    y+=7;

  if( x>605) {
    x=605
  }
   if( x<35) {
    x=35
  }
   if(y<70) {
    y=70
  }
    if(y>435) {
    y=435
  }

  Player=image(pers, x, y, 2*z, 2*w)

  //////funções de tiro/////  
if(keyIsDown(32) && w==60 && tiro== false) { 
    xd=x
    yd=y
  
    tiro = true
    z=35
    w=35
  }
if (tiro==true){
  
    ellipse(xd+35, yd,10,10)
    yd+=10
  if (yd>500 ){
    tiro = false
    
  }
}

//plantinhas draw
imageMode(CENTER)
    for(var e=0;e<qtPlanta;e++) {
    image(vPlanta[h], aPl[0], bPl1 ,ra1,rb1)
    
    if(dist(xd, yd,aPl[0], bPl1)<=50 && tiro==true){ 
      tiro=false
      h++;
      if(h>=3){
        h=3
      }
    
    }
    
    image(vPlanta[o], aPl[1], bPl1 ,ra1,rb1)
    
    if(dist(xd, yd,aPl[1], bPl1)<=50 && tiro==true){ 
      tiro=false
      o++;
      if(o>=3){
        o=3
        }
    }
    
      image(vPlanta[p], aPl[2], bPl1 ,ra1,rb1)
    
    if(dist(xd, yd,aPl[2], bPl1)<=50 && tiro==true){ 
      tiro=false
      p++;
        if(p>=3){
        p=3
        }
    }
       image(vPlanta[j], aPl[3], bPl1 ,ra1,rb1)
    
    if(dist(xd, yd,aPl[3], bPl1)<=50 && tiro==true){ 
      tiro=false
      j++;
        if(j>=3){
        j=3
        }
    }
}
    
level=o+p+h+j
    

imageMode(CORNER)  
//melan
for( i=0;i<qtObjetos;i++) {
  image(melan, aIn[i], bIn[i], 2*rxo, 2*ryo);
  aIn[i]=aIn[i]-movObjeto
      if (aIn[i]<-2*rxo) {
        aIn[i]=640+rxo;
        bIn[i]= random(70,400);
      }
///DINAMICA
  if(dist(x, y, aIn[i], bIn[i])< z+rxo-3){
  aIn[i]=-50 
  bIn[i]=-50
  z++
  w++    
  }
}

//banana
for(q=0;q<qtBanana;q++) {
  image(banana, aBn[q], bBn[q], 2*rxoB, 2*ryoB);
  aBn[q]=aBn[q]-movBanana
      if (aBn[q]<-50) {
      aBn[q]=640+rxoB;
      bBn[q]= random(70,400);
      }
///DINAMICA
    if(dist(x, y, aBn[q], bBn[q])< z+rxoB-3){
    aBn[q]=-50   
    bBn[q]=-50
    z++
    w++  
    }
}
qtToxico=1
barralevel=1;
    if(level>barralevel){
      barralevel++;
      qtToxico+=2}
for( t=0;t<qtToxico;t++) {
  image(pilha, xT[t], yT[t], 2*rxoT, 2*ryoT);
  xT[t]=xT[t]-movToxico
  if (xT[t]<-rxoT*2) {
      xT[t]=640;
      yT[t]= random(70,400);
      }
///DINAMICA
  if(dist(x, y, xT[t], yT[t])< z+rxoT-3){
      xT[t]=-rxoT*2
      z-=5
      w-=5
      }
  }
    
//TAMANHO
    
if(z>60){
  z=60
  w=60
  score="Maximo"
  }
if(z<=35) {
      score="Pequeno"
}
    if(z<25){
    z=15
    w=15
    vidas--
    z=35
    w=35
    x=35
    y=365
      }
    
  if(vidas==0){
  tela=3;
  }
    if(level==12){
    tela=4
    }
}
   if(tela==4){
    LetrasCor.setGreen(128 + 128 * sin(millis() / 100));
    background(1000);
    fill(LetrasCor)  
    textSize(60);
    text("YOU WIN", 50, 300)
    textSize(30);
    text("Pressione espaço para começar a plantar",30,410)
    
    if(keyIsDown(32)){
     tela=1;
     vidas=3;
    }
  }
  
if(tela==3){
  LetrasCor.setGreen(128 + 128 * sin(millis() / 100));
  background(1000)
  fill(0)   
  textSize(30);
  text('Poluiu demais,', 40, 150);
  text('plante mais árvores',20,200)
  text('novamente!',60,250)
  fill(LetrasCor)
  textSize(30)
  text("Pressione CONTROL para jogar novamente",30,410)
  text("Ou ESPAÇO para voltar para tela inicial",40,440)
  
  frameRate(5)
  var step = frameCount % 10;
  translate(300, 50);
  applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);
  image(tela3, 0, 0, 300, 300);
  filter(GRAY)

   if(keyIsDown(CONTROL)){
     vidas=3;
     tela=2;
     }
   if(keyIsDown(32)){
     tela=1;
     vidas=3
     }
  }
}