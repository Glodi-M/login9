import google from '../assets/google.svg';
import facebook from '../assets/facebook.svg';
import './login.css';

export const Login = () => {
  return (
    <div className="card">
      <div className="hero">{/* wave animation code on github */}</div>

      <form className="form">
        <h3>Login to your account</h3>

        <div className="socials">
          <button
            type="button"
            className="social-btn"
            aria-label="Login with Google"
          >
            <img src={google} alt="" aria-hidden="true" />
            <span className="social-text">
              Google<span className="extra-text"> login</span>
            </span>
          </button>

          <button
            type="button"
            className="social-btn"
            aria-label="Login with Facebook"
          >
            <img src={facebook} alt="" aria-hidden="true" />
            <span className="social-text">
              Facebook<span className="extra-text"> login</span>
            </span>
          </button>
        </div>

        <div className="or"></div>

        <input type="email" placeholder="Email" aria-label="Email" required />
        <input
          type="password"
          placeholder="Password"
          aria-label="Password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
