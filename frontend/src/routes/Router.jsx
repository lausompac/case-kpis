import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import InfoScreen from "../screens/InfoScreen/InfoScreen";

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomeScreen />} />
    <Route path="/infos" element={<InfoScreen />} />
    </Routes>
    </BrowserRouter>
  )
}