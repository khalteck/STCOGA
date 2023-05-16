import { Routes, Route } from "react-router-dom";
import "./output.css";
import Homepage from "./pages/Homepage";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
// import { useAppContext } from "./contexts/AppContext";

const Gallery = lazy(() => import("./pages/Gallery"));

function App() {
  // const { userData } = useAppContext();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* page not found */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
