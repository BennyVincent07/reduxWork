export const form = (val) => ({
  type: 'form',
  fName: val.firstname,
  sName: val.lastname,
  age: val.age,
  email: val.email,
  phone: val.phone
});
