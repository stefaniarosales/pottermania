import React from 'react'

//styles
import { StyledButton } from './StyledButton'

export default function Button({children}) {
  return (
    <>
      <StyledButton className="add-to-cart-btn" >
      {children}
      </StyledButton>
    </>
  )
}
