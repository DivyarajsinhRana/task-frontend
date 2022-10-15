import styled from 'styled-components'

const PaginateButton = styled.button`
display: flex;
flex-direction: row;
width: 100px;
color: var(--blue-3);
border: 1px solid var(--black-1);
// padding: 9px 18px 6px 5px;
height:30px;
background: var(--white-3);
align-items:center;
justify-content: center;
border-radius:${({direction})=>direction==="next" ? "0px 6px 6px 0px" : '6px 0px 0px 6px'} ;
user-select: none;
cursor:pointer
`

export default PaginateButton