import React from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import {form } from "../actions/index";

let  arr={firstname:"",
lastname:"",
age:0,
email:"",
phone:0};
let val;
const mapDispatchToProps = dispatch => ({
    form : () => dispatch(form(arr))
  });
  

class Form extends React.Component
{

    constructor(props) {
        super(props);
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleRoute=this.handleRoute.bind(this)
        this.state = {
          value: " ",
        };
      }
    
      handleInputChange(e) {
        
         val=e.target.value
        switch(e.target.name)
        {
          case 'fname': arr.firstname=val
                        break;
          case 'sname': arr.lastname=val
                        break;
          case 'age':   arr.age=val
                        break;
          case 'email': arr.email=val;
                        break;
          case 'phone': arr.phone=val;
                       break;
        }   
      }
handleRoute(e)
{
    //e.preventDefault();
    this.props.form();
  this.props.history.push("/output");
         
//<Route path="/output" component={Detail} />
}
// handleSubmit(event) {
//     event.preventDefault();
//     const data = new FormData(event.target);
    
//     // fetch('/api/form-submit-url', {
//     //   method: 'POST',
//     //   body: data,
//     // });
//   }

render()
{

return(
    <div >
  <form onSubmit={this.handleRoute}> <h3>Enter Details</h3><br/><br/>
    <input type="text" placeholder="first name" name="fname" onBlur={this.handleInputChange.bind(this)}/>
<br/>
<input type="text" placeholder="Second name" name="sname" onBlur={this.handleInputChange.bind(this)}/>
<br/>
<input type="number" placeholder="Age" name="age" onBlur={this.handleInputChange.bind(this)}/>
<br/>
<input type="text" placeholder="E-mail" name ="email" onBlur={this.handleInputChange.bind(this)}/>
<br/>
<input type="number" placeholder="phone:No" name="phone" onBlur={this.handleInputChange.bind(this)}/>

<br/><input type="submit"/>
</form>
</div>
)
}
}
export default withRouter(connect(null,mapDispatchToProps)(Form));