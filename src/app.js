import React from "react";
import { connect } from "react-redux";
import Detail from './components/details';
import Form from './components/form';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const mapStateToProps = state => ({
  isSubmitted: state.forms.isSubmitted
});



class example extends React.Component {
   render()
   {
     return(
      <Router>
      <div>
        <ul style={{style: 'none'}}>
          <li style={{float :'left'}}>
           <Link to="/home" >FORM</Link> 
          </li>
         </ul>
        
        <br/>
        <br/>
        <Route exact path="/home" component={Form} />
        <Route path="/output" component={Detail} />
      </div>
    </Router>
     )
    }
  }

export default connect(mapStateToProps)(example);
