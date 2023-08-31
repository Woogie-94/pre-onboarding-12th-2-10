import octokitService from "./octokitService";
import { DEFAULT_ISSUE_PAGE, ISSUE_PER_PAGE } from "../constants/issue";
import { PaginationFetchResult } from "../hooks/usePaginationFetch";
import { Issue } from "../models/IIssue";

export const getIssueList = async (page: number = DEFAULT_ISSUE_PAGE): Promise<PaginationFetchResult<Issue[]>> => {
  const response = await octokitService.request("GET /repos/{owner}/{repo}/issues", {
    owner: "facebook",
    repo: "react",
    state: "open",
    sort: "comments",
    per_page: ISSUE_PER_PAGE,
    page,
  });

  return {
    data: response.data.map(issue => new Issue(issue)),
    nextPage: getPagination(response.headers.link),
  };
};

const getPagination = (data: string | undefined) => {
  const nextUrl = data
    ?.split(",")
    .find((url: string) => url.includes("next"))
    ?.match(/<([^>]+)>/);

  if (nextUrl) {
    const nextPage = new URLSearchParams(nextUrl[1]).get("page");

    return Number(nextPage);
  }

  return undefined;
};
