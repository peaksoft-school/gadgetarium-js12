/* eslint-disable @typescript-eslint/no-unused-vars */
namespace AUTH {
  type  PostLoginRequest = {
    email: string;
    password: string;
  } 

  type PostLoginresponse = {
    isAuth: Login
  }
}