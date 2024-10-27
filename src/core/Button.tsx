import { css } from '@emotion/react';
import React, { ElementType, forwardRef, Ref } from 'react';
import { focusVisibleMixin } from '../styles/Mixins';
import { IntrinsicAttributes } from '../types/polymorphic';

const primaryButtonStyle = css`
  ${focusVisibleMixin};
  background-color: var(--av-color-primary-bg);
  border: 1px solid var(--av-color-primary-border);
  border-radius: var(--av-border-radius-md);
  box-sizing: border-box;
  color: var(--av-color-link-fg);
  cursor: pointer;
  font-size: var(--av-font-step--1);
  margin: 0;
  padding-block: var(--av-space-2xs);
  padding-inline: var(--av-space-sm);
  transition: border-color 0.25s;

  :hover,
  :visited:hover,
  :focus,
  :visited:focus {
    color: var(--av-color-link-fg-hover);
    background-color: var(--av-color-primary-bg-hover);
    border: 1px solid var(--av-color-primary-border-hover);
  }

  :active,
  :visited:active {
    color: var(--av-color-link-fg-active);
    background-color: var(--av-color-primary-bg);
    border: 1px solid var(--av-color-primary-border-active);
  }
`;

// TODO: add secondary variant
const secondaryButtonStyle = css``;

// TODO: Create a base component between Anchor and Button
export const Button = forwardRef(function ButtonWithRef(
  { as: Component = 'button', target, variant = 'primary', ...props }: ButtonOwnProps,
  ref: Ref<Element>
) {
  const anchorProps =
    target === '_blank'
      ? {
          rel: 'noreferrer',
          target,
        }
      : {};

  const buttonProps = {
    type: 'button',
  };

  return (
    <Component
      ref={ref}
      css={variant === 'primary' ? primaryButtonStyle : secondaryButtonStyle}
      {...(Component === 'a' && anchorProps)}
      {...(Component === 'button' && buttonProps)}
      {...props}
    />
  );
}) as <E extends ElementType = 'button'>(props: ButtonProps<E>) => React.JSX.Element;

export interface ButtonOwnProps<E extends ElementType = ElementType> {
  as?: E;
  target?: '_blank';
  variant?: 'primary' | 'secondary';
}

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<IntrinsicAttributes<E>, keyof ButtonOwnProps>;
