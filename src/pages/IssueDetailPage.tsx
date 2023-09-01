import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { styled } from "styled-components";

import { Issue } from "../models/IIssue";
import { getIssueDetail } from "../services/issue";

interface RouteState {
  state?: {
    issue: Issue;
  };
}

const IssueDetailPage = () => {
  const { state } = useLocation() as RouteState;
  const [issue, setIssue] = useState<Issue | undefined>(state?.issue);
  const param = useParams<{ issueId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!issue && param.issueId) {
      getIssueDetail(param.issueId)
        .then(setIssue)
        .catch(() => {
          navigate("/*");
        });
    }
  }, [issue, param, navigate]);

  if (!issue) {
    return null;
  }

  return (
    <Wrapper>
      <Content>
        <HeaderWrapper>
          <TitleWrapper>
            <Title>
              {issue.title}
              <IssueNumber>#{issue.id}</IssueNumber>
            </Title>
          </TitleWrapper>
          <InfoWrapper>
            <Avatar src={issue.user.avatarUrl} />
            <div>
              <InfoTopWrapper>
                <Nickname>{issue.user.nickname}</Nickname>
                <p>· {issue.comments} comments</p>
              </InfoTopWrapper>
              <p>opened this issue on {issue.createdAt}</p>
            </div>
          </InfoWrapper>
        </HeaderWrapper>
        <BodyWrapper>
          <MarkDown remarkPlugins={[remarkGfm]}>{issue.body}</MarkDown>
        </BodyWrapper>
      </Content>
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

const HeaderWrapper = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #656d7650;
`;
const TitleWrapper = styled.div`
  margin-bottom: 8px;
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #1f2328;
`;
const IssueNumber = styled.span`
  font-size: 32px;
  font-weight: 500;
  color: #656d76;
  margin-left: 8px;
`;
const InfoWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 14px;
  color: #656d76;
`;
const InfoTopWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;
const Nickname = styled.p`
  font-weight: bold;
`;
const BodyWrapper = styled.div`
  margin-top: 16px;
`;

const MarkDown = styled(ReactMarkdown)`
  img {
    max-width: 100%;
  }
`;
