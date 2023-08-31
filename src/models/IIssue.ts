import { Endpoints } from "@octokit/types";

import { dateFormat } from "../utils/date";

export type IIssue = Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"][0];

export class Issue {
  id: number;
  title: string;
  body: string | null | undefined;
  comments: number;
  createdAt: string;
  user: {
    nickname: string | undefined;
    avatarUrl: string | undefined;
  };

  constructor(data: IIssue) {
    this.id = data.number;
    this.title = data.title;
    this.body = data.body;
    this.comments = data.comments;
    this.createdAt = dateFormat(new Date(data.created_at), "long");
    this.user = {
      nickname: data.user?.login,
      avatarUrl: data.user?.avatar_url,
    };
  }
}
