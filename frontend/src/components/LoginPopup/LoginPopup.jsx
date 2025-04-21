import { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { useAuth } from '../../context/AuthContext';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { login, signup } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let success;
            if (currState === "Login") {
                success = await login(email, password);
            } else {
                success = await signup(username, email, password);
            }
            if (success) {
                setMessage("Success!");
                setShowLogin(false);
            } else {
                setMessage("An error occurred. Please try again.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" && (
                        <input
                            type="text"
                            placeholder='Your Name'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    )}
                    <input
                        type="text"
                        placeholder='Your Email Id'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the <span>Terms of Use and Policy</span></p>
                </div>
                {currState === "Login"
                    ? <p>Create a new Account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an Account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};

export default LoginPopup;