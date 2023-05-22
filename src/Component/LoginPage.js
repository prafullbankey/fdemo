// import axios from 'axios'
// import React,{useState}from 'react'

// import { useNavigate } from "react-router-dom";
// import validate from './validate';

// const LoginPage = () => {
//   const [values, setValues]=useState(
//     {
//       email :"",
//       password :""

//     }
//   )
//   const [ eror , setEror]=useState({})
//   const navigate=useNavigate();

  
//   const handleInput=(e)=>{
//     const obj ={...values ,[e.target.name]: e.target.value}
//      setValues(obj)
//   }
  
//   const handleLogin=(values,e)=>{

//     e.preventDefault()
//       setEror(validate(values))
    
//       axios
//         .post("https://reqres.in/api/login", {
//           email:values.email,
//           password:values.password,
//         })
//          .then((res) => {
//           console.log(res.data);
//            const token1="QpwL5tke4Pnpja7X4";
//        const token2=localStorage.getItem('token')
//       if(token1===token2)
     
//      {
//        alert("SignIn is Successfully!!")
//       navigate("/HomePage")
//        }
//        else
//        {
//          alert("Invalid email id and password");
//       }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
      

//   }
//   return (
//     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//             <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
//                 <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
//                    Login
//                 </h1>
//       <form className="mt-6" onSubmit={handleLogin}>
//       <div className='mb-2' >
//       <label className="block text-sm font-semibold text-gray-800"> Email </label> 
//       <input type='email' onChange={handleInput} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" style={{borderColor :eror ? 'red':""}} /> 
//       { eror?.email && <p className='text-red-700'>{eror?.email}</p>}
//       </div>
//       <div className='mb-2' >
        
//         <label className="block text-sm font-semibold text-gray-800" > password </label> 
//         <input type='text'onChange={handleInput} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" style={{borderColor :eror? 'red':""}} /> 
//         { eror?.password && <p className='text-red-700'>{eror?.password}</p>}  
//           </div>
       
//      <div className='mt-6'>
//        <button type='submit'className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" >Login</button>
//      </div>
//      </form>
//     </div>
//     </div>
//   )
// }
// import React ,{useState} from "react";
// import 'react-toastify/dist/ReactToastify.css';
//  import { toast, ToastContainer } from "react-toastify";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import validator from 'validator'

// const schema = yup.object().shape({
//   email: yup.string().email("Invalid Email").required("Email is requird"),
//   password: yup.string().min(5,"to weak").max(32," to strong ").required(" password is requird"),
// });

// const LoginPage = () => {
//   const navigate=useNavigate();
//   const [errorMessage, setErrorMessage] = useState('')
//   const [passwordShown,setPasswordShown]=useState(false)
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const onSubmitHandler = (data) => {
//     console.log({ data });
    
//     if(data.length<0){
//       return data;
//     }
//     else{
//     axios
//         .post("https://reqres.in/api/login", {
          
//                   email:data.email,
//                  password: data.password,
                 
//       }).then(response=> {console.log(response.data)
//         const token2=(response.data.token)
       
//         console.log("token2",token2)  
//           const token1="QpwL5tke4Pnpja7X4";
//               if(token1===token2){
//                 navigate("/")
//         console.log("hiigijar")
//       toast.success("successful")
//       }
//     }).catch(error => {console.log(error.data)
//       toast.error("unseccful")});
        
    
      
   
 
//       //toast.success("successful")
    
//  }  
//   }

 
// //   const handleValidate=(e)=>{
// //   if (validator.isStrongPassword(e, {
// //     minLength: 4, minLowercase: 4,
    
   
// //   })) {
// //     setErrorMessage('')
// //   } else {
// //     setErrorMessage('is password is weak')
// //   }
// //  }
//  const togglePassword = () => {
 
//   setPasswordShown(!passwordShown);
//  };

//   return (
      
       
//     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
//              <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
//               Login        </h1>

//     <form className='mt-6'  onSubmit={handleSubmit(onSubmitHandler)}>
//       <div className='mb-2' >
//         <label className="block text-sm font-semibold text-gray-800" >Email</label>
//         <input {...register("email")} placeholder="email" type="email" required  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-400" style={{borderColor :errors.email ?'red':""}} />
       
     
//       <p className='text-red-700' >{errors.email?.message}</p>
      

//       </div>

//         <div className='mb-2'  >
//         <label className="block text-sm font-semibold text-gray-800" > password</label>
//           <div className="relative">  
//           <input
//         // {...register("password")}
//         // placeholder="password"
//         // type={passwordShown ? "text" : "password"}
//         //  onChange={(e)=>{handleValidate(e.target.value)}}
//         required
//         className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-400" style={{borderColor :errors.email ?'red':""}}
//       />
//       <div className="absolute top-1 right-3">
       
//       {passwordShown ? (  
//   <svg onClick={togglePassword} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
// </svg>)
  
// :
// (<svg onClick={togglePassword} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
// <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
// <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// </svg>)
// }

//         </div>
//         <div>
//       {/* {errorMessage === '' ? null :
//         <span style={{
//           fontWeight: 'bold',
//           color: 'red',
//         }}>{errorMessage}</span>} */}
//       <p className='text-red-700'>{errors.password?.message}</p>
    
//       </div>
//         </div>
//         </div>
//         <div className='mb-2'  >
//         <button type="submit"  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" >Login</button>
     
//         </div>
      
     
//     </form>
//     <ToastContainer/>
//     </div>
//     </div>
//   );
// };

//  export default LoginPage

import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 30,
    color: '#555',
    cursor: 'pointer',
  },
}));

