import { styled } from "styled-components";

interface Props {
  width: string;
  height: string;
  margin: string;
}
const Skeleton = ({ width, height, margin }: Props) => {
  return <Box $width={width} $height={height} $margin={margin} />;
};

export default Skeleton;

const Box = styled.div<{ $width: string; $height: string; $margin: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  margin: ${({ $margin }) => $margin};
  border-radius: 8px;
  background-color: #656d7630;
`;
