import React, { useState, useEffect, useContext } from "react";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import fire, { auth } from "../../fire";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const { user, setUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHesAccount] = useState(true);
  const history = useHistory();

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          setUser(auth);
          history.push("/");
        }
      })
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/invaild-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        if (res) {
          setUser(res);
          history.push("/");
        }
      })
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const googleSignIn = () => {
    const provider = new fire.auth.GoogleAuthProvider();
    fire.auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fire.auth().signOut();
  }, []);

  return (
    <Container>
      <FormWrap hasAccount={hasAccount}>
        <Icon to="/"></Icon>
        <FormContent>
          <Form>
            {hasAccount ? (
              <FormH1>Hesabınıza Giriş Yapın </FormH1>
            ) : (
              <FormH1>Daha iyi bir deneyim için kayıt olun</FormH1>
            )}

            {!hasAccount ? (
              <>
                <FormLabel htmlFor="for">Ad-Soyad</FormLabel>
                <FormInput
                  type="name"
                  required
                  autoFocus
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </>
            ) : (
              ""
            )}
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput
              type="email"
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Text style={{ marginTop: "-20px" }}>{emailError}</Text>
            <FormLabel htmlFor="for" required>
              Password
            </FormLabel>
            <FormInput
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Text style={{ marginTop: "-20px", marginBottom: "10px" }}>
              {passwordError}
            </Text>
            {hasAccount ? (
              <>
                <FormButton onClick={handleLogin}>Giriş Yap</FormButton>
                <Text>
                  Hesabınız yok mu ?{" "}
                  <span
                    onClick={() => setHesAccount(!hasAccount)}
                    style={{ color: "yellow", cursor: "pointer" }}
                  >
                    Kayıt Ol
                  </span>
                </Text>
              </>
            ) : (
              <>
                <FormButton onClick={handleSignup}>Kayıt Ol</FormButton>
                <Text>
                  Hesabınız var mı ?{" "}
                  <span
                    onClick={() => setHesAccount(!hasAccount)}
                    style={{ color: "yellow", cursor: "pointer" }}
                  >
                    Giriş Yap
                  </span>
                </Text>
              </>
            )}
            <Text>
              Google ile giriş yapın
              <FaGoogle
                onClick={googleSignIn}
                style={{
                  cursor: "pointer",
                  fontSize: "24px",
                  marginLeft: "15px",
                }}
              />
            </Text>
            <Text style={{ color: "yellow" }}>
              Inko AS Admin{" "}
              <SupervisorAccountIcon
                style={{ marginLeft: "10px", cursor: "pointer" }}
              />
            </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
