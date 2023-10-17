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
const Blogs = lazy(() => import( "./pages/Blogs/Blogs"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));
const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} errorElement={<PageNotFound/>}>
      {/* 'en' routes */}
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blogs" element={<Blogs />} />
      {/* 'en-US' routes */}
      <Route path="/en-us/" element={<Home />} />
      <Route path="/en-us/contact" element={<Contact />} />
      <Route path="/en-us/blogs" element={<Blogs />} />
      {/* 'pl-pl' routes */}
      <Route path="/pl-pl/" element={<Home />} />
      <Route path="/pl-pl/kontakt" element={<Contact />} />
      <Route path="/pl-pl/blogi" element={<Blogs />} />
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
