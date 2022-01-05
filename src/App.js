import './App.css';
import React from 'react' 
import { Routes,Route } from 'react-router-dom';
import MusicPlayer from './Pages/MusicPlayer';
import MusDrawer from './Pages/Drawer';
import Content from './Pages/Content';
import Song from './Pages/Song';

function App() {
  return (
    <>
      <div className="App">
        <MusDrawer/>
        <div className="Segment">
          <Routes>
            <Route path="/Album/:id" element={<Song />}>
            </Route>
            <Route path="/" element={<><Content/></>} />
          </Routes>
        </div>
        <MusicPlayer/>
      </div>
      <div className="HeaderMask"></div>
    </>
  );
}

export default App;