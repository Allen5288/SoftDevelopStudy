
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/homePage/home'; // 替换为你的 Home 组件路径
import ReactIntro from './components/reactIntroPage/reactIntro';
import JsxIntro from './components/IntroOfJSX/jsxIntro';
import EmojiPedia from './components/emojipedia/emojipedia';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactIntro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jsxIntro" element={<JsxIntro />} />
        <Route path="/emoji" element={<EmojiPedia />} />
      </Routes>
    </Router>
  )
}

export default App
