class Tree {

    constructor(x,y) 
    {   

        x = this.x;
        y = this.y;
        width = this.width;
        height = this.height;
        this.image = loadImage("tree.png");

        

        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2,
        }

        

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display() {

        var pos = this.body.position;

        push();

            translate(pos.x,pos.y);
            imageMode(CENTER);
        
            rect(0,0,800,20);
            image(this.image, 1150, 450, 700,700);
            

            


        pop();


    }




}