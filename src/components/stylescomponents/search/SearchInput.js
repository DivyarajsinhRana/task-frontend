import styled from 'styled-components'

const SearchInput = styled.input`
width: 95% ;
background: var(--white-1);
border: var(--border);
border-radius: 6px;
padding: 16px 0px 16px 45px ;
flex: 1;
&::placeholder {
    color: var(--grey-1);
    font-size: var(--small);
    font-weight: var(--font-normal);
    margin: 5px;
  }
`

export default SearchInput;