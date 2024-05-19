import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my home page!</p>
      <Link to="../">Go to First Page</Link>
    </div>
  );
}

export default Home; 