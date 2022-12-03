import { Container, Content, Row } from "./styles";
import { Input } from './components/Input'
import { Button } from "./components/Button";
import { useState } from "react";




const App = () => {
  
  const [currentNumber, setCurrentNumber] = useState('0')

  const [firstNumber, setFirstNumber] = useState('0');

  const [operation, setOperation] = useState('')

  const setClearNumber = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0'? '': prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);

      setCurrentNumber(String(sum))
      setOperation('')
    }


  }

  const handleSubtraction = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    }else { 
      const subtraction = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subtraction))
      setOperation('')
    }
  }

  const handleMultiplication = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    }else { 
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication))
      setOperation('')
    }
  }

  const handleDivision = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
      
    }
    if(currentNumber === '0') {
     alert(`Impossivel a divisão por '0'. \nPor favor refaça a operação!`)
     setClearNumber()
    
    }else{
      
        const division = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(division))
        setOperation('/')

    }
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
          
        
        case '-':
          handleSubtraction();
          break
        
        case '*':
          handleMultiplication();
          break

        case '/':
          handleDivision();
          break;

        default:
          break;
      }
      
    }
    

  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="c" onClick={() => setClearNumber()}/>
        </Row>
        <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="*" onClick={(handleMultiplication)}/>
        </Row>
        <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="-" onClick={(handleSubtraction)}/>

        </Row>
        <Row>
        <Button label="=" onClick={handleEquals}/>
        
        <Button label="0" onClick={() => handleAddNumber('0')}/>
        <Button label="/" onClick={handleDivision}/>
        <Button label="+" onClick={handleSumNumbers}/>


        </Row>
      </Content>
      
    </Container>
  );
}

export default App;
