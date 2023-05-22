// import axios from 'axios'
// import React,{useState} from 'react'
// import { useNavigate} from 'react-router-dom'

// import 'react-toastify/dist/ReactToastify.css';
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Validations from './Validations';
// const SingupPage = () => {
//   const [ iteams,setIteams]=useState({
//     email :"",
//     name :"",
//     password :""
//   })
//   const [ errors , setErrors] = useState()


//   const navigate=useNavigate();


//   const handleInput=(e)=>{
//     const obj ={...iteams , [e.target.name]:e.target.value}
//     setIteams(obj)
//   }


//   const handleSubmit= (e)=>{
//     e.preventDefault()
//     const tre ={...iteams , [e.target.name]:e.target.value}
//     setIteams(tre)

//     console.log("bgjibevi",iteams)


//     setErrors(Validations(iteams))
//    axios
//         .post("https://reqres.in/api/register", {

//           email:iteams.email,
//           password: iteams.password,
//         })
//         .then((res) => {
//           console.log(res.data);
//           const token="QpwL5tke4Pnpja7X4";
//           localStorage.setItem('token',token)
//           localStorage.getItem('token',token)
//          navigate("/LoginPage")
//           // if (token && token === "success") {
//           //   toast.success("hii");
//           //   navigate("/LoginPage")
//           // }

//          })
//         .catch((err) => {
//           console.log(err);
//         });


//   }



// //   const markAsHome = () => {
// //     toast(`Article successfuly defined as a recent article` );
// // }

//   return (
//     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//     <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
//         <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
//            Signup
//         </h1>
//     <form className='mt-6' onSubmit={(e)=>handleInput}>
//       <div className='mb-2'  >
//       <label for="name" className="block text-sm font-semibold text-gray-800"> name</label> 
//       <input type='text' onChange={handleInput} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-400" style={{borderColor :errors?.name? 'red':""}} />
//       { errors?.name && <p className='text-red-700'>{errors?.name}</p>}
//       </div>
//       <div className='mb-2' >
//       <label className="block text-sm font-semibold text-gray-800"> Email </label> 
//       <input type='email' onChange={handleInput} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" style={{borderColor :errors?.email? 'red':""}} /> 
//       { errors?.email && <p className='text-red-700'>{errors?.email}</p>}
//       </div>
//        <div className='mb-2' >

//      <label className="block text-sm font-semibold text-gray-800" > password </label> 
//      <input type='text'onChange={handleInput} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" style={{borderColor :errors?.password? 'red':""}} /> 
//      { errors?.password && <p className='text-red-700'>{errors?.password}</p>}  
//        </div>
//        <div className='mt-6'>
// <button type='submit'className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" >Signup</button>
// </div>
// </form>
// <ToastContainer/>
// </div>
// </div>
//   )
// }

// import React from "react";
// import 'react-toastify/dist/ReactToastify.css';
//  import { toast, ToastContainer } from "react-toastify";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// import validator from 'validator'


// const schema = yup.object().shape({
//   email: yup.string().email("invalid email").required("email is requird"),
//   password: yup.string().min(8).max(20).required("password is requird")
//   .matches(/^[a-z]+$/, 'One lowercase character')
//     .matches(/^[A-Z]+$/, 'One uppercase character')
//     .matches(/[@$!%*#?&]+/, "One special character")
//     .matches(/^\d+$/, 'One number'),
// });



// const SignupPage = () => {




//   const navigate=useNavigate();
//   const [errorMessage, setErrorMessage] = useState('')
//    // const [show setShow] =useState("false")
//   const [passwordShown,setPasswordShown]=useState(false)
//   const { register, handleSubmit, formState: { errors }, reset } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const onSubmitHandler = (data) => {
//     console.log({ data });

//     if(data.length<0){
//       return data;
//     }
//     else{
//     axios
//         .post("https://reqres.in/api/register", {

//                   email:data.email,
//                  password: data.password,

