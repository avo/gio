import React from 'react'
import { ComponentPropsWithRef, JSXElementConstructor } from 'react'

// works https://gist.github.com/kripod/4434e7cecfdecee160026aee49ea6ee8
// https://www.tsteele.dev/posts/react-polymorphic-forwardref
export type IntrinsicAttributes<
  E extends keyof React.JSX.IntrinsicElements | JSXElementConstructor<unknown>,
> = JSX.LibraryManagedAttributes<E, ComponentPropsWithRef<E>>
