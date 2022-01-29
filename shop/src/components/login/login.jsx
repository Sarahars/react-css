import "../login/root.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const processData = () => {
    const payload = {
      email,
      password,
    };
    fetch("http://192.168.1.34:1337/signup", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        response.json().then((data) => {
          setResponse(data.message);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form">
      <div>
        <h2>Log in</h2>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="Eenter your Email here"
          type="email"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          placeholder="Enter Password"
          type="password"
        />
        <button
          onClick={() => {
            processData();
          }}
        >
          Log in
        </button>
      </div>
      <div>
        <p style={{ textAlign: "center" }}>{response}</p>
      </div>
    </div>
  );
}

export default Login;
