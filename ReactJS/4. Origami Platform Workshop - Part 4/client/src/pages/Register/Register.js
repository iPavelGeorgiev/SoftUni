import React, { Component } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import Title from "../../components/Title/Title";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Input from "../../components/Input/Input";
import styles from "./Register.module.css";
import authenticate from "../../utils/authenticate";
import UserContext from "../../Context";

class Register extends Component {
   constructor(props) {
      super(props)

      this.state = {
         username: "",
         password: "",
         rePassword: ""
      }
   }

   static contextType = UserContext;

   changeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      this.setState({ [name]: value });
   }

   submitHandler = async (event) => {
      event.preventDefault();
      const { username, password } = this.state;

      authenticate("http://localhost:9999/api/user/register", {
         username,
         password
      }, (user) => {
         console.log("You have been successfully registered");
         this.context.logIn(user);
         this.props.history.push("/");
      }, (err) => {
         console.log("Error:", err);
      });
   }

   render() {
      const { username, password, rePassword } = this.state;

      return (
         <PageLayout>
            <div className={styles.Register}>
               <Title title="Register Page" size="h1" />
               <form onSubmit={this.submitHandler}>
                  <Input
                     label="Username"
                     name="username"
                     value={username}
                     onChange={this.changeHandler}
                  />
                  <Input
                     label="Password"
                     name="password"
                     type="password"
                     value={password}
                     onChange={this.changeHandler}
                  />
                  <Input
                     label="Re-Password"
                     name="rePassword"
                     type="password"
                     value={rePassword}
                     onChange={this.changeHandler}
                  />
                  <SubmitButton title="Register" />
               </form>
            </div>
         </PageLayout>
      );
   }
}

export default Register;