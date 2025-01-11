import React from 'react'
import { Link } from 'react-router-dom'
import type { MDXComponents } from 'mdx/types'
import { Anchor } from '../core/Anchor'
import { heading1Style, heading2Style, heading3Style } from '../styles/typography'

export const MdxComponents: MDXComponents = {
  a: ({ children, href, ...props }: MdxAnchorProps) =>
    href?.startsWith('http') ? (
      <Anchor as="a" target="_blank" {...props}>
        {children}
      </Anchor>
    ) : (
      <Anchor as={Link} to={href ? href : '/'} {...props}>
        {children}
      </Anchor>
    ),
  code: ({ children }: MdxComponentProps) => <code>{children}</code>,
  h1: ({ children }: MdxComponentProps) => <h1 css={heading1Style}>{children}</h1>,
  h2: ({ children }: MdxComponentProps) => <h2 css={heading2Style}>{children}</h2>,
  h3: ({ children }: MdxComponentProps) => <h3 css={heading3Style}>{children}</h3>,
  hr: () => <hr />,
  li: ({ children }: MdxComponentProps) => <li>{children}</li>,
  p: ({ children }: MdxComponentProps) => <p>{children}</p>,
  ul: ({ children }: MdxComponentProps) => <ul>{children}</ul>,
}

interface MdxComponentProps {
  children?: React.ReactNode
}

interface MdxAnchorProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'target'> {
  children?: React.ReactNode
}
