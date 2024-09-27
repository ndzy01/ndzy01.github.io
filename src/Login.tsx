import {useAuth0} from '@auth0/auth0-react';
import {useEffect} from "react";

const LoginButton = () => {
  const {loginWithRedirect} = useAuth0();

  return <button onClick={() => loginWithRedirect()}>登录</button>;
};

const LogoutButton = () => {
  const {logout} = useAuth0();

  return (
    <button
      onClick={() =>
        logout({logoutParams: {returnTo: window.location.origin}})
      }
    >
      登出
    </button>
  );
};

const Login = () => {
  const {user, isAuthenticated, isLoading} = useAuth0();

  useEffect(() => {
    console.log(user)
  }, [user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <div className="user-info">
      <div className="avatar">
        <img src={user?.picture} alt={user?.name}/>
      </div>
      <div className="details">
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>

      <LogoutButton/>
    </div>
  ) : (
    <LoginButton/>
  );
};

export default Login;
