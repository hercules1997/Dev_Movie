import styled from 'styled-components'

import { defaultColors } from '../../styles/globalStyles'

const Container = styled.div`
  h2 {
    margin-top: 15px;
    margin-left: 50px;
    font-size: 2rem;
  }

  .swiper-wrapper {
    display: flex;
    gap: 20px;
    padding: 20px;
  }
  color: ${defaultColors.secondyColor};

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`

export { Container }