const schema = Yup.object().shape({
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
});

const LoginPage = () => {

  const classes = useStyles();

  const handleKeyPress =(e) =>{
    if(e.charCode ===32){
    e.preventDefault()
    }
  }
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    axios
      .post("https://reqres.in/api/login", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res.data);

        const token1 = "QpwL5tke4Pnpja7X4";
        const token2 = localStorage.getItem("token");

        if (token1 === token2) {
          toast.success("Login Successfully !", {
            position: "top-center",
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          toast.error("Error Notification!", {
            position: "top-center",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(" something error!", {
          position: "top-center",
        });
        alert("server err");
      });
    // toast.success("Success Notification !", {
    //   position: "top-center",
    // });
  };

  return (
    <>  <Formik
                    validationSchema={schema}
                    initialValues={{ email: "", password: "" }}
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
                    }) => (
                              
  <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
         <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                           Login        </h1>
                          <form  className='mt-6' noValidate onSubmit={handleSubmit}>
                            <div className=" mb-2">
                              <label
                                className="form-label   block text-sm font-semibold text-gray-800 "
                                htmlFor="form2Example17"
                              >
                                Email 
                              </label>
                              
                              <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                onKeyPress={handleKeyPress}
                                placeholder="Enter email id"
                                className="form-control inp_text   block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-400"
                                id="email"
                                 
                                style={{
                                  borderColor: errors.email ? "red" : "",
                                }}
                              />
                            </div>
                            <p
                              className="text-red-400"
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
                                value={values.password}
                                onKeyPress={handleKeyPress}
                                placeholder="Enter password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-400"
                                //  className="form-control"
                                style={{
                                  borderColor: errors.password ? "red" : "",
                                }}
                              />
                               
                               <div className="absolute top-1 right-3" >
                              <button
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
                                Login
                              </button>
                            </div>

                            <a className="small text-muted" href="#!">
                              Forgot password?
                            </a>
                            <p
                              className="mb-5 pb-lg-2"
                              style={{ color: "#393f81" }}
                            >
                              Don't have an account?{" "}
                              <Link to="/signup" style={{ color: "#393f81" }}>
                                Register here
                              </Link>
                            </p>
                          </form>
                          <Grid container className={classes.root}>
      <Grid item>
        <FacebookIcon className={classes.icon} />
      </Grid>
      <Grid item>
        <GitHubIcon className={classes.icon} />
      </Grid>
      <Grid item>
        <WhatsAppIcon className={classes.icon} />
      </Grid>
      <Grid item>
        <InstagramIcon className={classes.icon} />
      </Grid>
      <Grid item>
        <LinkedInIcon className={classes.icon} />
      </Grid>
    </Grid>
                        </div>
                      </div>
                    )}
                  </Formik>
                

      <ToastContainer />
      
    </>
  );
};

export default LoginPage;