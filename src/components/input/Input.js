import styled from 'styled-components'

const Input = styled.input`
border: var(--border);
border-radius: 6px;
height: 48px;
// width: 100%;
padding-left: 15px;
color: var(--blue-2);
// flex: 1;
&::placeholder {
  color: var(--grey-1);
  font-size: var(--small);
  font-weight: var(--font-normal);
  margin: 5px;
}
`

export default Input;