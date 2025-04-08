import { styled } from '@linaria/react';
import { mediaWidth } from '../../styles/media';

const SidebarStyled = styled.div`
  width: 200px;
  height: 100%;
  background-color: var(--background-color-2);
  ${mediaWidth('lg')} {
    width: 500px;
  }
`;

export const Sidebar = () => {
  return (
    <SidebarStyled>
      <span>111</span>
    </SidebarStyled>
  );
};
