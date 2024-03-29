import React, { Suspense, lazy } from "react";

import { useState } from "react";
import Loading from "./utils/Loading";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const AllRoutes = lazy(() => import("./routes/AllRoutes"));
const TopButton = lazy(() => import("./components/TopButton"));



function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  // bg-gradient-to-r from-purple-400 to-blue-500 h-[100vh]

  return (
    <Suspense fallback={<Loading />}>
      <div
        className={` ${
          isDarkMode ? " bg-slate-800 text-white" : "bg-blue-100 text-black"
        } duration-300 animate-load`}
        onContextMenu={e=>e.preventDefault()}
      >
        <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
        <AllRoutes />
        <Footer />
        <TopButton />
      </div>
    </Suspense>
  );
}

export default App;
