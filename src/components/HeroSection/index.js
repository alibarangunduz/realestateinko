import React, {useState} from 'react'
import Video from '../../videos/testpage.jpg'
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
const HeroElements = () => {
    
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer>
            <HeroBg>
            
                <img src={Video}></img>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Uzman Kadromuzla  
                </HeroH1>
                <HeroP>
                    Hayallerinizi gerçekleştirelim
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                    Hemen başlayın {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroElements
