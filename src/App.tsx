import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Root from "./components/Root";
import "./App.scss";
import MUIWrapper from "./context/MUIWrapper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return ( 
    <MUIWrapper>
      <RouterProvider router={router} />
    </MUIWrapper>     
  );
}

export default App;
