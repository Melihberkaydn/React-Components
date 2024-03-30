/* eslint-disable react/prop-types */
import "./Button.css";

export default function Button({ children, Icon, mode = "filled", ...props }) {
  // Todo: Build this component!
  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>

  const baseClass = Icon ? "button icon-button" : "button";
  return (
    <button
      {...props}
      className={baseClass.concat(" ", mode.concat("-button"))}
    >
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
