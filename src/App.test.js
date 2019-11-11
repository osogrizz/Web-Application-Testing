import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './components/dashboard';
import Display from './components/display' 

afterEach(rtl.cleanup)


describe('Display', () => {
  it('has an element with the text Strikes.', () => {
    const simulatedDOM = rtl.render(<Display />);
    const div1 = simulatedDOM.queryByText(/strikes/i);
    expect(div1).toBeInTheDocument()
    
  })
  it('has an element with the text Ball', () => {
    const simulatedDOM = rtl.render(<Display />);
    const div2 = simulatedDOM.queryByText(/ball/i);
    expect(div2).toBeInTheDocument()
    
  })
}) 

describe('Dashboard', () => {
  it('has an element with the text foul.', () => {
    const simulatedDOM = rtl.render(<Dashboard />);
    const button1 = simulatedDOM.queryByText(/foul/i);
    
    expect(button1).toBeInTheDocument()
    
  })
  it('has an element with the text of hit', () => {
    const simulatedDOM = rtl.render(<Dashboard />);
    const button2 = simulatedDOM.queryByText(/hit/i);
    expect(button2).toBeInTheDocument()
  })
}) 
