import classNames from "classnames";

function LabelInput({ empty, className, title, children }) {
  return (
    <div className={classNames("input__container", className)}>
      {!empty && (
        <label className="float-label">
          {title} <span>*</span>
        </label>
      )}
      {children}
    </div>
  );
}

export default LabelInput;
