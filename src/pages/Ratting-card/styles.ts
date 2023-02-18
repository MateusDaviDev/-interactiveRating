import styled from "styled-components";

export const ContainerBackAndImage = styled.div`
    display: flex;
    margin-left: -25px;
    a{
      color:#969FAD ;
    }
    img{
      margin: 0 auto;
    }
`
export const Title = styled.h2`
    color: white;
    text-align: center;
    font-weight: 700;
    font-family: Overpass;
    font-size: 1.5rem;
    line-height:1.8rem;
`

export const TextSelected = styled.p`
    align-self: center;
    color: #f57414;
    border-radius: 22.5px;
    text-align: center;
    padding: 7px 15px;
    font-size: 12px !important;
    background-color: #393f47;
    width: 9rem;
    height: 2rem;
`
export const CardContainer = styled.div`
    display: flex;
    height: 20rem;
    width: 20rem;
    border-radius: 1rem;
    flex-direction: column;
    background: linear-gradient(to right top, #232A34,#181E27);
    color: #131519;
    gap: 1rem;
    box-sizing: border-box;
    padding: 2rem 2.5rem;

@media (max-width: 768px) {
    flex-direction: column;
    height: 22rem;
    width: 20rem; 
  }
`
export const TextRatingCard = styled.p`
    color: #969FAD;
    text-align: center;
`

