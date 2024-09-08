import "./reactIntro.css";
import { Link } from "react-router-dom";

function ReactIntro() {
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>

      <div>
        <button>
          <Link to="/home">Go to Home Page</Link>
        </button>
      </div>
    </>
  );
}

export default ReactIntro;
