import { useState } from 'react';

function IMCCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState('');

  const calculateIMC = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const imcValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setImc(imcValue);
      classifyIMC(imcValue);
    }
  };

  const classifyIMC = (imcValue) => {
    let classification = '';
    if (imcValue < 18.5) {
      classification = 'Abaixo do peso';
    } else if (imcValue >= 18.5 && imcValue < 24.9) {
      classification = 'Peso normal';
    } else if (imcValue >= 25 && imcValue < 29.9) {
      classification = 'Sobrepeso';
    } else if (imcValue >= 30 && imcValue < 34.9) {
      classification = 'Obesidade grau 1';
    } else if (imcValue >= 35 && imcValue < 39.9) {
      classification = 'Obesidade grau 2';
    } else {
      classification = 'Obesidade grau 3';
    }
    setClassification(classification);
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <div>
        <label>
          Peso (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ex: 70"
          />
        </label>
      </div>
      <div>
        <label>
          Altura (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Ex: 170"
          />
        </label>
      </div>
      <button onClick={calculateIMC}>Calcular IMC</button>
      {imc && (
        <div>
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {classification}</p>
        </div>
      )}
    </div>
  );
}

export default IMCCalculator;
