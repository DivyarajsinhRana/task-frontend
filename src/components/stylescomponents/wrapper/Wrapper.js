import styled from 'styled-components'

const Wrapper = styled.div`
padding-top:${({padding})=>padding ? {padding}: '120px'};
display:flex;
align-items:${({direction})=>direction==="column" ? "center" : 'unset'};
flex-direction:${({direction})=>direction==="column" ? "column" : 'row'};
justify-content:${({direction})=>direction==="column" ? "unset" : 'center'};;
height:100%
`

export default Wrapper;