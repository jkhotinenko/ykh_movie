
import './App.css';
import './components/userInfo'
import {UserInfo} from "./components/userInfo";
import {Header} from "./components/Header";
import {MoviesList} from "./components/MoviesList";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      {/*<header className="App-header">*/}
      {/*</header>*/}
        <Header/>
        <UserInfo/>
        <MoviesList/>
    </div>
      </BrowserRouter>
  );
}

export {App};
