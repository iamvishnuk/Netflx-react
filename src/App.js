import React from 'react'
import NavBar from './components/NarBar/NavBar';
import './App.css'
import Banner from './components/banner/Banner';
import Post from './components/Posts/Post';
import { originals,action,comedy,horror,romance,documentries } from './Urls';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Post url = {originals} title = "Netflix Originals" />
      <Post url = {action} title = "Action" isSmall />
      <Post url = {comedy} title = "Comedy" isSmall />
      <Post url = {horror} title = "Horror" isSmall />
      <Post url = {romance} title = "Romance" isSmall />
      <Post url = {documentries} title = "Documentries" isSmall />
    </div>
  );
}

export default App;
