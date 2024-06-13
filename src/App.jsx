import React from "react";
import "./App.css";
import StreamPlayer from "./components/StreamPlayer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <StreamPlayer />
      <Footer />
    </div>
  );
}

export default App;