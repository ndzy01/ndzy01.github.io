import CameraToggle from "../components/CameraToggle"
import Animation from "../components/animation"
import Img1 from "../components/images/IMG_8998.jpg"
import Img2 from "../components/images/IMG_8999.jpg"
import Img3 from "../components/images/IMG_9001.jpg"
import Img4 from "../components/images/IMG_9002.jpg"
import Img5 from "../components/images/IMG_9003.jpg"
import Img6 from "../components/images/IMG_9004.jpg"
import Img7 from "../components/images/IMG_9005.jpg"
import Img8 from "../components/images/IMG_9006.jpg"
import Img9 from "../components/images/IMG_9007.jpg"
import Img10 from "../components/images/IMG_9008.jpg"
import Img11 from "../components/images/IMG_9009.jpg"
import Img12 from "../components/images/IMG_9010.jpg"
import Img13 from "../components/images/IMG_9011.jpg"
import Img23 from "../components/images/IMG_9011.jpg"
import Img14 from "../components/images/IMG_9012.jpg"
import Img15 from "../components/images/IMG_9013.jpg"
import Img16 from "../components/images/IMG_9014.jpg"
import Img17 from "../components/images/IMG_9015.jpg"
import Img18 from "../components/images/IMG_9016.jpg"
import Img19 from "../components/images/IMG_9017.jpg"
import Img20 from "../components/images/IMG_9018.jpg"
import Img21 from "../components/images/IMG_9019.jpg"
import Img22 from "../components/images/IMG_9020.jpg"
import Img24 from "../components/images/IMG_9022.jpg"
import Img25 from "../components/images/IMG_9023.jpg"
import Img26 from "../components/images/IMG_9024.jpg"
import Img27 from "../components/images/IMG_9025.jpg"
import Img28 from "../components/images/IMG_9026.jpg"
import Img29 from "../components/images/IMG_9027.jpg"
import Img30 from "../components/images/IMG_9028.jpg"
import Img31 from "../components/images/IMG_9029.jpg"
import Img32 from "../components/images/IMG_9030.jpg"
import Img33 from "../components/images/IMG_9031.jpg"
import Img34 from "../components/images/IMG_9032.jpg"
import Img35 from "../components/images/IMG_9033.jpg"
import Img36 from "../components/images/IMG_9034.jpg"
import Img37 from "../components/images/IMG_9035.jpg"
import Img38 from "../components/images/IMG_9036.jpg"
import Img39 from "../components/images/IMG_9037.jpg"
import Img40 from "../components/images/IMG_9038.jpg"
import Img41 from "../components/images/IMG_9039.jpg"
import Img42 from "../components/images/IMG_9040.jpg"
import Img43 from "../components/images/IMG_9041.jpg"
import Img44 from "../components/images/IMG_9042.jpg"
import Img45 from "../components/images/IMG_9043.jpg"
import Img46 from "../components/images/IMG_9044.jpg"
import Img47 from "../components/images/IMG_9045.jpg"

export const LINK_LIST = [
  { src: "https://github.com/Gamote/lottie-react", name: "lottie-react" },
  { src: "https://github.com/airbnb/lottie-web", name: "lottie-web" },
  { src: "https://www.ndzy01.com/ndzy-antd", name: "在线文档" },
  { src: "https://www.ndzy01.com/ndzy-project", name: "ndzy-project" },
  { src: "https://www.yuque.com/u22409297/fqv2ol", name: "blog" },
  { src: "https://www.yuque.com/u22409297/aqgf01", name: "数据结构与算法" },
  {
    src: "https://labuladong.github.io/algo/di-ling-zh-bfe1b/xue-xi-sua-01220/",
    name: "算法小抄",
  },
  { src: "http://zh.zlibrary-china.se/", name: "图书" },
  { src: "https://github.com/liujuping", name: "liujuping" },
  {
    src: "https://pythontutor.com/javascript.html#mode=edit",
    name: "javascript可视化",
  },
  {
    src: "https://www.jsdelivr.com/package/gh/ndzy01/img?tab=stats",
    name: "ndzy img 访问量统计",
  },
  { src: "https://juejin.cn/post/6844904131795091464", name: "React源码学习" },
  {
    src: "https://pomb.us/build-your-own-react/",
    name: "Build your own React",
  },
  { src: "https://cn1.hkss-net.xyz/auth/login", name: "vpn" },
  { src: "https://visualgo.net/zh", name: "算法可视化" },
  { src: "https://visualgo.net/zh", name: "算法可视化" },
  { src: "https://ndzy01.gitee.io/ndzy-manage/", name: "管理页" },
]

const Home = () => {
  return (
    <>
      <div style={{ padding: "1rem" }}>
        <CameraToggle />
        <Animation
          imgList={[
            Img1,
            Img2,
            Img3,
            Img4,
            Img5,
            Img6,
            Img7,
            Img8,
            Img9,
            Img10,
            Img11,
            Img12,
            Img13,
            Img14,
            Img15,
            Img16,
            Img17,
            Img18,
            Img19,
            Img20,
            Img21,
            Img22,
            Img23,
            Img24,
            Img25,
            Img26,
            Img27,
            Img28,
            Img29,
            Img30,
            Img31,
            Img32,
            Img33,
            Img34,
            Img35,
            Img36,
            Img37,
            Img38,
            Img39,
            Img40,
            Img41,
            Img42,
            Img43,
            Img44,
            Img45,
            Img46,
            Img47,
          ]}
        />
        <ul>
          {LINK_LIST.map((item) => (
            <li style={{ margin: "1rem 0" }} key={Math.random()}>
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
    </>
  )
}

export default Home
