function TextInput({ value, onChange }) {
  return (
    <input
      type="text"
      className="input input--text"
      value={value}
      onChange={onChange}
    ></input>
  );
}

export default TextInput;
