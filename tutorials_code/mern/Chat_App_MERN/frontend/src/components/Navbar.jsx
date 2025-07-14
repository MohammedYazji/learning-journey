import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className=" border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full ">
          {/* left section */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 hover:gap-10 transition-all"
            >
              {/* size-9 === h-9 w-9 */}
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="size-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Chatty</h1>
            </Link>
          </div>
          {/* right section */}
          <div className="flex items-center gap-2">
            {/* Settings */}
            <Link
              to={"/settings"}
              className={`btn btn-sm gap-2 transition-colors`}
            >
              <Settings className="size-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>
            {/* Profile and logout if authuser */}
            {authUser && (
              <>
                <Link
                  to={"/profile"}
                  className={"btn btn-sm gap-2 transition-colors"}
                >
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>
                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// import React from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import { Link } from "react-router-dom";
// import { LogOut, MessageSquare, Settings, User } from "lucide-react";

// const Navbar = () => {
//   const { logout, authUser } = useAuthStore();

//   return (
//     <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
//       <div className="container mx-auto px-4 h-16">
//         <div className="flex items-center justify-between h-full">
//           {/* left section */}
//           <div className="flex items-center gap-8">
//             <Link
//               to="/"
//               className="flex items-center gap-2.5 hover:opacity-80 transition-all "
//             >
//               <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
//                 {/* w-5 h-5 => size-5 */}
//                 <MessageSquare className="w-5 h-5 text-primary" />
//               </div>
//               <h1 className="text-lg font-bold">Chatty</h1>
//             </Link>
//           </div>
//           {/* right section */}
//           <div className="flex items-center gap-4">
//             <Link
//               to="/settings"
//               className={`btn btn-sm gap-2 transition-colors`}
//             >
//               <Settings className="size-4" />
//               <span className="hidden sm:inline">Settings</span>
//             </Link>
//             {/* Dynamic Render */}
//             {authUser && (
//               <>
//                 <Link to="/profile" className={`btn btn-sm gap-2`}>
//                   <User className="size-5" />
//                   <span className="hidden sm:inline">Profile</span>
//                 </Link>

//                 <button className="flex gap-2 items-center" onClick={logout}>
//                   <LogOut className="size-5" />
//                   <span className="hidden sm:inline">Logout</span>
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
