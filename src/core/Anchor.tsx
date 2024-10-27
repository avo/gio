import { css } from '@emotion/react';
import React, { ElementType, forwardRef, ReactNode, Ref } from 'react';
import { focusVisibleMixin } from '../styles/Mixins';
import { IntrinsicAttributes } from '../types/polymorphic';

const anchorMixin = css`
  ${focusVisibleMixin};
  border-radius: var(--av-border-radius-xs);
  color: var(--av-color-link-fg);
  font-weight: 600;
  margin-inline: 0.2em; /* give links a tiny bit of breathing room for visibility and focus */
  text-decoration: underline;
  text-decoration-thickness: 1.2px;
  text-underline-offset: 3px;
  text-decoration-color: var(--av-color-primary-border);

  &:hover,
  &:focus {
    color: var(--av-color-link-fg-hover);
    text-decoration-color: var(--av-color-link-fg-hover);
  }

  &:active {
    color: var(--av-color-link-fg-active);
    text-decoration-color: var(--av-color-link-fg-active);
  }

  &:visited {
    color: var(--av-color-link-fg-dimmed);

    :hover,
    :focus {
      color: var(--av-color-link-fg-dimmed-hover);
      text-decoration-color: var(--av-color-link-fg-dimmed-hover);
    }

    :active {
      color: var(--av-color-link-fg-dimmed-active);
      text-decoration-color: var(--av-color-link-fg-dimmed-active);
    }
  }
`;

const anchorPrimaryStyle = css`
  ${anchorMixin};
`;

// TODO: add secondary variant
const anchorSecondaryStyle = css``;

export function AnchorDivider() {
  return <span css={{ paddingInline: 'var(--av-space-2xs)' }}> | </span>;
}

// TODO: Create a base component between Anchor and Button
export const Anchor = forwardRef(function AnchorWithRef(
  { as: Component = 'a', children, target, variant = 'primary', ...props }: AnchorOwnProps,
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
      css={variant === 'primary' ? anchorPrimaryStyle : anchorSecondaryStyle}
      {...(Component === 'a' && anchorProps)}
      {...(Component === 'button' && buttonProps)}
      {...props}
    >
      {children}
    </Component>
  );
}) as <E extends ElementType = 'a'>(props: AnchorProps<E>) => React.JSX.Element;

interface AnchorOwnProps<E extends ElementType = ElementType> {
  as?: E;
  children: ReactNode;
  href?: string;
  target?: '_blank';
  variant?: 'primary' | 'secondary';
}

type AnchorProps<E extends ElementType> = AnchorOwnProps<E> &
  Omit<IntrinsicAttributes<E>, keyof AnchorOwnProps>;
