import styled, { css } from 'styled-components'

// Importando as cores mais usadas
import { defaultColors } from '../../styles/globalStyles'

// Padronizando configurações dos botões, tornando disponivel para as demais botões e configurações
const ComponentButton = css`
  background: transparent;
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  color: ${defaultColors.secondyColor};

  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${defaultColors.primaryColor};
  border-radius: 1rem;
  transition: 0.5s;

  &:hover {
    transition: 1s;
  }
`

// Botão "Assista agora!"
const ButtonRed = styled.button`
  ${ComponentButton}
  background: ${defaultColors.primaryColor};

  &:hover {
    box-shadow: 0 5px 7px ${defaultColors.darckColor};
    box-shadow: 0px 0px 50px ${defaultColors.shadowColor};
  }
`

// Botão "Assista o triller"
const ButtonWhite = styled.button`
  ${ComponentButton}
  transition: 1s;
  border: 1px solid ${defaultColors.secondyColor};

  &:hover {
    background: ${defaultColors.secondyColor};
    color: ${defaultColors.primaryColor};
    box-shadow: 0px 0px 7px 8px ${defaultColors.shadowColorWhite};
  }
`
// Exportando componentes
export { ButtonRed, ButtonWhite }
