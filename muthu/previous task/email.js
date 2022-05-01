function validateEmail(email) 
    {
        var re = /^([A-Za-z0-9_.])+\@([a-z])+\.([a-z])+$/;
        return re.test(email);
    }
    
console.log(validateEmail('muthushankar95@gmail.com'));