//       }  )
//         .then(response => {console.log(response.data)
//         toast.success(" signup successful")
//         //toast.success("successful")

//           setTimeout(() => {
//              navigate("/LoginPage")``
//          }, 2000);
//       })
//         .catch(error => {console.log(error.data)
//         toast.error("email id and password are not valid")});
//    };
//    }
// //    const handleValidate=(e)=>{
// //   if (validator.isStrongPassword(e, {
// //     minLength: 8, minLowercase: 1,
// //     minUppercase: 1, minNumbers: 1, minSymbols: 1
// //   })) {
// //     setErrorMessage('')
// //   } else {
// //     setErrorMessage('Is Weak Password')
// //   }
// //  }
//  const togglePassword = () => {

//   setPasswordShown(!passwordShown);
//  };

//   return (

//     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
//              <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
//               Signup        </h1>

//     <form className='mt-6' onSubmit={handleSubmit(onSubmitHandler)}>
//         <div className='mb-2' >
//           <label className="block text-sm font-semibold text-gray-800">
//             Email
//         </label>
//         <input {...register("email")} placeholder="email" type="email" required  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-400" style={{borderColor :errors.email ?'red':""}} />
//       <p className='text-red-700'>{errors.email?.message}</p>


//       <div className="mb-2" > 
//         <label className=" block text-sm font-semibold text-gray-800">  
//           <input type="number"></input>
//         </label>
//       </div>

//         </div>

//          <div className='mb-2 '>
//           <label className="block text-sm font-semibold text-gray-800">Password</label>
//            <div className="relative">

//            <input
//         {...register("password")}
//         placeholder="password"
//         type={passwordShown ? "text" : "password"}
//          //onChange={(e)=>{handleValidate(e.target.value)}}
//         required
//         className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-400" style={{borderColor :errors.password? 'red':""}}
//       />
//            <div className="absolute top-1 right-3">


//  {passwordShown ? (  
//   <svg onClick={togglePassword} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
//  </svg>)

//  :
//  (<svg onClick={togglePassword} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
//  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//  </svg>)
//  }
//  </div>
//      <div>
//      {errorMessage === '' ? null :
//         <span style={{
//           fontWeight: 'bold',
//           color: 'red',
//         }}>{errorMessage}</span>}
//       <p className='text-red-700'>{errors.password?.message}</p>
//       </div>  

//          </div >
//          </div>

//          <div className='mb-2' >
//          <button type="submit " className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" >Sign up</button>
//          </div>


//       <ToastContainer/>
//     </form>
//     </div>
//     </div>
//   );
// };
// export default SignupPage;



import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
//import NumberInput from 'react-number-input';

import ReactCountriesInput from 'react-countries-input'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
//import GoogleIcon from '@material-ui/icons/Google';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f0f0f0',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 30,
    color: '#555',
    cursor: 'pointer',
  },
}));



const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[^-\s][a-zA-Z0-9!@$%#^&()_+-=[\]{}\\:'"]+$/, { message: "Username must  not be start with space" })
    //.trim()
    //.matches(/^[^\s][\w\s]*/," user name can not start with white space") with space in your name
    .required("Username is required"),

  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  phone: Yup.string().required("number is required")
    .matches(/^\d{10,14}$/, " invalid phone number")

});

