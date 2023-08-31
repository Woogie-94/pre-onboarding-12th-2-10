import { styled } from "styled-components";

const AdItem = () => {
  return (
    <AdWrapper>
      <AdLink href="https://www.wanted.co.kr/" target="_blank">
        <AdImage src="https://lean-mahogany-686.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F78345a2f-1d59-4ed7-908a-b78fd1ac0a2e%2Fevent_web__2000x300_(2).jpg?table=block&id=5872c878-bfb1-463e-b22c-f3170bcd1aad&spaceId=7ac0bf59-e3bb-4f76-a93b-27f040ec55b6&width=2000&userId=&cache=v2" />
      </AdLink>
    </AdWrapper>
  );
};
export default AdItem;

const AdWrapper = styled.li`
  width: 100%;
`;

const AdLink = styled.a`
  display: block;
  width: 100%;
  height: 144px;
`;

const AdImage = styled.img`
  width: 100%;
  height: 100%;
`;
