var maxDrops = 100;
var thunder;
var thunderimg, thunderimg2, thunderimg3,thunderimg4;

function preload()
{
    thunderimg = loadImage("images/thunderbolt/1.png")
    thunderimg2 = loadImage("images/thunderbolt/2.png")
    thunderimg3= loadImage("images/thunderbolt/3.png")
    thunderimg4 = loadImage("images/thunderbolt/4.png")
 
}

function setup()
{
    createCanvas(200,1000)
    umbrella = new Umbrella(300,550)
    for(var i=0; i<maxDrops; i++)
    {
        drops.push(new Drop(random(0,400),random(0,400)))
    }

    
}

function draw()
{
    umbrella.display()

    drops.update()
    drops.display()

    thunder()

    drawSprites()
}   

function thunder()
{
        thunder = createSprite(300,50,20,20)
        var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: thunder.addImage(thunderimg);
              break;
      case 2: thunder.addImage(thunderimg2);
              break;
      case 3: thunder.addImage(thunderimg3);
              break;
      case 4: thunder.addImage(thunderimg4);
              break;
      default: break;
    }
    thunder.lifetime(10)

}

