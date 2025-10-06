import { Route, Routes } from "react-router"
import MainLayout from "./components/layout/MainLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Subscription from "./pages/Subscription"
import AddHouse from "./pages/AddHouse"
import RentCollection from "./pages/RentCollection"
import AddFlat from "./pages/AddFlat"
import CreateFlatUser from "./pages/CreateFlatUser"
import Profile from "./pages/Profile"
import EditProfile from "./pages/EditProfile"
import ForgotPassword from "./pages/ForgotPassword"
import VerifyOtp from "./pages/VerifyOtp"
import ResetPassword from "./pages/ResetPassword"
import NotFoundPage from "./pages/NotFoundPage"
import OwnerRegistration from "./pages/OwnerRegistration"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="add-house" element={<AddHouse />} />

          <Route path="rent-collection" element={<RentCollection />} />
          <Route path="add-flat" element={<AddFlat />} />
          <Route path="create-flat-user" element={<CreateFlatUser />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verify-otp" element={<VerifyOtp />} />
          <Route path="reset-password" element={<ResetPassword />} />

          <Route path="owner-registration" element={<OwnerRegistration />} />

          <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
          
        </Route>
      </Routes>
    </>
  )
}

export default App