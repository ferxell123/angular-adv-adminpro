const userName="Juan";
const userLastName="XXXXX";
const userFullName=userName+" "+userLastName;

if (userFullName.length>10){
    console.log("El nombre es muy largo");
}
const date = new Date().toUTCString();

const printValues=(userFullName,userLastName,userName)=>{
  console.log(userFullName);
  console.log(userLastName);
  console.log(userName);
};

printValues(userFullName,userLastName,userName);
