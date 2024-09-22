import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactIntro from "./components/ReactIntroPage/reactIntro";
import Home from "./components/SmallApps/HomePage/home";
import ReactEssentials from "./components/SmallApps/ReactEssentials/reactEssentials";
import TicTacToe from "./components/SmallApps/TicTacToe/ticTacToe";
import InvestmentCalculator from "./components/SmallApps/InvestmentCalculator/InvestmentCalculator";
import StyleAuthInput from "./components/SmallApps/StyleAuthInput/StyleAuthInput";
import RefPortalPlayers from "./components/SmallApps/RefPortalPlayers/RefPortalPlayers";
import TailWindProjectManagement from "./components/SmallApps/TailWindProjectManagement/TailWindProjectManagement";
import AppHeader from "./components/SmallApps/AppHeader/AppHeader";
import ContextShoppingCart from "./components/SmallApps/ContextShoppingCart/contextShoppingCart";
import SideEffectChooseDestination from "./components/SmallApps/SideEffectChooseDestination/sideEffectChooseDestination";
import QuizApp from "./components/SmallApps/QuizApp/QuizApp";
import FoodOrderApp from "./components/MiddleApps/FoodOrderApp/FoodOrderApp";
import ReduxCartApp from "./components/MiddleApps/reduxCartApp/src/ReduxCartApp";
import { Provider } from "react-redux";
import store from "./components/MiddleApps/reduxCartApp/src/store";

export default function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<ReactIntro />} />

        {/* smallPages*/}
        <Route path="/home" element={<Home />} />
        <Route path="/reactEssentials" element={<ReactEssentials />} />
        <Route path="/ticTacToe" element={<TicTacToe />} />
        <Route
          path="/investmentCalculator"
          element={<InvestmentCalculator />}
        />
        <Route path="/styleAuthInput" element={<StyleAuthInput />} />
        <Route path="/refPortalPlayers" element={<RefPortalPlayers />} />
        <Route
          path="/tailWindProjectManagement"
          element={<TailWindProjectManagement />}
        />
        <Route path="/contextShoppingCart" element={<ContextShoppingCart />} />
        <Route
          path="/sideEffectChooseDestination"
          element={<SideEffectChooseDestination />}
        />
        <Route path="/quizApp" element={<QuizApp />} />

        {/* middllePages*/}
        <Route path="/foodOrderApp" element={<FoodOrderApp />} />
        {/* Wrap only the ReduxCartApp in the Provider */}
        <Route
          path="/reduxCartApp"
          element={
            <Provider store={store}>
              <ReduxCartApp />
            </Provider>
          }
        />
      </Routes>
    </Router>
  );
}
