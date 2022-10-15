import styled from 'styled-components'

const PaginationScroll = styled.div`
max-width: 160px;
// display: flex;
overflow-x: auto;
overflow-y: hidden;
&::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; 
  scrollbar-width: none;
  padding: 9px 0px;
`

export default PaginationScroll;