import styled from 'styled-components'



export const ImgIcon = styled.div`
  border-radius: 999px;
  padding: .5rem ;
  box-sizing: content-box;
  display: flex;
  background-color: #262E38;
  width: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const HomeStyled = styled.div`
display: flex;
height: 26rem;
width: 25rem;
border-radius: 1rem;
background: linear-gradient(to right top, #232A34,#181E27);
justify-content: space-between;
padding: 2rem 2.5rem;
flex-direction: column;
font-family: 'Overpass';
font-weight: 400;


h2{
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 35px;
}
p{
  font-size: 15px;
  line-height: 24px;
  font-family: 'Overpass';
  color: #969FAD;
}

@media (max-width: 768px) {
    height: 22rem;
    width: 20rem; 

  
  }

 

`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  & button{
    width: 51px;
    height: 51px;
    border-radius: 999px;
    border: none;
    outline: none;
    display: flex;
    background-color: #262E38;
    padding: 10px 15px;
    color: #7C8798;;
    align-items: center;
    justify-content:center;
    font-family: 'Overpass';
    font-weight: 700;
    line-height: 24px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover{
      background-color: #7c8798;
      color: white;
      border: none;
      transition: .2s;
    }
    
    &:focus{
      background-color: #FC7614;
      color: white;
      transition: .1s;
    }
  }
  `
export const ButtonSubmit = styled.button`
  background-color: #FC7614;
  width: 100%;
  border-radius: 1.375rem;
  padding: .5rem;
  border: none;
  text-transform: uppercase;
  color: white;
  -webkit-font-smoothing:antialiased;
  font-family: 'Overpass';
  font-weight: 700;
  font-size: .8rem;
  line-height: 19px;
  letter-spacing: 2px;
  &:hover{
    background-color: white;
    color: #FC7614;
    transition: .2s;
  }

`