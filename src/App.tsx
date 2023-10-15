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
import { HelmetProvider } from 'react-helmet-async';
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));
const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} errorElement={<PageNotFound/>}>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<Loading />}>
        <MUIWrapper>
          <RouterProvider router={router} />
        </MUIWrapper>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
