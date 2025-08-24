import classNames from "classnames";
import { useRef } from "react";
import { useController } from "react-hook-form";
import { useCallback } from "react";

function QueryRadio(props) {
  const { field } = useController(props);
  const radioRef = useRef(null);

  const setRefs = useCallback(
    (el) => {
      radioRef.current = el;
      if (typeof field.ref === "function") {
        field.ref(el);
      } else if (field.ref) {
        field.ref.current = el;
      }
    },
    [field]
  );

  const handleKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter" || e.code === "Space") {
      e.preventDefault();
      field.onChange(props.id);
      radioRef.current?.focus();
    }
  };

  return (
    <div
      tabIndex={0}
      className={classNames("input input-container--radio", {
        "input--disabled": props.isDisabled,
      })}
      onKeyDown={handleKeyDown}
      onClick={() => field.onChange(props.id)}
    >
      <input
        ref={setRefs}
        name={props.name}
        value={props.id}
        type="radio"
        id={props.id}
        {...field}
        checked={field.value === props.id}
        onChange={() => field.onChange(props.id)}
        tabIndex={-1}
      />
      <label htmlFor={props.id}>{props.title}</label>
    </div>
  );
}

export default QueryRadio;
