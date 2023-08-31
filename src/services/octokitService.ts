import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_AUTH_TOKEN,
});

export default octokit;
