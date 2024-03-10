import reactLogo from "../assets/react.svg";
import "./Home.css";
function HomePage() {
  return (
    <>
      {" "}
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Home Page</h1>
    </>
  );
}

export default HomePage;
