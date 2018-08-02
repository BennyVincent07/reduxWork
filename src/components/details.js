import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    name: state.forms.name,
    age:state.forms.age,
    email:state.forms.email,
    phone:state.forms.phone,
});
 
const Detail =({name,age,email,phone})=>{
  
    return(
        <h3> 
            <br/>        
    NAME: {name}  <br/>
    Age :{age}<br/>
    E-mail: {email}<br/>
    Phone :{phone}<br/>
        </h3>
    );
   
};
export default connect(mapStateToProps)(Detail);
