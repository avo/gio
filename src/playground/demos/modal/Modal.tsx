import { css } from '@emotion/react'
import React from 'react'
import { Button, ButtonGroup } from '../../../core/Button'

const modalOverlayStyle = css`
  align-items: center;
  background-color: hsla(217, 45%, 9%, 0.75); /* Gray blue background with 50% opacity */
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: var(--av-zindex-layout-modal);
`

const modalContentStyle = css`
  background-color: var(--av-color-white);
  border-radius: var(--av-border-radius-lg);
  box-shadow: 0 2px 4px hsla(0, 0, 0, 50%);
  color: var(--av-color-fg-inverse);
  padding: var(--av-space-md);
`

const Modal: React.FC<ModalProps> = ({ onClose, show }) => {
  if (!show) {
    return null
  }
  return (
    <div css={modalOverlayStyle} onClick={onClose}>
      <div css={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <h2>Modal Title</h2>
        <p>This is a modal window.</p>
        <ButtonGroup>
          <Button onClick={() => console.log('foo')}>Click me should not bubble</Button>
          <Button onClick={onClose}>Close</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}
export default Modal

interface ModalProps {
  onClose: () => void
  show: boolean
}
