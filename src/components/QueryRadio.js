function QueryRadio({ title, id, name }) {
  return (
    <label className="input input-container--radio">
      <input name={name} type="radio" id={id} />
      <label for={id}>{title}</label>
    </label>
  );
}

export default QueryRadio;
