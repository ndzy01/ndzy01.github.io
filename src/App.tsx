import {Auth0Provider} from "@auth0/auth0-react";
import Login from "./Login";
import './index.css'
import {LINK_LIST} from "./data.ts";

const App = () => {

  return (
    <Auth0Provider
      domain="dev-486sij3lsfgsbudk.us.auth0.com"
      clientId="7JrHdccCp7VfjBlxzdibNEWKVBZ78YOu"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Login/>

      <div style={{padding: '1rem'}}>
        <ul>
          {LINK_LIST.map((item) => (
            <li style={{margin: '1rem 0'}} key={Math.random()}>
              <a target="_blank" href={item.src}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a href="https://beian.miit.gov.cn/" target="_blank">
        豫ICP备19035495号-1
      </a>
    </Auth0Provider>
  );
};

export default App;
