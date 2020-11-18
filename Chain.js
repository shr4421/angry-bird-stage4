class Chain {

    //in the constructor of chain class we give bodyA , bodyB
    constructor(bodyA,bodyB){
        //propertiies for the chain 
        var options={
            bodyA:bodyA,//assign bodyA to bodyA
            bodyB:bodyB,//assigm bodyB to bodyB
            length:10,//giving length of chain as 10
            stiffness:0.04//giving stiffness of the chain (how tight the rope is)
        }
        this.chain=Constraint.create(options);// creating chain using Constraint.create().
        World.add(world,this.chain);//adding chain into the world

    }
     display(){
      var pointA=this.chain.bodyA.position;// setting pointA at bodyA
      var pointB=this.chain.bodyB.position;//setting pointB at bodyB

      line(pointA.x,pointA.y,pointB.x,pointB.y);// drawing a line between pointA and pointB

      



     }
}