import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to={"/login"} />}
        />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;

// import React, { useEffect } from "react";

// import Navbar from "./components/Navbar.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import SignUpPage from "./pages/SignUpPage.jsx";
// import LoginPage from "./pages/LoginPage.jsx";
// import SettingsPage from "./pages/SettingsPage.jsx";
// import ProfilePage from "./pages/ProfilePage.jsx";

// import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuthStore } from "./store/useAuthStore.js";

// import { Loader } from "lucide-react";
// import { Toaster } from "react-hot-toast";
// import { useThemeStore } from "./store/useThemeStore.js";

// const App = () => {
//   const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
//   const { theme } = useThemeStore();

//   useEffect(() => {
//     checkAuth();
//   }, [checkAuth]);

//   console.log({ authUser });

//   if (isCheckingAuth && !authUser) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <Loader className="size-10 animate-spin" />
//       </div>
//     );
//   }
//   return (
//     <div data-theme={theme}>
//       <Navbar />

//       <Routes>
//         <Route
//           path="/"
//           element={authUser ? <HomePage /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/signup"
//           element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/login"
//           element={!authUser ? <LoginPage /> : <Navigate to="/" />}
//         />
//         <Route path="/settings" element={<SettingsPage />} />
//         <Route
//           path="/profile"
//           element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
//         />
//       </Routes>

//       <Toaster />
//     </div>
//   );
// };

// export default App;
