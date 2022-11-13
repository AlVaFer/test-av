import styled, { css } from 'styled-components'

export const Title = styled.h1`
  color: var(--light-blue);
  font-size: ${({ font }) => (font === 'big' ? '1.8rem' : '1rem')};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`
export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 3rem;
  height: 5rem;
  border-bottom: 1px solid LightGrey;
`
