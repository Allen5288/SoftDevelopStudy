import "./reactIntro.css";
import { Link } from "react-router-dom";

function ReactIntro() {
  // 按钮数据数组
  const smallPages = [
    { path: "/home", label: "Home Page" },
    { path: "/reactEssentials", label: "reactEssentials Page" },
    { path: "/ticTacToe", label: "ticTacToe Page" },
    { path: "/investmentCalculator", label: "investmentCalculator Page" },
    { path: "/styleAuthInput", label: "styleAuthInput Page" },
    { path: "/refPortalPlayers", label: "refPortalPlayers Page" },
    {
      path: "/tailWindProjectManagement",
      label: "tailWindProjectManagement Page",
    },
    {
      path: "/contextShoppingCart",
      label: "contextShoppingCart Page",
    },
    {
      path: "/sideEffectChooseDestination",
      label: "sideEffectChooseDestination Page",
    },
    {
      path: "/quizApp",
      label: "quizApp Page",
    },
    // 将来可以在这里添加更多页面
  ];

  const middllePages = [
    { path: "/foodOrderApp", label: "foodOrderApp Page" },
    { path: "/reduxCartApp", label: "reduxCartApp Page" },
    // 将来可以在这里添加更多页面
  ];

  const bigPages = [
    // 将来可以在这里添加更多页面
  ];

  return (
    <div id="introPage">
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>

      {/* Small Apps*/}
      <h2>Small Apps</h2>
      <div className="button-container">
        {smallPages.map((page) => (
          <button key={page.path} data-label={page.label}>
          <Link to={page.path}>{page.label}</Link>
        </button>
        ))}
      </div>

      {/* Small Apps*/}
      <h2>Midlle Apps</h2>
      <div className="button-container">
        {middllePages.map((page) => (
          <button key={page.path} data-label={page.label}>
          <Link to={page.path}>{page.label}</Link>
        </button>
        ))}
      </div>

      {/* Small Apps*/}
      <h2>Big Apps</h2>
      <div className="button-container">
        {bigPages.map((page) => (
          <button key={page.path} data-label={page.label}>
          <Link to={page.path}>{page.label}</Link>
        </button>
        ))}
      </div>
    </div>
  );
}

export default ReactIntro;
