import React, { Suspense } from 'react';

import Index from "./pages/index";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Suspense fallback={<>Loading...</>}>
          <Routes>
              <Route path="/" element={<Index />} />
          </Routes>
      </Suspense>
  );
}

export default App;
