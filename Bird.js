class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectoryimage = loadImage("sprites/smoke.png");

    this.track = []
  }

  display()
  {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x >220 && this.body.velocity.x > 10)
    {
    var position = [this.body.position.x , this.body.position.y];
    this.track.push(position);
    console.log(this.track);
    for(var i = 0; i < this.track.length; i++)
      {
        image(this.trajectoryimage , this.track[i][0] , this.track[i][1]);
      }
    }
    position = [];
  }
}