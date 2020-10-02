import styled from 'styled-components'

export default styled.div`
  font-family: sans-serif;
  border: 1px solid #ececec;
  text-align: left;
  flex: ${props => props.flex || 'none'};
  padding: 5px;
  margin: 5px;
  
  & > div {
    text-align: left;
  }
`
