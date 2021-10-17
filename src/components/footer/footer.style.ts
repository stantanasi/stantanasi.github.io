import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 20px 5% 4rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 2rem;
  }
`

export const FooterDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
`;
