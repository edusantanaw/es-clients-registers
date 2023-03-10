import React, { useEffect, useRef, useState } from "react";import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import { Label, Input } from "../../styles/Global";
import { data, validateData } from "../../types/auth";
import { Form, LoginContainer } from "./auth.styles";

const Login = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const rememberUser = useRef<HTMLInputElement | null>(null);

  const [error, setError] = useState<string | null>(null);
  const { auth } = useAuth();

  useEffect(() => {
    emailRef.current?.focus();
  });

  function getData() {
    let email, password, remember;
    if (emailRef.current) email = emailRef.current.value;
    if (passwordRef.current) password = passwordRef.current.value;
    if (rememberUser.current) remember = rememberUser.current.checked;
    return { email, password, remember };
  }

  function validate(data: validateData) {
    try {
      if (!data.email) throw "O email é necessario!";
      if (!data.password) throw "A senha é necessaria!";
      if (!data.remember) data.remember = false;
      return { valid: true, validData: data };
    } catch (error) {
      return { valid: false, validData: error };
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = getData();
    const { validData, valid } = validate(data);
    if (!valid) {
      setError(validData as string);
      return;
    }
    const response = await auth(validData as data);
    if (!response.success) {
      setError(response.data);
      return;
    }
    setError(null);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLFormElement>) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  return (
    <LoginContainer>
      <Form
        onSubmit={(e) => handleSubmit(e)}
        onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      >
        <div className="credentials">
          <h2>Login</h2>
          <Label id="email">Email</Label>
          <Input
            type="text"
            id="email"
            width="100%"
            placeholder="example@email.com"
            ref={emailRef}
          />
        </div>
        <div className="credentials">
          <Label id="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="**********"
            width="100%"
            ref={passwordRef}
          />
        </div>
        <div className="remember">
          <input type="checkbox" id="remember" ref={rememberUser} />
          <Label id="remember" htmlFor="remember" size="1em">
            Remember me
          </Label>
        </div>
        <span>Ainda não tem uma conta? <Link to="/signup">Criar conta</Link></span>
        {error && <span id="error">{error}</span>}
        <Input type="submit" width="100%" />
      </Form>
    </LoginContainer>
  );
};

export default Login;
