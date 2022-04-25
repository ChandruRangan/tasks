function validation()
{
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let password= document.getElementById("psw").value;
    let conformpassword = document.getElementById("cpsw").value;
    var password_expression= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if (name=='')
    {
       alert('Please enter your name');
    }
    else if(!letters.test(name))
    {
       alert('Name requires only characters');
    }
    else if(email=='')
    {
      alert('Enter mail id');
    }
    else if(!filter.test(email))
    {
      alert('Enter correct mail id');
    }
    else if (password != conformpassword)
    {
      alert('Password not matched');
    }
    else if(password=='')
    {
      alert('Enter the password');
    }
    else if (conformpassword =='')
    {
      alert('Re enter the password');
    }
    else if(!password_expression.test(password))
    {
      alert('Should contain uppercase lowercase atleast one number,special characters');
    }
    else if(document.getElementById("pws").value.length < 8 )
    {
      alert('Password minimum lenght is 8');
    }
    else if(document.getElementById("psw").value.length > 14 )
    {
      alert('Password maximum lenght is 14');
    }
}