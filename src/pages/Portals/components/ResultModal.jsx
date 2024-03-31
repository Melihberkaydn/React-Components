/* eslint-disable react/prop-types */

import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const resultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, resetTime },
  ref
) {
  const modal = useRef();

  // useImperativeHandle exposes a custom function to decouple the component, and it
  // defines these functions so that we have a singlwe point of functionality.
  useImperativeHandle(ref, () => {
    return {
      // open function is exposed to outside. We can call where we use this component.
      open() {
        modal.current.showModal();
      },
    };
  });

  const userLost = remainingTime <= 0;
  const remainingTimeInSeconds = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog ref={modal} className="result-modal" onClose={resetTime}>
      {userLost && <h2>You Lost!</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        Target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{remainingTimeInSeconds} seconds</strong> left!
      </p>
      <form method="dialog" onSubmit={() => resetTime()}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default resultModal;
