import { useState } from "react";
import "./App.scss";

function App() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  function validateLoginAndPassword(login, password) {
    if (login.length < 1 || login.length > 15) {
      return false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login)) {
      return false;
    }

    if (password.length < 1 || password.length > 10) {
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      return false;
    }

    if (!/[a-z]/.test(password)) {
      return false;
    }

    if (!/\d/.test(password)) {
      return false;
    }

    return true;
  }

  const onClickSubmit = () => {
    if (validateLoginAndPassword(emailValue, passValue)) {
      alert("Login and password are valid.");
    } else {
      alert("Invalid login or password.");
    }
  };

  return (
    <div className="App">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="lab" htmlFor="name">
          Name
        </label>
        <input
          onChange={(e) => {
            setNameValue(e.target.value);
          }}
          value={nameValue}
          name="name"
          id="name"
          type="text"
        />
        <label className="lab" htmlFor="email">
          Email
        </label>
        <input
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
          name="email"
          type="email"
          id="email"
        />
        <label className="lab" htmlFor="password">
          Password
        </label>
        <input
          value={passValue}
          onChange={(e) => {
            setPassValue(e.target.value);
          }}
          id="password"
          type="password"
          name="password"
        />
        <button onClick={onClickSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
