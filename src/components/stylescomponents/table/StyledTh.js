import styled from 'styled-components'

const StyledTh = styled.th`
max-width: 0px;
overflow-wrap: break-word;
color: var(--grey-3);
font-size: var(--small);
font-weight: var(--font-medium);
text-align: left;
padding: 0px 5px;
border-bottom: 1px solid var(--white-3);
&:first-child{
  border-top-left-radius: var(--border-radius); 
  border-bottom-left-radius:  var(--border-radius);
}
&:last-child{
  border-bottom-right-radius:  var(--border-radius); 
  border-top-right-radius:  var(--border-radius);
}
`

export default StyledTh;