import { Route, Routes } from "react-router"
import MainLayout from "./components/layout/MainLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Subscription from "./pages/Subscription"
import AddHouse from "./pages/AddHouse"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="/add-house" element={<AddHouse />} />
          
        </Route>
      </Routes>
    </>
  )
}

export default App