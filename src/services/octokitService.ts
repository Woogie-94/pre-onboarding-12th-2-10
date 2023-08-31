import { Octokit } from "octokit";

const octokitService = new Octokit({
  auth: import.meta.env.VITE_GITHUB_AUTH_TOKEN,
});

export default octokitService;
