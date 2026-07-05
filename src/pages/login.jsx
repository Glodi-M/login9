import google from '../assets/google.svg';
import facebook from '../assets/facebook.svg';

export const Login = () => {
  return (
    <div className="card">
      <div className="hero"></div>
      <form className="form">
        <h3>Login to your account</h3>
        <div className="social">
          <button type="button" className="social-btn">
            <img src={google} alt="Google" />
            <p>
              <span className="extra-text">Login with Google</span>
            </p>
          </button>
          <button type="button" className="social-btn">
            <img src={facebook} alt="Facebook" />
            <p>
              <span className="extra-text">Login with Facebook</span>
            </p>
          </button>
        </div>
        <span className="extra-text">or</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
