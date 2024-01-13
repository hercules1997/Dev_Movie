import styled from 'styled-components'

import { defaultColors } from '../../styles/globalStyles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 4px ${defaultColors.shadowColor};
  border-radius: 15px;

  img {
    width: 200px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }

  h3 {
    margin-top: 10px;
    text-align: center;
    height: 50px;
  }

  color: wheat;
`

export { Container }
