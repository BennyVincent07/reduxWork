import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    Name: state.forms.fName,
    age:state.forms.age,
    Email:state.forms.email,
    Phone:state.forms.phone,
  });


    const Detail =({Name,age,Email,Phone})=>(
    <h3> 
      <br/>        
    NAME: {Name}  <br/>
    Age :{age}<br/>
    E-mail: {Email}<br/>
    Phone :{Phone}<br/>
    </h3>
)

export default connect(mapStateToProps)(Detail);