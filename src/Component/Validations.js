export default  function Validation  (iteam)  {
     
    const eror={}
    const password_pattern = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/';
    const email_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/;
    if(iteam.name ===""){
        eror.name="name is requird"
    }

    if(iteam.email ===""){
        eror.email =" email is required"
    }

    else if(!email_pattern.test(iteam.email)){
        eror.email =" email did not mathch"
    }
  if(iteam.password ==="")  {
    eror.password =" password is requird"

    }
    else if(!password_pattern.test(iteam.password)){
        eror.email  ="password did not match "
    }
    return eror;

}