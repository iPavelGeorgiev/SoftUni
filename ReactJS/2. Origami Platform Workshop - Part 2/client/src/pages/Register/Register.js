import React, { Component } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import Title from "../../components/Title/Title";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Input from "../../components/Input/Input";
import styles from "./Register.module.css";

class Register extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <PageLayout>
            <div className={styles.Register}>
               <Title title="Register Page" size="h1" />
               <form>
                  <Input type="email" title="Email"/>
                  <Input type="password" title="Password"/>
                  <Input type="password" title="Re-password"/>
                  <SubmitButton title="Register" />
               </form>
            </div>
         </PageLayout>
      );
   }
}

export default Register;