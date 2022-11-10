export type propsForm = {
    providers:
      | {
          credentials: {
            callbackUrl: string;
            id: string;
            name: string;
            signinUrl: string;
            type: string;
          };
        }
      | any;
  };
  
  export type propsBtnGoogle = {
    provider:{
        callbackUrl: string;
        id: string;
        name: string;
        signinUrl: string;
        type: string;

    }
  };
  
  
  
  export type signupData ={
    email: string;
    password: string;
  }


  export type userSession ={
    
     email: string;
     image: string;
    
  }