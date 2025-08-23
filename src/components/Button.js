import classNames from "classnames";

function Button({ label, labelLoading, className, isSubmitting }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={classNames("button", className, {
        "button--disabled": isSubmitting,
      })}
    >
      {isSubmitting ? labelLoading : label}
    </button>
  );
}

export default Button;
