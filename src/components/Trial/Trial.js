import React from 'react'
import styled from 'styled-components';

const Trial = () => {
  return (
    <TrialContainer className='trial-container'>
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
          <H3 style={{ marginTop: '20px' }}>250</H3>
          <p style={{  marginTop: '10px', fontWeight: 500 }}>Tutorials+</p>
        </TrialDescription>
        <TrialDescription className="description">
          <img src="/img/trial2.png" alt="trial2" />
          <H3 style={{ marginTop: '20px' }}> 14 -day</H3>
          <p style={{  marginTop: '10px', fontWeight: 500 }}>unlimited watching</p>
        </TrialDescription>
        <TrialDescription className="description">
          <img src="/img/trial3.png" alt="trial3" />
          <H3 style={{ marginTop: '20px' }}> 126 +</H3>
          <p style={{  marginTop: '10px', fontWeight: 500 }}>Downloads</p>
        </TrialDescription>
      </SectionImages>
    </TrialContainer>
  )
}

const TrialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 150px 0px;
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  padding-top: 70px;
`

const H3 = styled.h3`
  display: flex;
  font-size: 3rem;
  font-weight: 700;
`

const H1 = styled.h1`
  display: flex;
  padding: 10px;
  font-size: 5.5rem;
  font-weight: 900;
  color: #817dea;
`

const SectionImages = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 100px;
`

const TrialDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
`

export default Trial;