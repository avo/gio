import { useState } from 'react'
import { Button } from '../../../core/Button'
import { PlaygroundWrapper } from '../../layout/PlaygroundWrapper'
import Modal from './Modal'

export default function Demo() {
  const [showModal, setShowModal] = useState(false)

  return (
    <PlaygroundWrapper title="Modal Example">
      <Button onClick={() => setShowModal(true)}>Open Modal</Button>
      <Modal onClose={() => setShowModal(false)} show={showModal} />
    </PlaygroundWrapper>
  )
}
