import React from 'react'



class ContactForm extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        nameError: false,
        contact: '',
        email: '',
        emailError: false,
        emailError2: false,
        message: '',
        messageError: false,
        formValid: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleBlur   = this.handleBlur.bind(this);
    }
    
    isValidEmail(email) {
      return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    }
    
    // isValidcontact(contactno) {
    //   return /^[6-9]\d{9}$/.test(contactno);
    // }  
    
    handleBlur(e) {
     
      const name = e.target.name; 
      const value = e.target.value;

      this.setState({ [name]: value  });

      if (value.length <= 0 && (name == 'name')) {
        this.setState({ nameError: true });
      } else {
        this.setState({ nameError: false });
      } 

      if (value.length <= 0 && (name == 'email')) {
        this.setState({ emailError: true });
        this.setState({ emailError2: false });
      } else {
        this.setState({ emailError: false });
        if(this.isValidEmail(value)) {
          this.setState({ emailError2: false });  
        } else {
          this.setState({ emailError2: true });  
        }
      } 

    }
    
    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value  });
    }
  
    handleSubmit(e) {
      const { name, email, message, nameError, emailError, emailError2, messageError } = this.state;
      
      this.setState({ nameError: name ? false : true });
      this.setState({ messageError: message ? false : true });
      this.setState({ emailError: email ? false : true });
      if (email && !emailError) { this.setState({ emailError2: this.isValidEmail(email) ? false : true }); }
      

      if (name && email && message && !nameError && !emailError && !emailError2 && !messageError) {
        this.setState({ formValid: true });
      } else {
        this.setState({ formValid: false });
      }

      e.preventDefault(); 
    }
    
    
    render() {
      
      const { name, email, message, nameError, emailError, emailError2, messageError, formValid } = this.state;

      if(!formValid) {
        
      return (
  <>
       <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">

    <div className="card-header bg-transparent border-0 text-center text-uppercase"><h3>{this.props.title}</h3></div>
    <div className="card-body">
      <form action="/" onSubmit={(e) => this.handleSubmit(e)} encType="multipart/form-data" autoComplete="off">
        <div className="form-group mb-2">
          <label className="block text-sm font-semibold text-gray-800">Your name<span className="text-danger">*</span></label>
          <input name="name" type="text" className="form-control block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Name" value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} style={{borderColor :nameError? 'red':""}} />
          { nameError
            ? <div className="alert alert-danger mt-2 text-red-600 ">Name is a required field.</div>
            : ''
          }
        </div>
        <div className="form-group mb-2">
          <label className="block text-sm font-semibold text-gray-800">Your email<span className="text-danger">*</span></label>
          <input name="email" type="email" className="form-control block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 " placeholder="Email" value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur} style={{borderColor :emailError? 'red':""}} />
          { emailError
            ? <div className="alert alert-danger mt-2 text-red-700">Email is a required field.</div>
            : ''
          }
          { emailError2
            ? <div className="alert alert-danger mt-2">Email invalid.</div>
            : ''
          }
        </div>
        <div className="form-group mb-2">
          <label className="block text-sm font-semibold text-gray-800">Your contact number (Optional)</label>
          <input name="contact" type="text" className="form-control block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 " placeholder="Contact" onChange={this.handleChange} value={this.state.contact}  style={{borderColor :ContactForm? 'red':""}} />
        </div>
        <div className="form-group mb-2">
          <label className="block text-sm font-semibold text-gray-800">Message<span className="text-danger">*</span></label>
          <textarea name="message" type="text" className="form-control block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 " placeholder="Message" value={this.state.message} onChange={this.handleChange} onBlur={this.handleBlur} style={{borderColor :messageError? 'red':""}} />
          { messageError
            ? <div className="alert alert-danger mt-2 text-red-600 ">Message is a required field.</div>
            : ''
          }
        </div>
          <p className="text-center mb-0"><input type="submit" className=" w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 " value="Submit Now" /></p>
      </form>
      
    </div>
  </div>
           <p className="text-center "><a href="https://codematra.com/how-to-create-a-contact-form-in-react-js-using-bootstrap-with-validation/">Learn To Create Contact Form</a></p>
      
       </div>
       </>
      );
        } else {
         return (
           <div className="thankyou_details">
             <div className="alert alert-success mt-3">Mail sent successfully.</div>
           </div>
           
          )
        }
    }
  }
  export default ContactForm