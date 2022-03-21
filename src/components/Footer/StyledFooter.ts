import styled from 'styled-components';
import { WHITE } from '../../styles/colors';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;
  color: ${WHITE};
`;

export const GitHubLogo = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const DevInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 2rem;
  max-width: 400px;

  & a {
    text-decoration: none;
    color: ${WHITE};
  }
`;
