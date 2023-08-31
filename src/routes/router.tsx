import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { PATH_ISSUE_DETAIL, PATH_ROOT } from "../constants/path";
import IssueDetailPage from "../pages/IssueDetailPage";
import IssuePage from "../pages/IssuePage";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: PATH_ROOT,
    element: <App />,
    children: [
      {
        path: PATH_ROOT,
        element: <IssuePage />,
      },
      {
        path: `${PATH_ISSUE_DETAIL}/:issueId`,
        element: <IssueDetailPage />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
