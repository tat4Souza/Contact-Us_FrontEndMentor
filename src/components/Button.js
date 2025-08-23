import classNames from "classnames";

function Button({ label, className }) {
  return (
    <button type="submit" className={classNames("button", className)}>
      {label}
    </button>
  );
}

export default Button;
