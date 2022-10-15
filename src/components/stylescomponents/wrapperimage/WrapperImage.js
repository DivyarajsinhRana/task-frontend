import styled from 'styled-components'
import ArrowFrameBlue from '../../assets/images/ArrowFrameBlue.png'

const WrapperImage = styled.div`
display: flex;
flex-direction: column;
min-height: 100%;
justify-content: space-between;
justify-content: center;
background-color: var(--blue-1);
background-image: url(${ArrowFrameBlue});
background-position: 0%;
background-repeat: no-repeat;
background-position-y: 100%;
background-size: contain;
min-height: 100%;
`

export default WrapperImage;