import styled, { css } from 'styled-components';
import { SectionWrapper } from '../common/Section.style';

export const SkillsWrapper = styled(SectionWrapper)`
`;

export const SkillsCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 40px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;


export const SkillCategoryWrapper = styled.div``;

export const SkillCategoryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  :hover {
    cursor: pointer;
  }
`;

export const SkillCategoryName = styled.h3``;

export const SkillsList = styled.div<{ show: boolean; }>`
  ${props => !props.show && css`
    height: 0;
    overflow: hidden;
  `}
`;


export const SkillCardWrapper = styled.div`
  margin-bottom: 10px;
`;

export const SkillTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const SkillName = styled.h4``;

export const SkillPercentage = styled.span`
  display: none;
`;
