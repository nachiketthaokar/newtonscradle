class rope {
    constructor(bodyA,pointB){
        var option = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
            
      
        } 
        this.pointB = pointB;
        this.sling=Constraint.create(option)
        World.add(world,this.sling);    
        
    }
display(){
   
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        rope1=new rope(bob1.body,roof.body-bobdaimeter*2,0);
}


}