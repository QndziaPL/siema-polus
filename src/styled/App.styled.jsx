import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: red;
  padding: 20px;
  border-radius: 10px;
`

export const ExtendedAppContainer = styled(AppContainer)`
  border: ${props => props.gruboscChuja}px solid green;
`

export const FajnyHeader = styled.h1`
  color: white;
`
