class Ground
{constructor(x,y,width,height)
    {
        var options=
        {
        isStatic:true,
        friction:0.5,
        density:1.2
        }
     
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world, this.body);
    }
    display(){
        strokeWeight(4);
    stroke("red");
fill("red");
rect(this.x,this.y,this.width,this.height)
    }
    
}

    


    


