import React from 'react';

import { getClassName } from '@kibalabs/core';
import { ISingleAnyChildProps } from '@kibalabs/core-react';
import { BackgroundView, ContainingView, IBackgroundConfig } from '@kibalabs/ui-react';
import styled from 'styled-components';

export interface ISectionProps {
  id?: string;
  className?: string;
  background?: IBackgroundConfig;
  isFullHeight?: boolean;
}
export interface IInternalSectionProps extends ISectionProps, ISingleAnyChildProps {
  // sectionHolderRef?: React.RefObject<HTMLElement> | null;
}
interface StyledSectionProps {
}
const StyledSection = styled.section<StyledSectionProps>`
  &.fullHeight {
    flex-grow: 1;
    display: flex;
  }
`;
StyledSection.displayName = 'section-inner';

export const Section = (props: IInternalSectionProps): React.ReactElement => {
  return (
    <BackgroundView
      className={getClassName(Section.displayName, props.className)}
      {...props.background || { color: '$colors.background' }}
    >
      <StyledSection
        id={props.id}
        className={getClassName(StyledSection.displayName, props.isFullHeight && 'fullHeight')}
      >
        <ContainingView>
          {props.children}
        </ContainingView>
      </StyledSection>
    </BackgroundView>
  );
};

Section.displayName = 'section';
