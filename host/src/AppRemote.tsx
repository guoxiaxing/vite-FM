import React from 'react';
// import Button from "mf1/Button";
// import App from "mf1/App";

const AppRemote = () => {
  // @ts-ignore
  const Button = React.lazy(() => import('remote_app/Button'));
   // @ts-ignore
  const App = React.lazy(() => import('remote_app/App'));

  return (
    <React.Suspense fallback="Loading App...">
      <div className="remotes">
        <Button />
        {/* // As App in remote uses */}
        <App />
      </div>
    </React.Suspense>
  );
};
export default AppRemote;
