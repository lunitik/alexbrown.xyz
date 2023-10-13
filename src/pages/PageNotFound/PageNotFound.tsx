import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import './PageNotFound.scss';
import { Typography } from "@mui/material";

function PageNotFound() {
    const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className="pagenotfound">
          <Typography variant="h1">404: Page Not Found.</Typography>
          <Typography variant="subtitle1">we got a {error.status}: {error.statusText}</Typography>
          {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return <div>Oops</div>;
  }
}

export default PageNotFound;