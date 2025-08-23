import { useController } from "react-hook-form";

function QueryRadio(props) {
  const { field } = useController(props);

  return (
    <label {...field} className="input input-container--radio">
      <input name={props.name} value={props.id} type="radio" id={props.id} />
      <label for={props.id}>{props.title}</label>
    </label>
  );
}

export default QueryRadio;
