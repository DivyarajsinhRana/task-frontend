import styled from 'styled-components'

const DropdownItems = styled.div`
display: flex;
align-items: center;
 padding: 10px 0px 10px 10px;
 // border: 1px solid var(--yellow-1);
 min-width: fit-content;
 background: ${({active})=>active ? 'var(--yellow-1)': 'var(--white-1)'};;
`

export default DropdownItems;