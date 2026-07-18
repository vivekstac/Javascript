// Lazy loading in React is a technique used to defer loading
// of components until they are needed.
// This helps in reducing the initial bundle size
// and improving the performance of the application.

// In this example, the Child component will only be loaded when it is needed.

import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("./Dashboard"));

function App() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                {`fallback is a component that will be displayed while the lazy component is being loaded`}
                <Dashboard />
            </Suspense>
        </div>
    );
}

export default App;
