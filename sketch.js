let map;
let man;
let graphics;
let nc;
let ntc;
let clm;
let scene = 0;
let vid;
let vid2;
let sign;
let vid3;
let vid4;
let gba;
let manv;
let manv2;
let mc;
let vid5;
let vid6;
let sign2;
let vid7;
let vid8;
let vid9;
let vid10;
let manv3;
let manv4;
let manv5;
let manv6;
let manv7;
let mc2;


function preload(){
  map = loadImage('Screen Shot 2023-05-02 at 5.39.08 PM.png')
  man = loadImage('Screen Shot 2023-05-02 at 7.13.18 PM.png')
  nc = loadImage('Screen Shot 2023-05-02 at 8.39.49 PM.png')
  vid = createVideo(['Copy of Lu_Creek_1.mp4']);
  vid2 = createVideo(['Copy of Lu_Creek_2.mp4']);
  vid3 = createVideo(['Copy of Lu_Creek_3.mp4']);
  vid4 = createVideo(['Copy of Lu_Creek_4.mp4']);
  manv = createVideo(['manha.mp4']);
  manv2 = createVideo(['manha2.mp4']);
  vid5 = createVideo(['Copy of Lu_Creek_5.mp4']);
  vid6 = createVideo(['Copy of Lu_Creek_6.mp4']);
  vid7 = createVideo(['Copy of Lu_Creek_7.mp4']);
  vid8 = createVideo(['Copy of Lu_Creek_8.mp4']);
  vid9 = createVideo(['Copy of Lu_Creek_9.mp4']);
  vid10 = createVideo(['Copy of Lu_Creek_10.mp4']);
  manv3 = createVideo(['manha3.mp4']);
  manv4 = createVideo(['manha4.mp4']);
  manv5 = createVideo(['manha5.mp4']);
  manv6 = createVideo(['manha6.mp4']);
  manv7 = createVideo(['manha7.mp4']);
  
  

}

function setup() {
  createCanvas(492, 494, WEBGL);
  vid.loop();
  vid.hide();
  vid2.loop();
  vid2.hide();
  vid3.loop();
  vid3.hide();
  vid4.loop();
  vid4.hide();
  vid6.loop();
  vid6.hide();
  manv.loop();
  manv.hide();
  manv2.loop();
  manv2.hide();
  manv3.loop();
  manv3.hide();
  manv4.loop();
  manv4.hide();
  manv5.loop();
  manv5.hide();
  manv6.loop();
  manv6.hide();
  manv7.loop();
  manv7.hide();
  vid5.loop();
  vid5.hide();
  vid7.loop();
  vid7.hide();
  vid8.loop();
  vid8.hide();
  vid9.loop();
  vid9.hide();
  vid10.loop();
  vid10.hide();
  graphics = createGraphics(40,40);
  graphics.background(man,150);
  graphics.fill(255,100,255);
  graphics.stroke(0,0);
  graphics.rect(16.5,13,30,10);
  graphics.fill(255);
  graphics.textAlign(CENTER);
  graphics.textSize(8);
  graphics.text('Manhattan',20,20);
  
  ntc = createGraphics(40,40);
  ntc.background(nc,150);
  ntc.fill(255,100,255);
  ntc.stroke(0,0);
  ntc.rect(16,24,30,20);
  ntc.fill(255);
  //ntc.textAlign(CENTER);
  ntc.textSize(8);
  ntc.text('Newtown',0,30);
  ntc.fill(255);
  //ntc.textAlign(CENTER);
  ntc.textSize(8);
  ntc.text('Creek',15.5,37);
  
  clm = createGraphics(100,30);
  clm.background(255,200);
  clm.fill(0);
  clm.textSize(20);
  clm.text('Click!',10,25)
  
  sign = createGraphics(40,40);
  //sign.background(man,150);
  sign.fill(255,100,255);
  sign.stroke(0,0);
  sign.rect(12,24,35,20);
  sign.fill(255);
  //sign.textAlign(CENTER);
  sign.textSize(8);
  sign.text('On the',0,30);
  sign.fill(255);
  //sign.textAlign(CENTER);
  sign.textSize(8);
  sign.text('Land',15.5,37);
  
  gba = createGraphics(50,20);
  gba.background(255,100);
  gba.fill(0);
  gba.textSize(12);
  gba.text('go back!',2,15)
  
  mc = createGraphics(40,40);
  //mc.background(255,100);
  mc.fill(255,100,255);
  mc.stroke(0,0);
  mc.rect(5,13,30,10);
  mc.fill(255);
  mc.textAlign(CENTER);
  mc.textSize(8);
  mc.text('Daytime',20,20);
  
  mc2 = createGraphics(40,40);
  //mc.background(255,100);
  mc2.fill(255,100,255);
  mc2.stroke(0,0);
  mc2.rect(3,13,35,10);
  mc2.fill(255);
  mc2.textAlign(CENTER);
  mc2.textSize(8);
  mc2.text('Nighttime',20,20);
  
  sign2 = createGraphics(40,40);
  sign2.fill(255,100,255);
  sign2.stroke(0,0);
  sign2.rect(8,24,35,20);
  sign2.fill(255);
  //sign.textAlign(CENTER);
  sign2.textSize(8);
  sign2.text('In the',0,30);
  sign2.fill(255);
  //sign.textAlign(CENTER);
  sign2.textSize(8);
  sign2.text('Water',15.5,37);
  
  
  
}

