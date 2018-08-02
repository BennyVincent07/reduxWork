import React from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import {form } from "../actions/index";

let  input={firstname:"",
            lastname:"",
            age:0,
            email:"",
            phone:0
          };
const mapDispatchToProps = dispatch => ({
    form : () => dispatch(form(input))
  });

class Form extends React.Component
{

    constructor(props) {
        super(props);
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleRoute=this.handleRoute.bind(this)
       
      }
    
      handleInputChange(e) {
        
        var inputValue;
        inputValue=e.target.value
        switch(e.target.name)
        {
          case 'firstName': input.firstname=inputValue;
                        break;
          case 'secondName': input.lastname=inputValue;
                        break;
          case 'age':   input.age=inputValue;
                        break;
          case 'email': input.email=inputValue;
                        break;
          case 'phone': input.phone=inputValue;
                        break;
       }   
     }
  handleRoute(e)
  {
    e.preventDefault();
    this.props.form();
    this.props.history.push("/output");
  }
  render()
   {
    return(
    <div >
      <form onSubmit={this.handleRoute}> <h3>Enter Details</h3><br/><br/>
        <input type="text" placeholder="first name" name="firstName" onBlur={this.handleInputChange.bind(this)}/>
          <br/>
        <input type="text" placeholder="Second name" name="secondName" onBlur={this.handleInputChange.bind(this)}/>
          <br/>
        <input type="number" placeholder="Age" name="age" onBlur={this.handleInputChange.bind(this)}/>
          <br/>
        <input type="text" placeholder="E-mail" name ="email" onBlur={this.handleInputChange.bind(this)}/>
          <br/>
        <input type="number" placeholder="phone:No" name="phone" onBlur={this.handleInputChange.bind(this)}/>
          <br/>
        <input type="submit"/>
      </form>
    </div>
   )
  }
}
export default withRouter(connect(null,mapDispatchToProps)(Form));