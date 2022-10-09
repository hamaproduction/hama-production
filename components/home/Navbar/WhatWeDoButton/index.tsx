import { useRef, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { useHoverDirty } from 'react-use'
import Modal from './Modal'
import LinkItem from '../LinkItem'
const WhatWeDoButton = () => {
  const ref = useRef(null)
  const hovered = useHoverDirty(ref)

  const [showModal, setShowModal] = useState(false)

  return (
    <div onMouseEnter={() => setShowModal(true)}
         onMouseLeave={() => setShowModal(false)}
         className="relative">
      <button
        ref={ref}
        className="uppercase text-white hover:text-primary-yellow-1 duration-100 font-light"
      >
        <div className="flex items-baseline gap-1">
        <LinkItem label="our services " link="/production" />
          <FaChevronRight />
        </div>
        
      </button>
      <Modal show={showModal} close={() => setShowModal(false)} />
      
    </div>
  )
}

export default WhatWeDoButton
