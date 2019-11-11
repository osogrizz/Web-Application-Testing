import React from 'react'
import styled from 'styled-components'


const Dashboard = (props) => {
  console.log('dashboard', props)

  return (
    <Container>
      <div>
        <Btn onClick={props.handleCount} value="ball" >Ball</Btn>
      </div>
      <div>
        <Btn onClick={props.handleCount} value="strike" >Strike</Btn>
      </div>
      <div>
        <Btn onClick={props.handleCount} value="foul" >Foul</Btn>
      </div>
      <div>
        <Btn onClick={props.handleCount} value="hit" >Hit</Btn>
      </div>
    </Container>
  )
}

export default Dashboard




const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 900px;
  margin: 40px auto;
`

const Btn = styled.button`
  padding: 15px;
  width: 120px;
  border: none;
  background: orange;
  color: cornflowerblue;
  font-size: 1.2rem;
  letter-spacing: 2px;
`