import { UserLogin } from "../interfaces/UserLogin";
import auth from "../utils/auth";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login 

  console.log(userInfo)

  const response = await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
  if(!response.ok) {
    throw new Error('Error logging in!');
  }
  const data = await response.json();

  const token = data.token;

  // call the login method from auth.ts file

  auth.login(token)

  return token

}



export { login };
