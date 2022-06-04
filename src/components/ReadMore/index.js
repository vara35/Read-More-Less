import {useState} from 'react'

import {
  ReadMoreContainer,
  ReactTextContainer,
  ReactHeading,
  ReactDescription,
  ReactImage,
  Description,
  ImageAndTextContainer,
  Button,
} from './styledComponents'

const reactHooksFullDescription =
  'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.'

const reactHooksHalfDescription =
  'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.'

const ReadMore = () => {
  const [isTextShow, setText] = useState(true)

  const text = isTextShow
    ? reactHooksHalfDescription
    : reactHooksFullDescription

  const buttonText = isTextShow ? 'Read More' : 'Read Less'

  const updateText = () => setText(prevState => !prevState)

  return (
    <ReadMoreContainer>
      <ReactTextContainer>
        <ReactHeading>React Hooks</ReactHeading>
        <ReactDescription>Hooks are a new addition to React</ReactDescription>
      </ReactTextContainer>
      <ImageAndTextContainer>
        <ReactImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{text}</Description>
      </ImageAndTextContainer>
      <Button type="button" onClick={updateText}>
        {buttonText}
      </Button>
    </ReadMoreContainer>
  )
}

export default ReadMore
