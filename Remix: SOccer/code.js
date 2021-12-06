var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["686eabaf-c93e-4e51-8353-49f6e7d42305","f5f51e5b-d5e6-4462-a057-4683b15404dc","4ed6b00e-a27b-468d-bd0b-cc3f2e943895","1da25e42-6a28-42cf-881f-9ced66587d60","a9b9ca93-66fd-4009-8bdd-4e9b2c1187b6","b00d239c-08cd-495b-9215-41559851e1af"],"propsByKey":{"686eabaf-c93e-4e51-8353-49f6e7d42305":{"name":"player","sourceUrl":"assets/v3/animations/ZbLA0dnxMii_n_NGXsYhRtL7k15AD94-AATjT843Prk/686eabaf-c93e-4e51-8353-49f6e7d42305.png","frameSize":{"x":60,"y":91},"frameCount":1,"looping":true,"frameDelay":4,"version":"OYF1ymBCSA81vmN39S9GJwzwyYWpNyXq","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":91},"rootRelativePath":"assets/v3/animations/ZbLA0dnxMii_n_NGXsYhRtL7k15AD94-AATjT843Prk/686eabaf-c93e-4e51-8353-49f6e7d42305.png"},"f5f51e5b-d5e6-4462-a057-4683b15404dc":{"name":"player_dive","sourceUrl":"assets/v3/animations/ZbLA0dnxMii_n_NGXsYhRtL7k15AD94-AATjT843Prk/f5f51e5b-d5e6-4462-a057-4683b15404dc.png","frameSize":{"x":92,"y":51},"frameCount":1,"looping":true,"frameDelay":4,"version":"hW59QYe_Ikp.oY3iZVxC4JKXFKN2qBdk","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":51},"rootRelativePath":"assets/v3/animations/ZbLA0dnxMii_n_NGXsYhRtL7k15AD94-AATjT843Prk/f5f51e5b-d5e6-4462-a057-4683b15404dc.png"},"4ed6b00e-a27b-468d-bd0b-cc3f2e943895":{"name":"player_kick","sourceUrl":"assets/v3/animations/ZbLA0dnxMii_n_NGXsYhRtL7k15AD94-AATjT843Prk/4ed6b00e-a27b-468d-bd0b-cc3f2e943895.png","frameSize":{"x":77,"y":77},"frameCount":1,"looping":true,"frameDelay":4,"version":"gWTK8bqRQO_ga8fNDOQSXjq9g0MEqfrI","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":77},"rootRelativePath":"assets/v3/animations/ZbLA0dnxMii_n_NGXsYhRtL7k15AD94-AATjT843Prk/4ed6b00e-a27b-468d-bd0b-cc3f2e943895.png"},"1da25e42-6a28-42cf-881f-9ced66587d60":{"name":"robot","sourceUrl":null,"frameSize":{"x":77,"y":69},"frameCount":1,"looping":true,"frameDelay":12,"version":"KTsQjJWzL9h_8cY2W4MjmC2nj2v6CySS","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":69},"rootRelativePath":"assets/1da25e42-6a28-42cf-881f-9ced66587d60.png"},"a9b9ca93-66fd-4009-8bdd-4e9b2c1187b6":{"name":"sports_scoccer_1","sourceUrl":"assets/api/v1/animation-library/gamelab/AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm/category_backgrounds/sports_scoccer.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm/category_backgrounds/sports_scoccer.png"},"b00d239c-08cd-495b-9215-41559851e1af":{"name":"soccer_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball = createSprite(200, 200)
ball.setAnimation("sports_scoccer_1")
function draw(){
drawSprites();  
}



var playerPaddle= createSprite(194,323,10,100);
    playerPaddle.shapeColor="blue";
  playerPaddle.setAnimation("player_kick");
    var computerPaddle= createSprite(194,323,100,10);
    computerPaddle.shapeColor="red";
    computerPaddle.setAnimation("player_dive");
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="yellow";
    ball.setAnimation("soccer_blue_1");
    ball.scale=0.1;
    
 createEdgeSprites();

function draw() {
  background("white");
  if(ball.isTouching(playerPaddle) || ball.isTouching(computerPaddle))
  {
    playSound("assets/hit.mp3");
  }
 if(ball.isTouching(bottomEdge)|| ball.isTouching(topEdge)){
playSound("assets/wall_hit.mp3", false);
  
 } 
  
  if (keyDown("up")) {
    playerPaddle.y=playerPaddle.y-10;
  }
  
  if (keyDown("down")) {
    playerPaddle.y=playerPaddle.y+10;
  }
  
  if(keyDown("space"))
  {
     ball.velocityX=2;
     ball.velocityY=3;
  }
  
  computerPaddle.y=ball.y;

  drawnet();
  
 
    
 
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  drawSprites();
  
}



function drawnet()
{  
  for(var num=0;num<400;num=num+20)
  {
    line(200,num,200,num+10);
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
