import React, { useState } from "react";
import "./App.css";
function App() {
  // const userName = "hello this is userName"
  const [UserName, updateUserName] = useState("");
  const[password,updatePassword]=useState("")

  //Mrunal
  //Nidhi
  // closures
  // useState()

  // 1 data store

  // Reack hooks
  // const name = "Sanjay";

  // useState(name, updateName)

  // const arrObj = [
  //   {
  //     name: "shiva",
  //     age: 30,
  //     location: "Hyderabad",
  //   },
  // ];
  // shiva 30 Hyderabd
  // DRY CODING PRINCIPLE
  // console.log(arrObj.name,arrObj.age, arrObj.location );

  // DESTRUCTRING

  // let [name, age, location] = arrObj;

  // const data = arrObj.map((ele) => {
  //   const { name, location } = ele;
  //   return name + location;
  // });

  // console.log(data, "array destruivng");

  // let {firstName, lastName} = person;

  function handleUserName(event) {
    console.log("hello", event.target.value);
    updateUserName(event.target.value);

    // const value = event.target.value;

    // function updateUserName(event.target.value) {
    //   return previuouvlaue - event.target.value;
    // }

    // return getOutOfMyStudio



  }


  // handleUserName.getOutOfMyStudio()


  // closures

  function handlePassword(event) {
    console.log("passweord", event.target.value);
    updatePassword(event.target.value)
  }

  function handleLogin() {
    console.log("clicked", UserName);
    console.log('clicked',password)

  }

  return (
    <>
      <div className="flex-container">
        <div className="login-form-container">
          <div>Login Form</div>
          <label>UserName</label>
          <input type="text" onChange={handleUserName} value={UserName} />
          <label>Password</label>
          <input type="password" value={password} onChange={handlePassword} />
          <button onClick={handleLogin}>Login</button>
          hello username {UserName}
          password {password}
        </div>
      </div>
    </>
  );
}

export default App;

// onChange(function handleUserName (event){
// return event
// })

// className

// .

// id#

// input   without add
// button
// // js with XML

// {
//   type:"input",
//   props:['Shiva']
// }
