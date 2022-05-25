import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AuthJumbotron } from '../../../shared/components/authJumbotron';
import { bgAuthImage, logo, collage1, collage2 } from '../../../entryFile/images';
import { Input } from '../../../shared/components/formInputs';
import useAuthService from '../../../shared/hooks/api/useAuthService';
import Button from '../../../shared/components/button';
import { toast, ToastContainer } from 'react-toastify';
import { useAuthState } from '../../../context/useAuthContext';
import { AuthActionSuccess } from '../../../context/reducers/authActions';

const getFormProps = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  return {
    initialValues,
    validationSchema,
  };
};

const Login = props => {
  const [act, setAccount] = useState('');
  const { push } = useHistory();

  const { mutateAsync: Login, isLoading } = useAuthService.useLoginService();
  const { dispatch } = useAuthState();
  async function handleSubmit(values) {
    const { username, password } = values;
    const payload = {
      username,
      password,
    };

    try {
      const response = await Login(payload);
      if (response.isSuccess === true) {
        dispatch(
          AuthActionSuccess({
            token: response.token,
            currentUser: {
              name: response.firstName + ' ' + response.lastName,
              id: response.id,
              email: response.email,
            },
            permission: response.role,
          }),
        );
        push('/dashboard');
      } else {
        toast('Unsatisfied Credentials!');
      }
    } catch (error) {
      // return Swal.fire({
      //   title: 'Login Failed',
      //   text: error.message,
      //   icon: 'error',
      //   confirmButtonText: 'Cool',
      // });
      toast(`${error.message}, please try again`);
    }
  }

  // try {
  //   const response = await registerUser(payload);
  //   if (response.isConfirmed != true) {
  //     props.history.push({
  //       pathname: '/verify-otp',
  //       state: { email: response.email },
  //     });
  //   } else {
  //     return;
  //     //props.history.push("/app/dashboard");
  //   }
  // } catch (error) {
  //   setAccount(error.message);
  //   console.log(error.message);
  // }
  // }

  return (
    <>
      <AuthJumbotron bgImage={bgAuthImage}>
        <AuthJumbotron.RightSideFrame>
          <AuthJumbotron.WelcomeTextWrapper>
            <img src={logo} width="200" />
            <AuthJumbotron.TwoImageWrapper>
              <AuthJumbotron.Title imageOne={collage1} />
              <AuthJumbotron.SubTitle imageTwo={collage2} />
            </AuthJumbotron.TwoImageWrapper>
          </AuthJumbotron.WelcomeTextWrapper>
        </AuthJumbotron.RightSideFrame>
        <AuthJumbotron.LeftSideFrame>
          {act != '' && (
            <div class="alert alert-danger" role="alert">
              {act}
            </div>
          )}

          <Formik
            onSubmit={handleSubmit}
            validateOnMount={true}
            initialValues={getFormProps().initialValues}
            validationSchema={getFormProps().validationSchema}
          >
            {({ isSubmitting, isValid }) => (
              <>
                <div className="text-center">
                  <div style={{ width: '80%', margin: '20px auto' }}>
                    <div>
                      <span>Please Login into Your Account</span>
                    </div>
                  </div>
                </div>
                <Form style={{ width: '90%' }}>
                  <Input>
                    <Input.FormGroup className="input-group input-group--prepend">
                      <Input.InputField
                        type="text"
                        name="username"
                        className="input"
                        placeholder="username"
                      ></Input.InputField>
                    </Input.FormGroup>
                    <ErrorMessage
                      className="alert alert-danger py-1"
                      component="div"
                      name="username"
                    />
                    <Input.FormGroup className="input-group input-group--prepend">
                      <Input.InputField
                        type="password"
                        name="password"
                        className="input"
                        placeholder="*******"
                      ></Input.InputField>
                    </Input.FormGroup>
                    <ErrorMessage
                      className="alert alert-danger py-1"
                      component="div"
                      name="password"
                    />
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center justify-content-center">
                        <Input.CheckBox type="checkbox" name="remember-me"></Input.CheckBox>
                        <span className="mb-0">Remeber Me</span>
                      </div>
                      <div>
                        <span style={{ color: '#2c91f7' }}>Forgot Password</span>
                      </div>
                    </div>
                    <div>
                      <Button
                        type="submit"
                        disabled={isSubmitting || !isValid}
                        isLoading={isSubmitting}
                        style={{ width: '100%' }}
                      >
                        Login
                      </Button>
                    </div>
                  </Input>
                  <div style={{ height: '0.5px' }}></div>
                </Form>
              </>
            )}
          </Formik>
          <div>
            <p>
              Dont have an account? <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </AuthJumbotron.LeftSideFrame>
      </AuthJumbotron>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </>
  );
};
export { Login };
