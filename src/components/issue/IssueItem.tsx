import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { PATH_ISSUE_DETAIL } from "../../constants/path";
import { Issue } from "../../models/IIssue";
import CommentSvg from "../svg/CommentSvg";
import OpenedIssueSvg from "../svg/OpenedIssueSvg";

interface Props {
  issue: Issue;
}
const IssueItem = forwardRef<HTMLLIElement, Props>(({ issue }, ref) => {
  return (
    <IssueWrapper key={issue.id} ref={ref}>
      <LeftWrapper>
        <OpenedIssueSvg />
        <div>
          <Link to={`${PATH_ISSUE_DETAIL}/${issue.id}`} state={{ issue }}>
            <Title>{issue.title}</Title>
          </Link>
          <InfoWrapper>
            <p>#{issue.id}</p>
            <p>on {issue.createdAt}</p>
            <p>by {issue.user.nickname}</p>
          </InfoWrapper>
        </div>
      </LeftWrapper>
      <CommentWrapper>
        <CommentSvg />
        <Comments>{issue.comments}</Comments>
      </CommentWrapper>
    </IssueWrapper>
  );
});

IssueItem.displayName = "IssueItem";
export default IssueItem;

const IssueWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #3b3c4230;

  &:hover {
    background-color: #656d7610;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
const Title = styled.p`
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #1f2328;
  transition: 0.2s;

  &:hover {
    color: #0969da;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
  font-size: 12px;
  color: #656d76;
`;

const CommentWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const Comments = styled.p`
  font-size: 12px;
  color: #656d76;
`;