const SignupPage = () => {
  const classes = useStyles();

  const handleKeyPress = (e) => {
    if (e.charCode === 32) {
      e.preventDefault()
    }
  }
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  //const value= useMemo(() => countryList().getData(), [])
  const handleSubmit = (values, { setSubmitting }) => {
    debugger
    console.log(values);
    setSubmitting(false);
    axios
      .post("https://reqres.in/api/register", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res.data, "token");

        const token = "QpwL5tke4Pnpja7X4";
        localStorage.setItem("token", token);
        toast.success("Signup Successfull", {
          position: "top-center",
          
        });
        setTimeout(() => {

          navigate("/LoginPage");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error Notification!", {
          position: "top-center",
        });
        alert("server err");
      });
    // toast.success("Signup Successfull", {
    //   position: "top-center",
    // });
  };

  return (
    <>

      <Formik
        validationSchema={schema}
        initialValues={{ name: "", email: "", password: "", phone: "" }}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,


          //options,
        }) => (
          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                Signup        </h1>
              <form className=" mt-6" noValidate onSubmit={handleSubmit}>
                <div className=" mb-2">
                  <label
                    className="form-label block text-sm font-semibold text-gray-800 "
                    htmlFor="form2Example17"
                  >
                    Your Name
                  </label>

                  <input
                    type="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    onKeyPress={handleKeyPress}
                    placeholder="Your Name"
                    className="form-control inp_text   block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-400"
                    id="name"
                    style={{
                      borderColor: errors.name ? "red" : "",
                    }}
                  />
                </div  >
                <p
                  className="error"
                  style={{ color: errors.name ? "red" : "" }}
                >
                  {
                    errors.name && touched.name && errors.name}
                </p>
                <div className=" mb-2" >

                  <label className="form-label block text-sm font-semibold text-gray-800 " >Number</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="numbe"
                      id="number"
                      placeholder="enter your mobile number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onKeyPress={handleKeyPress}
                      value={values.number}
                      className="form-control inp_text px-20  block w-full  py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-400"
                      style={{
                        borderColor: errors.number ? "red" : "",
                      }}

                    />
                    <div className="absolute top-1 left-3" >
                      {/* <PhoneInput
                                 defaultCountry="us"
                                 placeholder=" enter your mbl number"
                                value={values.number}
                                onChange={handleChange}
                                className=" outline-none"
                                /> */}


                      <PhoneInput
                        international
                        defaultCountry="RU"
                        pattern="^-?[0-9]\d*\.?\d*$"
                        value={values.number}
                        onChange={handleChange} />







                    </div>
                  </div>
                </div>

                <p className="error"
                  style={{ color: errors.number ? "red" : "" }}
                >
                  {errors.number && touched.number && errors.number}
                </p>

                <div className=" mb-2">
                  <label
                    className="form-label  block text-sm font-semibold text-gray-800  "
                    htmlFor="form2Example17"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyPress={handleKeyPress}
                    value={values.email}
                    placeholder="Enter  your emal"
                    className="form-control inp_text   block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-400"
                    id="email"

                    style={{
                      borderColor: errors.email ? "red" : "",
                    }}
                  />
                </div>
                <p
                  className="error"
                  style={{ color: errors.email ? "red" : "" }}
                >
                  {errors.email && touched.email && errors.email}
                </p>

                <div className="mb-2">
                  <label
                    className="form-label block text-sm font-semibold text-gray-800 "
                    htmlFor="form2Example27"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onKeyPress={handleKeyPress}
                      value={values.password}
                      placeholder="Enter password"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-400"
                      //  className="form-control"
                      style={{
                        borderColor: errors.password ? "red" : "",
                      }}
                    />

                    <div className="absolute top-1 right-3" >
                    token   <button
                        type="button"

                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </button>
                    </div>


                  </div>
                </div>
                <p
                  className="error"
                  style={{ color: errors.password ? "red" : "" }}
                >
                  {errors.password &&
                    touched.password &&
                    errors.password}
                </p>
                <div className="pt-1 mb-4">
                  <button
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                    disabled={isSubmitting}
                  
                    type="submit"
                  >
                    SignUp
                  </button>
                </div>
                <Grid container justify="center">
                  <Grid item>
                    <FacebookIcon className={classes.icon} />
                  </Grid>

                  <Grid item>
                    <GitHubIcon className={classes.icon} />
                  </Grid>
                  <Grid item>
                    <LinkedInIcon className={classes.icon} />
                  </Grid>
                </Grid>

              </form>
            </div>
          </div>
        )}
      </Formik>
      <ToastContainer /> SignupPage
    </>
  );
};

export default SignupPage;