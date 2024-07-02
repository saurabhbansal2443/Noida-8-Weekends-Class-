import React , {Component} from "react";


class UsingClass extends Component {
    
    constructor() {

        console.log("Constructor called ")
        super()

        this.state = {
            count :1 
        }

       this.handleCounter = function(value){
        console.log(value)
        this.setState({
            count : this.state.count + value ,
        })
    }
    }

    componentDidMount(){
        console.log("Component did mnount is called ")
    }   

   

    render(){

        console.log("Render called ")
        return (
            <> <button onClick={()=>this.handleCounter(1)}> + </button> {this.state.count } <button onClick={()=>this.handleCounter(-1)}> - </button></>
        )
    }
}

export default UsingClass