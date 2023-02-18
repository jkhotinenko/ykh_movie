
import './App.css';
import './components/userInfo'
import {UserInfo} from "./components/userInfo";
import {Header} from "./components/Header";
import {MoviesList} from "./components/MoviesList";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*</header>*/}
        <Header/>
        <UserInfo/>
        <MoviesList/>
    </div>
  );
}

export {App};
