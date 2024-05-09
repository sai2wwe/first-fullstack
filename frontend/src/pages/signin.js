import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useAuthContext();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message);
        throw new Error(data.message);
      }
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "LOGIN", payload: data });
      }
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="signin">
        <h1>Sign In</h1>
        <label htmlFor="username">Username</label>
        <input
          type="email"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
}
export default Signin;