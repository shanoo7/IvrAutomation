// import { Route, Routes } from "react-router-dom";
// import RootLayout from "./layouts/RootLayout";
// import OfferLetterPage from "./pages/OfferLetter";
// import { Input } from "./components/ui/input";
// <<<<<<< master
// import MyForm from "./pages/MyForm";
// =======
// import LOP from "./pages/LOP";
// >>>>>>> master

// function App() {
//   return (
//     <Routes>
//       <Route element={<RootLayout />}>
// <<<<<<< master
//         <Route path="/" element={<h1><Input label="Email address" type="email" id="email" /></h1>} />
//         <Route path="/offerlatter" element={<OfferLetterPage />} />
//         {/* TODO: add the other pages here */}
//         <Route path="/lorform" element={<MyForm/> }  />
// =======
//         <Route path="/" element={<h1><Input /></h1>} />
//         <Route path="offer-letter" element={<OfferLetterPage />} />
//         <Route path="/promotion-letter" element={<LOP />} />
// >>>>>>> master
//       </Route>
//     </Routes>
//   );
// }

// export default App;


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import RootLayout from "./layouts/RootLayout";
import Footer from "./components/Footer";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    if (isRightSidebarOpen) {
      setIsRightSidebarOpen(false);
    }
    setIsSidebarOpen(prev => !prev);
  };

  const handleToggleRightSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
    setIsRightSidebarOpen(prev => !prev);
  };

  return (
    <div>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        handleToggleSidebar={handleToggleSidebar}
        isRightSidebarOpen={isRightSidebarOpen}
        handleToggleRightSidebar={handleToggleRightSidebar}
      />
      <RootLayout
        isSidebarOpen={isSidebarOpen}
        handleToggleSidebar={handleToggleSidebar}
        isRightSidebarOpen={isRightSidebarOpen}
        handleToggleRightSidebar={handleToggleRightSidebar}
      />
      <Footer/>
    
    </div>
  );
};

export default App;
