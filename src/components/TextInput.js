import classNames from "classnames";

function TextInput({ value, onChange, invalid }) {
  return (
    <input
      type="text"
      className={classNames("input input--text", { "input--invalid": invalid })}
      value={value}
      onChange={onChange}
    ></input>
  );
}

export default TextInput;
