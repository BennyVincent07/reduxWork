export const form = (val) => ({
  type: 'form',
  fName: val[0],
  sName: val[1],
  age:val[2],
  email: val[3],
  phone: val[4]
});
