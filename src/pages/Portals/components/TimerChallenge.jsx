/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const model = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsAcive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    model.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    model.current.open();
    clearInterval(timer.current);
  }

  function handleRestart() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={model}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        resetTime={handleRestart}
      ></ResultModal>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsAcive ? handleStop : handleStart}>
            {timerIsAcive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsAcive ? "active" : undefined}>
          {timerIsAcive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
