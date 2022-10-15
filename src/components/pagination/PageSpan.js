import styled from 'styled-components'

const PageSpan = styled.span`
color: ${({active})=>active ? "var(--white-1)" : "var(--blue-1)"};
padding: 7px 15px;
border-top: 1px solid var(--black-2);
border-bottom: 1px solid var(--black-2);
cursor: pointer;
background:${({active})=>active ? "var(--blue-1)" : "var(--white-1)" };
`

export default PageSpan