/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { CSSProperties, HTMLAttributes } from 'react'

const fluidGridStyle = css`
  /* user overridable - needs to be declared for override */
  --grid-gap: 24px;
  --grid-column-max: 4;
  --grid-item-min-width: 160px;

  /* calculated dynamic values used for fluid layout */
  --gap-count: calc(var(--grid-column-max) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-gap));
  --grid-item-max-width: calc(
    (100% - var(--total-gap-width)) / var(--grid-column-max)
  );

  display: grid;
  grid-gap: var(--grid-gap);
  grid-template-columns: repeat(
    auto-fill,
    minmax(max(var(--grid-item-min-width), var(--grid-item-max-width)), 1fr)
  );
`

export function Grid({
  children,
  columnMax,
  gridGap,
  itemMinWidth,
  ...props
}: GridProps) {
  return (
    <div
      css={fluidGridStyle}
      data-testid="grid"
      {...props}
      style={
        {
          '--grid-column-max': columnMax,
          '--grid-gap': gridGap,
          '--grid-item-min-width': itemMinWidth,
        } as GridCustomCSS
      }
    >
      {children}
    </div>
  )
}

/**
 * The css variables available for override.
 */
export interface GridCustomCSS extends CSSProperties {
  '--grid-column-max': number
  '--grid-gap': string
  '--grid-item-min-width': string
}

interface GridProps extends HTMLAttributes<HTMLElement> {
  /**
   * The maximum number of grid columns
   * @default 4
   */
  columnMax?: number
  /**
   * The space between grid items
   * @default '24px'
   */
  gridGap?: string
  /**
   * The minimum width a grid item squishes down to before
   * the fluid layout changes the number of columns
   */
  itemMinWidth?: string
}
