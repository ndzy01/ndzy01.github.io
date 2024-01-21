const App = () => {
  const links = [
    { src: 'https://ndzy01.github.io/', name: '文档' },
    { src: 'https://www.yuque.com/u22409297/fqv2ol', name: 'blog' },
    { src: 'https://www.yuque.com/u22409297/aqgf01', name: '数据结构与算法' },
    { src: 'https://labuladong.github.io/algo/di-ling-zh-bfe1b/xue-xi-sua-01220/', name: '算法小抄' },
    { src: 'http://zh.zlibrary-china.se/', name: '图书' },
    { src: 'https://github.com/liujuping', name: 'liujuping' },
    { src: 'https://pythontutor.com/javascript.html#mode=edit', name: 'javascript可视化' },
    { src: 'https://www.jsdelivr.com/package/gh/ndzy01/img?tab=stats', name: 'ndzy img 访问量统计' },
    { src: 'https://juejin.cn/post/6844904131795091464', name: 'React源码学习' },
    { src: 'https://pomb.us/build-your-own-react/', name: 'Build your own React' },
    { src: 'https://cn1.hkss-net.xyz/auth/login', name: 'vpn' },
    { src: 'https://visualgo.net/zh', name: '算法可视化' },
    { src: 'https://visualgo.net/zh', name: '算法可视化' },
    { src: 'https://ndzy01.gitee.io/ndzy-admin', name: 'admin' },
    { src: 'https://ndzy01.gitee.io/ndzy-todos/', name: 'todos' },
  ];
  return links.map((item) => <a href={item.src}>{item.name}</a>);
};

export default App;
