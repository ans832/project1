let form = document.querySelector("Form");
form.addEventListener("submit" , function(event){
    event.preventDefault();
    console.dir(form);
    let user = this.elements[0];
    let branch = this.elements[1];
    let course = this.elements[2];
    let gmail = this.elements[3];

    console.log(user.value);
    console.log(branch.value);
    console.log(course.value);
    console.log(gmail.value);
    alert (`hii my name is ${user.value} and my branch is ${branch.value} and course is ${course.value} and my login email is ${gmail.value}`);
});
let timeout;

function myfun()  {
    timeout = setTimeout(alertfunc , 5000);
}
function alertfunc(){
    alert("please signin or login first ");
}
let popup = document.getElementById("popup");
function openpopup(){
    popup.classList.add("open-popup");
}
function closepopup(){
    popup.classList.remove("open-popup");
}