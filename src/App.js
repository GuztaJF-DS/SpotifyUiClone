import './App.css';
import React from 'react' 
import { Routes,Route } from 'react-router-dom';
import MusicPlayer from './MenuComponents/MusicPlayer';
import MusDrawer from './MenuComponents/Drawer';
import Content from './MenuComponents/Content';
import Song from './MenuComponents/Song';

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