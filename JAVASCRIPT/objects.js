// object in java is a container that is used to store multiple values in a single variable.
// An object is created using curly braces {} with an optional list of properties.
// A property is a "key: value" pair, where key is a string (also called a "property name"), and value can be anything.
// An object can be stored in a variable, and the properties can be accessed using dot (.) notation.
// Objects are mutable, i.e., they can be modified after creation.
// Objects are used to store keyed collections of various data and more complex entities.
// An object can be created with figure brackets {…} with an optional list of properties.
/*
function signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let cpass = document.getElementById("confirm").value;

    if (pass !== cpass) {
        alert("Passwords do not match!");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: pass  // Store password (not recommended in plaintext)
    };

    console.log("User Object:", user);
    alert("User added! Go to login page.");
}
*/
let empty_obj={};
empty_obj.name="jhon";
empty_obj.surname="smith";
empty_obj.name="pete";
delete empty_obj.name;
console.log(empty_obj);

isEpty=(obj)=> {
    for (let key in obj) {
        return false;
    }
    return true;
}
console.log(isEpty(empty_obj));
let em_o={}
let tot_sal=(Salr)=>{
    if (isEpty(Salr)) {
        return 0;
    }
    let sum=0;
    for (let key in Salr) {
        sum+=Salr[key];
    }q
}

let menu = {
    width: +200,
    height: 300,
    title: "My menu"
};
let mulitply_numy2=(menu)=>{
    for (let i in menu){
        if (typeof menu[i]== "number" ){
            menu[i]*=2;
        }
    }
}
mulitply_numy2(menu);
console.log(menu);







