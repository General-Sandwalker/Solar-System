

function ajouter(){
    var name=document.getElementById("firstname").value.trim();
    var Lname=document.getElementById("lastname").value.trim();
    var mail=document.getElementById("email").value.trim();
    var password=document.getElementById("password").value.trim();

    var pass=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    var d=mail.indexOf('@');
    var f=mail.lastIndexOf('.');

    if(!verif(name) || name.length>8 || name[0]!==name[0].toUpperCase()){
        alert("First Name must start with a capital letter and be at most 8 characters long.");
        return false;
    }
    if(!verif(Lname) || Lname.length>8 || Lname[0]!==Lname[0].toUpperCase()){
        alert("Last Name must start with a capital letter and be at most 8 characters long.")
        return false;
    }
    if(d==-1 || f==-1 || mail.substring(0,d)=="" || mail.substring(d+1,f)=="" || mail.substr(f+1).length<2 || mail.substr(f+1).length>3 || !(verif(mail.substring(0,d))) || !(verif(mail.substr(f+1)))){
        alert("Please enter a valid email address.");
        return false;
    }
    if(!pass.test(password)) {
        alert("Password must be 8 characters long and include at least one letter, one number, and one special character.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}


function verif(ch){
    var ok=true;
    ch=ch.toUpperCase();
    for(var i=0;i<ch.length;i++){
        if(!("A"<=ch[i] && ch[i]<="Z") && ch[i]!=""){
          ok=false;
          break;
        }
    }
    return ok;
}