import React from 'react'
import { Button } from 'react-scroll';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'
const InfoSection = () => {
    return (
        <>
         <InfoContainer id={id}>
            <InfoWrapper>
              <InfoRow>
                 <Column1>
                    <TextWrapper>
                        <TopLine>Topline</TopLine>
                        <Heading>Heading</Heading>
                        <Subtitle>Subtitlesss</Subtitle>
                        <BtnWrap>
                            <Button to='home'>Button</Button>
                        </BtnWrap>
                    </TextWrapper>
                 </Column1>
                 <Column2>
                    <ImgWrap>
                        <Img/>
                    </ImgWrap>
                 </Column2>
              </InfoRow>
            </InfoWrapper>
         </InfoContainer>
        </>
    )
}

export default InfoSection
