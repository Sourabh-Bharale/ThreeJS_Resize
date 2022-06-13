import Sizes from "../Utils/Sizes"

export default class Experience{
    constructor(canvas){
        //global access
        window.experience=this

        //Options
        this.canvas=canvas

        //setup
        this.sizes=new Sizes()
        
        this.sizes.on('resize',()=>{
                this.resize()
        })
    }

    resize(){
        console.log("resize occured");
        
    }
}