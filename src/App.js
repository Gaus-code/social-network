import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage}/>} />
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
