const initialState = {
  name:"",
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
        name: action.firstName+" "+action.secondName,
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