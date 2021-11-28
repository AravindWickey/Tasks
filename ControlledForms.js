import React from "react";
import "./App.css";
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';




class ControlledForm extends React.Component{
    constructor(){
     super();
     this.state = {
        FirstName:'',
        Phone:'',
        email:'',
        Point:'',
        Comment:'',
        errors:{
            FirstName:'',
            Phone:'',
            email:'',
            Point:'',
            Comment:'', 
        },
        
        };   
    }
    SubmitChange =  (e) => {
        let {name,value}=e.target
    let errors={...this.state.errors}
    if(value==="")
    {
        errors[name]="required"
    }
    else
    {
        errors[name]=""
    }
    if(name==="Phone")
    {
        let pattern =/^[0-9\b]+$/;
        if(pattern.test(value))
        {
            errors.Phone=""   
        }
        else if(value==="") 
        {
            errors.Phone="required"
        }
        else 
        {
                errors.Phone="alphabets not allowed"
        }
    }
    if(name==="email")
    {
        let pattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if(pattern.test(value))
        {
            errors.email=""   
        }
        else if(value==="") 
        {
            errors.email="required"
        }
        else 
        {
                errors.email="enter a valid email"
        }
    }
    this.setState({errors,[name]:value});
      };
      handleSubmit=(e)=>{
        e.preventDefault()
        let err= Object.keys(this.state).filter((keys)=>{
           if(this.state[keys]===""&&keys!=="error")
        {
           return keys
        }
        })
        if(err.length>=1)
        {
           alert("plese fill all the fields")
        }
        else
        {
           console.log(this.state) 
          alert("submitted successfully")
          
        }
    };
    render(){
        return(
            <><div className="FormStyle">
            <h4>Form</h4>
            <form onSubmit={(e)=>this.handleSubmit(e)}>
            <div>
                <label>Name</label>&nbsp;
                <input type="text" name="FirstName" value={this.state.FirstName} onChange={(e)=>this.SubmitChange(e)} ></input>
            </div>
            <span style={{ color: 'red' }}>
                {this.state.errors.FirstName}
            </span>
            <br/>
            <div>
                <label>Phone</label>&nbsp;
                <input type="text" name="Phone" value={this.state.Phone} onChange={(e)=>this.SubmitChange(e)} maxLength='10' minLength='10' ></input>
            </div><span style={{ color: 'red' }}>
                {this.state.errors.Phone}
            </span><br/>
            <div>
                <label>Email</label>&nbsp;
                <input type="email" name="email" value={this.state.email} onChange={(e)=>this.SubmitChange(e)} ></input>
            </div><span style={{ color: 'red' }}>
                {this.state.errors.email}
            </span><br/>
            <div className="PointsClass">
                <label>Points</label>&nbsp;
                <input type="radio" name="Point" value="one" onChange={(e)=>this.SubmitChange(e)}  />One &nbsp;
                <input type="radio" name="Point" value="Two" onChange={(e)=>this.SubmitChange(e)}/>Two &nbsp;
                <input type="radio" name="Point" value="Three" onChange={(e)=>this.SubmitChange(e)}/>Three &nbsp;             
                <input type="radio" name="Point" value="Four" onChange={(e)=>this.SubmitChange(e)}/>Four &nbsp;
                <input type="radio" name="Point" value="Five" onChange={(e)=>this.SubmitChange(e)}/>Five &nbsp;
            </div><span style={{ color: 'red' }}>
                {this.state.errors.Point}
            </span><br/>
            <div className="CommentClass">
                <TextareaAutosize className="comment" name="Comment" value={this.state.Comment} onChange={(e)=>this.SubmitChange(e)} aria-label="minimum height"
                minRows={3} placeholder="Comments" style={{ width: 250 }}  ></TextareaAutosize>
            </div><span style={{ color: 'red' }}>
                {this.state.errors.Comment}
            </span><br/> 
            <Button type="submit" variant="contained">Submit</Button> &nbsp;
            </form>
            </div>
            </>
        )
    }
}

export default ControlledForm;