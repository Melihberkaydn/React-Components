/* eslint-disable react/prop-types */

import { forwardRef, useImperativeHandle, useRef } from "react";

const resultModal = forwardRef(function ResultModal(
  { result, targetTime },
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

  return (
    <dialog ref={modal} className="result-modal">
      <h2>You {result}</h2>
      <p>
        Target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>{targetTime} seconds</strong> left!
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default resultModal;
