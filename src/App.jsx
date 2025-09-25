import { Route, Routes } from "react-router"
import MainLayout from "./components/layout/MainLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App