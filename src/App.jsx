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
          <Route path="*" element={<h1 className="text-3xl font-bold">404 Not Found</h1>} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verify-otp" element={<VerifyOtp />} />
          <Route path="reset-password" element={<ResetPassword />} />
          
        </Route>
      </Routes>
    </>
  )
}

export default App