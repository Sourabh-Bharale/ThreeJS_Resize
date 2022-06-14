import Sizes from "../Utils/Sizes"
import Time from "../Utils/Time"
export default class Experience{
    constructor(canvas){
        //global access
        window.experience=this

        //Options
        this.canvas=canvas

        //setup
        this.sizes=new Sizes()
        this.time=new Time()
        
        //sizes resize event
        this.sizes.on('resize',()=>{
                this.resize()
        })

        //time tick event
        this.time.on('tick',()=>{
            this.update()
        })
    }

    resize(){
        console.log("resize occured");
        
    }
    update(){
        console.log('experience Updated');
    }
}