import { useState } from 'react';
function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
            if(response.ok) {
                console.log(data);
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
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
            <button type="submit">Sign Up</button>
        </form>
        {error && <p>{error}</p>}
        </>
    )
}

export default Signup;