function draw() {
  texture(map);
  box(492,494,0);
  
  push();
  translate(-50,-160,50);
  noStroke();
  texture(graphics);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(40, 40, 40);
  pop();
  
  
  push();
  translate(140,160,50);
  noStroke();
  texture(ntc);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(40, 40, 40);
  pop();
  
  if (mouseX > 150 && mouseX < 250 && mouseY > 20 && mouseY < 100) {
    push();
    translate(-100,-170,10);
    noStroke();
    texture(clm);
    plane(100,30);
    pop();
    if (mouseIsPressed) {
    scene = 1;
    //initLevel2();
  }
  }  
  
  if (mouseX > 370 && mouseX < 450 && mouseY > 350 && mouseY < 480) {
    push();
    translate(100,200,10);
    noStroke();
    texture(clm);
    plane(100,30);
    pop();
    if (mouseIsPressed) {
    scene = 2;
    //initLevel2();
  }
  }  
  
  if (scene == 1) {
    //level2
    //background(225);
    background(0);
   push();
    translate(0,-100,3);
    noStroke();
    texture(manv);
    plane(192,144);
    pop();
    
    push();
    translate(-130,-170,5);
    noStroke();
    texture(manv2);
    plane(192,144);
    pop();
    
    push();
    translate(-130,-40,2);
    noStroke();
    texture(manv3);
    plane(192,144);
    pop();
    
    push();
    translate(130,170,2);
    noStroke();
    texture(manv4);
    plane(192,144);
    pop();
    
    push();
    translate(-70,170,2);
    noStroke();
    texture(manv5);
    plane(192,144);
    pop();
    
    push();
    translate(144,60,2);
    scale(0.8)
    noStroke();
    texture(manv6);
    plane(192,144);
    pop();
    
    push();
    translate(0,70,2);
    scale(0.6)
    noStroke();
    texture(manv7);
    plane(192,144);
    pop();
    
    push();
    translate(-215,-238,5);
    noStroke();
    texture(gba);
    plane(50,20);
    pop(); 
    
    push();
  translate(-50,-100,50);
  noStroke();
  texture(mc);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(40, 40, 40);
  pop();
    
    push();
  translate(50,100,50);
  noStroke();
  texture(mc2);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(40, 40, 40);
  pop();
    
    if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
    push();
    translate(0,0,10);
    noStroke();
    texture(clm);
    plane(100,30);
    pop();
    if (mouseIsPressed) {
    scene = 3;
    //initLevel2();
  }
  }  
    
    }

 if (scene == 2) {
   
   background(0);
   push();
    translate(0,-100,10);
    noStroke();
    texture(vid);
    plane(192,144);
    pop();
   push();
    translate(-145,-190,2);
    noStroke();
    texture(vid2);
    plane(192,144);
    pop();
   
   push();
  translate(-50,-160,50);
  noStroke();
  texture(sign);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(40, 40, 40);
  pop();
   
  push();
    translate(-175,-85,-10);
    noStroke();
    texture(vid3);
    plane(128,96);
    pop(); 
   
   push();
    translate(35,-210,-10);
    noStroke();
    texture(vid10);
    plane(128,96);
    pop(); 
   
   push();
    translate(135,180,10);
    noStroke();
    texture(vid5);
    plane(192,144);
    pop(); 
   
   push();
    translate(100,50,5);
    noStroke();
    texture(vid4);
    plane(192,144);
    pop(); 
   
   push();
    translate(-70,180,5);
    noStroke();
    texture(vid6);
    plane(192,144);
    pop();
   
   push();
    translate(-70,78,5);
    noStroke();
    texture(vid7);
    plane(128,96);
    pop();
   
   push();
    translate(-60,10,3);
   scale(0.8);
    noStroke();
    texture(vid8);
    plane(128,96);
    pop();
   
   push();
  translate(0,100,50);
  noStroke();
  texture(sign2);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(40, 40, 40);
  pop();
   
   push();
    translate(-215,-238,2);
    noStroke();
    texture(gba);
    plane(50,20);
    pop(); 
  
   
   if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 20) {
    push();
    translate(0,0,10);
    noStroke();
    texture(clm);
    plane(100,30);
    pop();
    if (mouseIsPressed) {
    scene = 3;
      }
  } 
      
 }
   
  
  if (scene == 3) {
   
   texture(map);
  box(492,494,0);
  
  push();
  translate(-50,-160,50);
  noStroke();
  texture(graphics);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(40, 40, 40);
  pop();
  
  
  push();
  translate(140,160,50);
  noStroke();
  texture(ntc);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(40, 40, 40);
  pop();
  
  if (mouseX > 150 && mouseX < 250 && mouseY > 20 && mouseY < 100) {
    push();
    translate(-100,-170,10);
    noStroke();
    texture(clm);
    plane(100,30);
    pop();
    if (mouseIsPressed) {
    scene = 1;
    //initLevel2();
  }
  }  
 }
  

  
}