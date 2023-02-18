import React from 'react'
import { CardContainer, ContainerBackAndImage, TextRatingCard, TextSelected, Title } from './styles'
import MyContext from '../../contexts/myContext'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
export function RattingCard  () {
  const {RatingNote,SetRatingNote} = React.useContext(MyContext)

  function handleBackButton(){
    SetRatingNote(0);
  }
  return (
    
    <CardContainer>
      <ContainerBackAndImage >
        <Link to='/'>
            <BsArrowLeft onClick={handleBackButton}/>
        </Link>
          <img src="src\assets\illustration-thank-you.svg" alt="" width={144}/>
      </ContainerBackAndImage>
      <TextSelected>You selected {RatingNote} out of 5</TextSelected>
        <Title>Thank you!</Title>
      <TextRatingCard>We appreciate you taking the time to give a rating.
          If you ever need more support, dont't hesitate to 
          get in touch!
      </TextRatingCard>
    </CardContainer>     
  )
}

export default RattingCard