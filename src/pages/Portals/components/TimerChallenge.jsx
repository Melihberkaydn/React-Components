/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const model = useRef();

  const [timeExpired, setTimeExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      model.current.open();
    }, targetTime * 1000);

    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={model}
        targetTime={targetTime}
        result="lost"
      ></ResultModal>
      <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && <p>You Lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeStarted ? handleStop : handleStart}>
            {timeStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeStarted ? "active" : undefined}>
          {timeStarted ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
