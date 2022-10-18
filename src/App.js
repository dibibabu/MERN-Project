import "./App.css"
import Home from "./pages/Home/Home";
import Profile from "./pages/Home/Profile/Profile";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{top:'-18%',right:'0'}}></div>
      <div className="blur"  style={{top:'36%',left:'-8rem'}}></div>
      <Home/>
      {/* <Profile/> */}
    </div>
  );
}

export default App;
