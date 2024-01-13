import React from 'react'

import { ButtonRed, ButtonWhite } from './styles'

export function MainButton({ children, btnRed, btnWhite, ...rest }) {
  return (
    <>
      <ButtonRed {...rest} btnRed={btnRed}>
        {children}
      </ButtonRed>
      <ButtonWhite {...rest} btnWhite={btnWhite}>
        {children}
      </ButtonWhite>
    </>
  )
}
