import classNames from "classnames";
import { useController } from "react-hook-form";

function QueryRadio(props) {
  const { field } = useController(props);

  return (
    <label
      {...field}
      className={classNames("input input-container--radio", {
        "input--disabled": props.disabled,
      })}
    >
      <input
        disabled={props.disabled}
        name={props.name}
        value={props.id}
        type="radio"
        id={props.id}
      />
      <label for={props.id}>{props.title}</label>
    </label>
  );
}

export default QueryRadio;
