import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./Component/LandingPage/LandingPage";
import LoginPage from "./Component/LoginPage/LoginPage";
import ContactUsPage from "./Component/ContactUsPage/ContactUsPage";
import { filterdata } from "./data/filterdata";
import Main from "./Component/AfterSignIn/Main";
import UserProfile from "./Component/UserProfile/UserProfile";
import CreatePin from "./Component/CreatePin/CreatePin";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <div className="flex">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Main cId={0} />} />
            {filterdata.map((path) => {
              return (
                <Route
                  key={path.id}
                  path={`/${path.title}`}
                  element={<Main cId={path.id} />}
                />
              );
            })}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/createpin" element={<CreatePin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AnimatePresence>
  );
}

export default App;
