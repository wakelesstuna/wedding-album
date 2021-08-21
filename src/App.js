import React, { useState } from "react";
import StartPage from "./components/StartPage";
import ImageGrid from "./components/ImageGrid";
import LogginInput from "./components/LogginInput";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import Footer from "./components/Footer";
import { FaUserCircle } from "react-icons/fa";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
      <StartPage setIsOpen={setIsOpen} />
      {isOpen && (
        <div id='main' className='pageContainer'>
          <Title />
          <FaUserCircle
            className='user-icon'
            onClick={() => setShowInput(!showInput)}
          />
          {showInput && (
            <LogginInput
              setIsLoggedIn={setIsLoggedIn}
              setShowInput={setShowInput}
            />
          )}
          {isLoggedIn && <UploadForm />}
          <ImageGrid setSelectedImg={setSelectedImg} />
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>
      )}
      {isOpen && <Footer />}
    </div>
  );
}

export default App;
