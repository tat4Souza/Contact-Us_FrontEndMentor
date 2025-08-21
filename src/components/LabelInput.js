import classNames from "classnames";

function LabelInput({ className, title, children }) {
  return (
    <div className={classNames("input__container", className)}>
      <label className="float-label">
        {title} <span>*</span>
      </label>
      {children}
    </div>
  );
}

export default LabelInput;
