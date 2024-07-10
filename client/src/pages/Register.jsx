import { Form, Link } from 'react-router-dom';
import { FormRow, Logo, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
const Register = () => {
  return (
    <Wrapper>
      <Wrapper>
        <Form method="post" className="form">
          <Logo />
          <h4>Register</h4>
          <FormRow type="text" name="name" />
          <FormRow type="text" name="lastName" labelText="last name" />
          <FormRow type="text" name="location" />
          <FormRow type="email" name="email" />
          <FormRow type="password" name="password" />
          <SubmitBtn />
          <p>
            Already a member?
            <Link to="/login" className="member-btn">
              Login
            </Link>
          </p>
        </Form>
      </Wrapper>
    </Wrapper>
  );
};
export default Register;
