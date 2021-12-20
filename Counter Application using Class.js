import React, {Component} from "react";

class CounterComponent extends Component {
        constructor(props){
            super(props);
    this.state={
            initial : 5
        }
    }        
    Increment = () =>{
        this.setState({initial:this.state.initial+1})
    }
    Decrement= () =>{
        this.setState({initial:this.state.initial-1})
    }
    reset=()=>{
        this.setState({initial:5})
    }
    
    render(){
        return(<>
                <h3>{this.state.initial}</h3>
                <button onClick = {this.Increment}>Increments</button>
                <button onClick = {this.Decrement}>Decrement</button>   
                <button onClick = {this.reset}>Reset</button>   

        </>
        ) 
    }

}
export default CounterComponent;