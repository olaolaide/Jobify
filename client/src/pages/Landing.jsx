import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Introducing Jobify, your ultimate job tracking app that streamlines
            your job search process by organizing applications, deadlines, and
            interviews in one place. With real-time updates and personalized
            notifications, Jobify ensures you never miss an opportunity. Take
            control of your career journey effortlessly with Jobify!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
