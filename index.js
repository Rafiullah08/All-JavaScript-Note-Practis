import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


let userData = []
// registration function
async function register(email, password) {
    
  const isEmailRegisterd = userData.some(user => user.email === email)
  if (isEmailRegisterd) {
    return { message: "Email is already registered" };
  } 

  const hashedPassword = await bcrypt.hash(password, 10);
  userData.push({ email, hashedPassword })  ;

  return { message: "Registration successful", userEmail :email , userpass: hashedPassword };
  
}

const adminEmail = "admin@.com";
const adminPass = "asdf123";
const thirdAdminEmail = "jon@gmail.com"
const fourthAdminEmail = "doy@gmail.com"
const adminRegister = await register(adminEmail, adminPass);
const admintwo = await register(adminEmail, adminPass);
 const thirdAdmin =  await register(thirdAdminEmail, adminPass);
 const fourthAdmin = await register(fourthAdminEmail, adminPass);

// console.log(adminRegister);
// console.log(admintwo);
// console.log(thirdAdmin);
// console.log(fourthAdmin);






// login function
 async function login(email, password) {
  const user = userData.find(user => user.email === email);
  if (!user) {
      return { message: "Invalid email or password" };
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword);
  if (!isPasswordCorrect) {
      return { message: "Invalid email or password" };
  }

  const token = jwt.sign({ userId: email }, "key");
  return {
      message: "Login successful",
      token: token
  };
}



const adminLogin =await login(adminEmail,adminPass);
const adminLogins = await login(adminEmail,"hjhgh");


// console.log(adminLogin);
// console.log(adminLogins);



// forgot password function
let otpStore = []
function forgotPassword(email) {

  const user = userData.find(user => user.email === email);
if(!user){
  return {msg : "user with given email is not exists"}
}

let otp = "";
 for (let i = 0; i < 4; i++) {
otp += Math.floor(Math.random() * 10);
 }
otpStore.push(otp)
return {userotp : otp}
    
}

const forgotEmail = forgotPassword(adminEmail)
// console.log(forgotEmail);
 

  

  // reset password function
async function resetPassword(email,otp,newPass){
  
const user = userData.find(user => user.email === email);
if(!user){
  return {msg : "user with given email is not exists"}
}

if(otp !== otpStore.otp){
  return { msg: "Invalid OTP or email" };
}

const hashedPassword = await bcrypt.hash(newPass, 10);
user.hashedPassword = hashedPassword;
return { msg: "Password reset successfully" };

}

 const userOtp = "1234"
 const validOtp = otpStore.otp
const newPass = "12345"
const resetPass = await resetPassword(adminEmail, userOtp, newPass);
const resetPassCallAgain = await resetPassword(adminEmail, validOtp, newPass);

console.log(resetPass);
console.log(resetPassCallAgain);
