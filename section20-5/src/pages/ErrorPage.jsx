import { userRouteError } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = userRouteError();

  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h1>An error occurred!</h1>
        <p>{error.message}</p>
      </main>
    </>
  );
}

export default ErrorPage;
