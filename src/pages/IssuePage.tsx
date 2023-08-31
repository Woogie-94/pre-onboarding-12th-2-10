import { Fragment, useEffect } from "react";
import { styled } from "styled-components";

import Skeleton from "../components/common/Skeleton";
import AdItem from "../components/issue/AdItem";
import IssueItem from "../components/issue/IssueItem";
import { CONTENT_COUNT } from "../constants/issue";
import usePaginationFetch from "../hooks/usePaginationFetch";
import { getIssueList } from "../services/issue";

const IssuePage = () => {
  const { data: issueList, fetch, isLoading } = usePaginationFetch({ initialData: [], fetchFn: getIssueList });

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Wrapper>
      <Content>
        <ul>
          {issueList.map((issue, index) => (
            <Fragment key={issue.id}>
              <IssueItem issue={issue} />
              {!((index + 1) % CONTENT_COUNT) && <AdItem />}
            </Fragment>
          ))}
        </ul>
        {isLoading && (
          <>
            <Skeleton width="100%" height="67px" margin="8px 0" />
            <Skeleton width="100%" height="67px" margin="8px 0" />
            <Skeleton width="100%" height="67px" margin="8px 0" />
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default IssuePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 960px;
  padding-bottom: 16px;
`;
