import React from "react";
import { connect } from "react-redux";
import { form } from "./actions";
import Detail from './components/details';
let  arr={firstname:"",
lastname:"",
age:0,
email:"",
phone:0};
let val;

const mapStateToProps = state => ({
  isSubmitted: state.forms.isSubmitted
});


const mapDispatchToProps = dispatch => ({
  form : () => dispatch(form(arr))
});

class example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " "
    };
  }

  handleInputChange(parameter,e) {
    
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

  render() {
    return (
     
      <div >
        <form > Enter Details<br/><br/>
  	 		<input type="text" placeholder="first name" name="fname" onBlur={this.handleInputChange.bind(this,"firstname")}/>
         <br/>
         <input type="text" placeholder="Second name" name="sname" onBlur={this.handleInputChange.bind(this,"lastname")}/>
  	 <br/>
     <input type="number" placeholder="Age" name="age" onBlur={this.handleInputChange.bind(this,"Age")}/>
         <br/>
     <input type="text" placeholder="E-mail" email ="email" onBlur={this.handleInputChange.bind(this,"Email")}/>
         <br/>
         <input type="number" placeholder="phone:No" name="phone" onBlur={this.handleInputChange.bind(this,"phone:no")}/>
         <br/>
        
     <br/><input type="button" onClick={this.props.form} value="Submit form"/>
  	 </form>
		 <div>
      {this.props.isSubmitted&&<Detail/>}
   
			 
			 </div>
  	</div>
  	
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(example);
