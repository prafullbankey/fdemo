const validate = (values) => {
    //Email errors
   const errors = {};
   if (!values.email) {
       errors.email = 'Check Email';
   } else if (
       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{8,}$/i.test(values.email)
   ) {
       errors.email = 'Invalid email address';
   }
   //Password Errors
   if(!values.password  || values.password.length<6){
       errors.password = 'Check Password'
   }
   return errors;
 }
 export default validate;