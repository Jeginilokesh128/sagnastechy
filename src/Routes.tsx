import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const NotFound = lazy(() => import("../src/views/PageUnderConstruction/PageUnderConstruction"));


const AppRoutes: React.FC = () => {
  return (
  
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
   
  );
};

export default AppRoutes;
