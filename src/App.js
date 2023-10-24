import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>} />
            <Route path='/profile' element={<Profile posts={props.posts}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
