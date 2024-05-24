import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedIn } from "../routers/LoggedInContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { setIsLoggedIn } = useLoggedIn();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve the existing users from local storage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if the entered email and password match any stored user
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            // If credentials match, navigate to the home page
            alert("Login successful");
            setIsLoggedIn(true);
            navigate("/");
        } else {
            // If credentials do not match, set an error message
            setError("Password or email does not match");
        }
    };

    return (
        <div className="container-fluid h-screen w-full">
            <div className="row">
                <div className="column mt-5">
                    <div className="d-flex justify-content-center align-items-center flex-column shadow-lg rounded w-50 mx-auto p-5 border border-white">
                        <h3 className="text-center">SIGN IN</h3>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="form-label">
                                    Email address
                                    <input
                                        type="email"
                                        value={email}
                                        data-testid="email-input"
                                        placeholder="Enter email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="email"
                                        name="email"
                                        className="form-control border border-white bg-transparent text-white"
                                    />
                                </label>
                            </div>
                            <br />
                            <div>
                                <label htmlFor="password" className="form-label">
                                    Password
                                    <input
                                        type="password"
                                        value={password}
                                        data-testid="password-input"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="password"
                                        name="password"
                                        className="form-control border border-white bg-transparent text-white"
                                    />
                                </label>
                            </div>
                            <br />
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <button type="submit" className="btn btn-secondary ml-100">
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
