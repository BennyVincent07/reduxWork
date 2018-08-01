const initialState = {
    fname:"",
    age:0,
    email:"",
    phone:0,
    isSubmitted:false
  };
  const forms = (state = initialState, action) => {
    switch (action.type) {
      case 'form':
        return {
          ...state,
          fName: action.fName+" "+action.sName,
          age:action.age,
          email:action.email,
          phone:action.phone,
          isSubmitted:true
        };
     
      default:
        return state;
    }
  }
  export default forms;