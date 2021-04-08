class Stone{
	constructor(x,y,width, height)
	{
	// assign options to the rubber ball
	var options = {
		'restitution':0.5,
          'friction':0.9,
          'density':12
	}
		this.x=x;
		this.y=y;
		this.width=width
        this.height=height
		this.body=Bodies.rectangle(this.x, this.y, 8, 8, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			strokeWeight(2);
			stroke("black");
			fill("grey");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height)
			pop()
	}

}