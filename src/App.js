import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Dialogs />
      {/* <Profile /> */}
    </div>
  );
}

export default App;
