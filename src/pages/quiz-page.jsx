import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/pages/quiz-page.module.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: [
      'приложение',
      'часть приложения или страницы',
      'то, что я не знаю что такое',
    ],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  const tryAgain = () => {
    setStep(0);
    setCorrect(0)
  };

  const Game = ({ question, onClickVariant, step }) => {
    const percentage = Math.round((step / questions.length) * 100);

    return (
      <>
        <div className={styles.progress}>
          <div
            className={styles.inner}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <h2>{question.title}</h2>
        <ul>
          {question.variants.map((text, index) => (
            <li
              onClick={() => onClickVariant(index)}
              key={text}
            >
              {text}
            </li>
          ))}
        </ul>
      </>
    );
  };

  const Result = ({ correct }) => {
    return (
      <>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
          alt="Result"
        />
        <h3>Правильных ответов: {correct} из {questions.length}</h3>
        <div>
          <button onClick={tryAgain} className={styles.again}>Try again</button>
          <Link to="/">
            <button className={styles.button}>Back</button>
          </Link>
        </div>
      </>
    );
  };

  return (
    <div className={styles.wrapper}>
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}
