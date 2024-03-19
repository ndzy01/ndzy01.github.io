/* eslint-disable react-hooks/exhaustive-deps */
import { useSetState, useMount } from 'ahooks';
import { service } from './https';

const App = () => {
  const [s, setS] = useSetState({
    e1: '',
    e2: '',
    d1: '',
    d2: '',
    d3: '',
    d4: '',
    links: [
      { src: 'https://www.ndzy01.com/ndzy-docs', name: '文档' },
      { src: 'https://www.ndzy01.com/ndzy-project/', name: 'ndzy-project' },
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
      { src: 'https://ndzy01.gitee.io/ndzy-manage/', name: '管理页' },
    ],
  });

  const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256); // 生成0-255的随机红色分量
    const green = Math.floor(Math.random() * 256); // 生成0-255的随机绿色分量
    const blue = Math.floor(Math.random() * 256); // 生成0-255的随机蓝色分量

    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'; // 返回rgb格式颜色
  };

  const handelChange = (e: any, key: any) => {
    const obj: any = {};
    obj[key] = e.target.value;
    setS({ ...obj });
  };

  const funE = () => {
    service({ url: '/e', method: 'GET', params: { e1: s.e1 } }).then((res: any) => {
      setS({ e2: res.text });
    });
  };

  const funD = () => {
    service({ url: '/d', method: 'GET', params: { d1: s.d1, d2: s.d2, d3: s.d3 } }).then((res: any) => {
      setS({ d4: res });
    });
  };

  useMount(() => {
    setS({ links: s.links.map((item) => ({ ...item, color: getRandomColor() })) });
  });

  return (
    <div>
      <div style={{ height: 360, overflow: 'scroll' }}>
        <ul>
          {s.links.map((item) => (
            <li key={Math.random()}>
              <a style={{ color: item?.color }} target="_blank" href={item.src}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
          border: '1px dashed #666',
          padding: 16,
        }}
      >
        <input value={s.e1} onChange={(e) => handelChange(e, 'e1')} placeholder="" />
        <button onClick={funE}>加密</button>
        <input value={s.e2} onChange={(e) => handelChange(e, 'e2')} placeholder="" />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
          border: '1px dashed #666',
          padding: 16,
        }}
      >
        <input value={s.d1} onChange={(e) => handelChange(e, 'd1')} placeholder="" />
        <input value={s.d2} onChange={(e) => handelChange(e, 'd2')} placeholder="" />
        <input value={s.d3} onChange={(e) => handelChange(e, 'd3')} placeholder="" />
        <button onClick={funD}>解密</button>
        <input value={s.d4} onChange={(e) => handelChange(e, 'd4')} placeholder="" />
      </div>

      <br />
      <br />

      <a href="https://beian.miit.gov.cn/" target="_blank">
        豫ICP备19035495号-1
      </a>
    </div>
  );
};

export default App;
