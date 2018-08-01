import React from "react";
import { connect } from "react-redux";
import { form } from "./actions";
import Detail from './components/details';
let  arr=[];
let val;
let disp=0;
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
    //console.log(this.props.productId)
    // Sets the initial state.
  }

  handleInputChange(parameter,e) {
    
     val=e.target.value
     if(parameter==="firstname")
     {
     arr[0]=val;
     }
     if(parameter==="lastname")
     {
     arr[1]=val;
     }
     if(parameter==="Age")
     {
     arr[2]=val;
     }
     if(parameter==="Email")
     {
     arr[3]=val;
     }
     if(parameter==="phone:no")
     {
     arr[4]=val;
     }
    
      disp=1;
   
  }

  render() {
    return (
     
      <div >
        <form > Enter Details<br/><br/>
  	 		<input type="text" placeholder="first name" onBlur={this.handleInputChange.bind(this,"firstname")}/>
         <br/>
         <input type="text" placeholder="Second name" onBlur={this.handleInputChange.bind(this,"lastname")}/>
  	 <br/>
     <input type="number" placeholder="Age" onBlur={this.handleInputChange.bind(this,"Age")}/>
         <br/>
     <input type="text" placeholder="E-mail" onBlur={this.handleInputChange.bind(this,"Email")}/>
         <br/>
         <input type="number" placeholder="phone:No" onBlur={this.handleInputChange.bind(this,"phone:no")}/>
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
