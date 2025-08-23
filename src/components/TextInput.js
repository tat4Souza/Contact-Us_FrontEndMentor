import classNames from "classnames";

function TextInput({ value, onChange, invalid, disabled }) {
  return (
    <input
      type="text"
      className={classNames("input input--text", {
        "input--invalid": invalid,
        "input--disabled": disabled,
      })}
      value={value}
      disabled={disabled}
      onChange={onChange}
    ></input>
  );
}

export default TextInput;
