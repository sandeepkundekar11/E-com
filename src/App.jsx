import React, { lazy, Suspense } from "react";

import Navbar from "./Components/Navbar";
import SkeletonLoader from "./Components/SkeletonLoader";
import { ThemeProvider } from "./context/ContentProvider";
import { withTheme } from "./context/WithTheme";


const LazyProductList = lazy(() => import("./Components/ProductList"));
const ThemedProductList = withTheme(LazyProductList);

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Suspense fallback={<SkeletonLoader/>}>
        <ThemedProductList />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;