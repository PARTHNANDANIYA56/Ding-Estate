// App.js
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import DevelopingApps from './Component/DevelopingApps';
import UploadApps from './Component/UploadApps';
import Liveapp from './Component/Liveapp';
import SuspendedApp from './Component/SuspendedApp';
import Ctro from './Component/Ctro';
import Addapps from './Component/Addapps';
import Addsetting from './Component/Addsetting';
import Google from './Component/Google';
import Bifurcate from './Component/Bifurcate';
import Othersetting from './Component/Othersetting';
import VPN from './Component/VPN';
import Removeappflags from './Component/Removeappflags';
import Retention from './Component/Retention';
import Playstore from './Component/playstore/Playstore';
import Adx from './Component/ADX/Adx';
import Userlogin from './Component/Admin/Userlogin';
import Usersignup from './Component/Admin/Usersignup';
// import LoginForm from './LoginForm';
// import DefaultComponent from './DefaultComponent';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Routes>
      {!loggedIn ? (
        <Route path="/" element={<Userlogin onLogin={handleLogin} />} />
      ) : (
        <>
          {/* <Route path="/" element={<DefaultComponent />} /> */}
          <Route path="/DevelopingApps" element={<DevelopingApps />} />
          <Route path="/UploadApps" element={<UploadApps />} />
          <Route path="/Liveapp" element={<Liveapp />} />
          <Route path="/SuspendedApp" element={<SuspendedApp />} />
          <Route path="/Ctro" element={<Ctro />} />
          <Route path="/Addapps" element={<Addapps />} />
          <Route path="/Google" element={<Google />} />
          <Route path="/Addsetting" element={<Addsetting />} />
          <Route path="/Bifurcate" element={<Bifurcate />} />
          <Route path="/Othersetting" element={<Othersetting />} />
          <Route path="/VPN" element={<VPN />} />
          <Route path="/Removeappflags" element={<Removeappflags />} />
          <Route path="/Retention" element={<Retention />} />
          <Route path="/Playstore" element={<Playstore />} />
          <Route path="/Adx" element={<Adx />} />
          <Route path="/Userlogin" element={<Userlogin />} />
          <Route path="/Usersignup" element={<Usersignup />} />
        </>
      )}
    </Routes>
  );
}

export default App;
