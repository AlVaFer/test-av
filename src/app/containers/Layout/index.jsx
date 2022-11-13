import React from 'react'
import { Wrapper, Content } from './styles'

const Layout = ({ children, header }) => (
  <Wrapper>
    <header>{header}</header>
    <main>
      <Content>{children}</Content>
    </main>
  </Wrapper>
)

export default Layout
