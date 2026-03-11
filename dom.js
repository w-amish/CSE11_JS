const res = document.getElementById("para");
res.innerHTML = "Hello World";
res.innerText="<b> Hello World </b>";
res.title = "This is a sample file";
document.write("This is a sample file");
const a=document.getElementsByClassName("para");
a[0].innerHTML="This is array file";
const b=document.getElementsByTagName("p");
b[0].innerHTML="This is file";
b[1].style.color="red";
b[2].innerText="bold";
const c=document.querySelector("p");
const d=document.querySelectorAll("ul li");
for(x in d){
    d[x].style.color="blue";
    d[x].style.backgroundColor="yellow";
    d[x].style.color="green";
}