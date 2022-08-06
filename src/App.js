import './App.css';
import Pokedex from './Pokedex'
import { useDispatch, useSelector } from 'react-redux';
import { setLoaded } from './loadingSlice';
import { useEffect, useState } from 'react';

function App() {
  const dataLoaded = useSelector((state) => state.loading)
  const [videoDidLoad,setVideoLoad] = useState(false)
  const dispatch = useDispatch()

  // Wait 1s for the pokedex in the video to unfold
  useEffect(() => {
    // In some browsers, video won't autostart until user-interaction, but setTimeout() will.
    // Wait for focus to prevent unexpected behaviour 
    if(document.hasFocus() && videoDidLoad){ // Already in focus
      setTimeout(() =>
          dispatch(setLoaded()), 1000)
    }
    // Wait for window to focus, then start timer
    else{
      window.addEventListener("focus", 
      () =>
        setTimeout(() =>
          dispatch(setLoaded()), 1000))
    }
  }, [dispatch, videoDidLoad])

  return (
    <div className="App">
      <div id="background-video">
        <video style={{ position: "fixed", height: "600px" }} autoPlay muted onLoadedData={()=>setVideoLoad(true)}>
          <source src="bg1080.mp4" type="video/mp4"></source>
        </video>
        {dataLoaded && <Pokedex />}
      </div>
    </div>
  );
}

export default App;
