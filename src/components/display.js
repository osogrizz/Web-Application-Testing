import React from 'react'
import styled from 'styled-components'

const Display = (props) => {
  return (
    <Container>
      Balls:<DisplayItem>{props.balls}</DisplayItem>

      Strikes:<DisplayItem>{props.strikes}</DisplayItem>
    </Container>
  )
}

export default Display


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const DisplayItem = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid gray;
`