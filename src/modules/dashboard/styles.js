import styled from 'styled-components'

const StyledList =  styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  
  & > li:before {
    content: '- ';
  }
`
export { StyledList };