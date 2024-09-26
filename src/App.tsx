import {Auth0Provider, useAuth0} from "@auth0/auth0-react";
import Login from "./Login";
import './index.css'

const App = () => {
  const {isAuthenticated} = useAuth0();


  const links = [
    {src: 'https://www.ndzy01.com/ndzy-docs', name: '文档'},
    {src: 'https://www.ndzy01.com/ndzy-antd', name: '在线文档'},
    {src: 'https://www.ndzy01.com/ndzy-project', name: 'ndzy-project'},
    {src: 'https://www.yuque.com/u22409297/fqv2ol', name: 'blog'},
    {src: 'https://www.yuque.com/u22409297/aqgf01', name: '数据结构与算法'},
    {src: 'https://labuladong.github.io/algo/di-ling-zh-bfe1b/xue-xi-sua-01220/', name: '算法小抄'},
    {src: 'http://zh.zlibrary-china.se/', name: '图书'},
    {src: 'https://github.com/liujuping', name: 'liujuping'},
    {src: 'https://pythontutor.com/javascript.html#mode=edit', name: 'javascript可视化'},
    {src: 'https://www.jsdelivr.com/package/gh/ndzy01/img?tab=stats', name: 'ndzy img 访问量统计'},
    {src: 'https://juejin.cn/post/6844904131795091464', name: 'React源码学习'},
    {src: 'https://pomb.us/build-your-own-react/', name: 'Build your own React'},
    {src: 'https://cn1.hkss-net.xyz/auth/login', name: 'vpn'},
    {src: 'https://visualgo.net/zh', name: '算法可视化'},
    {src: 'https://visualgo.net/zh', name: '算法可视化'},
    {src: 'https://ndzy01.gitee.io/ndzy-manage/', name: '管理页'},
  ];

  return (
    <Auth0Provider
      domain="dev-486sij3lsfgsbudk.us.auth0.com"
      clientId="7JrHdccCp7VfjBlxzdibNEWKVBZ78YOu"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Login/>
      {isAuthenticated && <div style={{padding: '1rem'}}>
          <ul>
            {links.map((item) => (
              <li style={{margin: '1rem 0'}} key={Math.random()}>
                <a target="_blank" href={item.src}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
      </div>}

      <a href="https://beian.miit.gov.cn/" target="_blank">
        豫ICP备19035495号-1
      </a>
    </Auth0Provider>
  );
};

export default App;
