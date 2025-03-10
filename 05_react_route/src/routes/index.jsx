import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Fans from "../pages/dashboard/profile/Fans";
import Follow from "../pages/dashboard/profile/Follow";
import Login from "../pages/Login";
import Book from "../pages/Book";
import NavBar from "../components/NavBar";
import BlogList from "../components/BlogList";
import BlogDetails from "../components/BlogDetails";

const AppRoutes = ({ user }) => {
  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home user={user} />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/about" element={<About user={user} />} />
        <Route path="/book/:bookId" element={<Book user={user} />} />
        <Route path="/blog/:blogIndex" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard user={user} />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />}>
            <Route path="fans" element={<Fans />} />
            <Route path="follow" element={<Follow />} />
          </Route>
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
