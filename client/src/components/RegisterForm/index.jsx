import { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from "@apollo/client";

const REGISTER = gql(`
  mutation register($input: userInput) {
    register(input: $input) {
      id
      token
    }
  }
`);

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [mutateRegister] = useMutation(REGISTER, {
    variables: {
      input : {
        email: formState.email,
        password: formState.password
      }
    },
    onCompleted: () => {
      navigate('/login');
    }
  });

  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <p className="text-5xl py-5 text-center">Register</p>

            <form>
              <TEInput
                type="email"
                label="Email address"
                size="lg"
                className="mb-6"
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value
                  })}
              ></TEInput>

              <TEInput
                type="password"
                label="Password"
                className="mb-6"
                size="lg"
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    password: e.target.value
                  })}
              ></TEInput>

              <TERipple rippleColor="light" className="w-full">
                <button
                  onClick={mutateRegister}
                  type="button"
                  className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign up
                </button>
              </TERipple>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;