import React from 'react'
import Icon1 from '../../images/svg-5.svg'
import Icon2 from '../../images/svg-6.svg'
import Icon3 from '../../images/svg-1.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Servislerimiz</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expanses</ServicesH2>
                    <ServicesP>We help reduce fess and ıncrease your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virutal Office</ServicesH2>
                    <ServicesP>You can access our platform online anywhere in the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium Benifits</ServicesH2>
                    <ServicesP>Unlock our special membership card thaat returns 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services