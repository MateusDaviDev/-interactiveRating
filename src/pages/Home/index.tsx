import React from 'react'
import  {ButtonsContainer, HomeStyled, ButtonSubmit, ImgIcon}  from './styles'
import {Link,Route} from 'react-router-dom'
import MyContext from '../../contexts/myContext'

export const Home = ()=> {
const {RatingNote,SetRatingNote} = React.useContext(MyContext)
       function handleSetRating(rating:number){
              SetRatingNote(rating)
       }
return (
     
       <HomeStyled>
              <ImgIcon>
                     <img src="src\assets\icon-star.svg" alt="Estrela" width={18} height={18}/>
               </ImgIcon>
               <h2>How did we do?</h2>
               <p>Please let us know how we did with your support request.
                     All feedback is aprreciated yo hep us imporove out offering!
               </p>
               <ButtonsContainer >
                     {[1,2,3,4,5].map((rating)=>(
                    <button
                            onClick={() => SetRatingNote(rating)}
                     >
                            {rating}
                    </button>
                     ))}
               </ButtonsContainer>
                     
               <Link to='/ratting'>
                    <ButtonSubmit
                         disabled={RatingNote==0}
                    >
                         Submit
                    </ButtonSubmit>
               </Link>
       </HomeStyled>
   
  )
}

