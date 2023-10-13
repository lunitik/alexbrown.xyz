import { Suspense, lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./components/Root";
import "./App.scss";
import MUIWrapper from "./context/MUIWrapper";
import Loading from "./components/Loading/Loading";
const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

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
    <Suspense fallback={<Loading />}>
      <MUIWrapper>
        <RouterProvider router={router} />
      </MUIWrapper>    

    </Suspense> 
  );
}

export default App;
