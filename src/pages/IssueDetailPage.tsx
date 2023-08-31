import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { styled } from "styled-components";

import { Issue } from "../models/IIssue";

interface RouteState {
  state?: {
    issue: Issue;
  };
}

const IssueDetailPage = () => {
  const { state } = useLocation() as RouteState;
  const [issue, setIssue] = useState<Issue | undefined>(state?.issue);
  const param = useParams<{ issueId: string }>();

  console.log(state);
  console.log(param);

  return (
    <Wrapper>
      <Content />
    </Wrapper>
  );
};

export default IssueDetailPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 960px;
`;
