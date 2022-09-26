import React from 'react'
import styled from 'styled-components';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom'

const Trial = () => {
  return (
    <TrialContainer className='trial-container' id="trial">
      <SectionHeader className="section-header">
        <H3>Included in Your</H3>
        <div className="bold">
          <hr style={{ fontWeight: 700 }} />
          <H1>TRIAL</H1>
          <hr style={{ fontWeight: 700 }} />
        </div>
      </SectionHeader>

      <SectionImages className="section-images">
        <TrialDescription className="description">
          <img src="/img/trial1.png" alt="trial1" />
          <h3 style={{ marginTop: '20px' }}><CountUp end={250} /></h3>
          <p style={{  marginTop: '10px', fontWeight: 500 }}>Tutorials+</p>
        </TrialDescription>
        <TrialDescription className="description">
          <img src="/img/trial2.png" alt="trial2" />
          <h3 style={{ marginTop: '20px' }}><CountUp end={14} /> -day</h3>
          <p style={{  marginTop: '10px', fontWeight: 500 }}>unlimited watching</p>
        </TrialDescription>
        <TrialDescription className="description">
          <img src="/img/trial3.png" alt="trial3" />
          <h3 style={{ marginTop: '20px' }}><CountUp end={126} /> +</h3>
          <p style={{  marginTop: '10px', fontWeight: 500 }}>Downloads</p>
        </TrialDescription>
      </SectionImages>
    </TrialContainer>
  )
}

const TrialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 150px 0px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 50px 20px;
    margin-top: 30px;
  }
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 70px;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding-top: 20px;
    justify-content: flex-start;
  }
`

const H3 = styled.h3`
  display: flex;
  font-size: 3rem;
  font-weight: 700;

  @media (max-width: 768px) {
    width: 50%;
    display: flex;
    font-size: 1.5rem;
    font-weight: 700;
  }
`

const H1 = styled.h1`
  display: flex;
  padding: 10px;
  font-size: 5.5rem;
  font-weight: 900;
  color: #817dea;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    padding: 10px;
    font-size: 2.5rem;
    font-weight: 900;
    color: #817dea;
  }
`

const SectionImages = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 70px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
  }
`

const TrialDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default Trial;