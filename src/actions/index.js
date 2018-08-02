export const form = (inputData) => ({
    type: "form",
    firstName: inputData.firstname,
    secondName: inputData.lastname,
    age:   inputData.age,
    email: inputData.email,
    phone: inputData.phone
});
