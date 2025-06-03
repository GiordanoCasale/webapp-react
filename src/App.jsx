import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";
import NotFoundPage from "./pages/NotFoundPage";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="/movies/:id" element={<Moviepage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App

