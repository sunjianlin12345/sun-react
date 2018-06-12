import React from 'react'
import styled from 'styled-components'

// background-image: url(assets/wip.jpg);
const Root = styled.div`
  width: 100%;
  height: 75vh;
  background-size: cover;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorPage = (props) => {
  return (
    <Root>404</Root>
  )
}

export default ErrorPage
