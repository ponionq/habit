import React, {useState,useEffect} from 'react';
import VideoList from './components/video_list/video_list';
import Navbar from './components/navbar';
import Video_view from './components/video_view';

function App() {
  const [videos, setVideos] = useState([]);
  
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyC0idE6awq0zQwFDJOKW1FVFCPnV9uNnuI", 
    requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);
 return(
  <> 
  <Navbar /> 
  <div className="wrap">
    <Video_view videos={videos}/>
    <VideoList videos={videos}/>
  </div>
  </>
 )
}

export default App;