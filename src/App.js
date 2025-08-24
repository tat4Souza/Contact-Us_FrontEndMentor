import classNames from "classnames";
import Button from "./components/Button";
import LabelInput from "./components/LabelInput";
import QueryRadio from "./components/QueryRadio";
import TextInput from "./components/TextInput";
import Modal from "./components/Modal";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

function App() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      query: "",
      message: "",
      consent: false,
    },
  });
  const [isOpen, setIsOpen] = useState(false);

  console.log(errors);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 2000);
  };

  return (
    <div className="content">
      <div className="form__container">
        <h1>Contact Us</h1>
        <form className="form__content" onSubmit={handleSubmit(onSubmit)}>
          <LabelInput title="First Name">
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <TextInput
                  disabled={isSubmitting}
                  invalid={errors.firstName}
                  {...field}
                />
              )}
            />
            {errors.firstName && (
              <p className="error-message">{errors.firstName.message}</p>
            )}
          </LabelInput>
          <LabelInput title="Last Name">
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <TextInput
                  disabled={isSubmitting}
                  invalid={errors.lastName}
                  {...field}
                />
              )}
            />
            {errors.lastName && (
              <p className="error-message">{errors.lastName.message}</p>
            )}
          </LabelInput>
          <LabelInput title="Email Address" className="grid--full">
            <Controller
              name="email"
              control={control}
              rules={{
                required: "This field is required",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Please enter a valid email adress",
                },
              }}
              render={({ field }) => (
                <TextInput
                  disabled={isSubmitting}
                  invalid={errors.email}
                  {...field}
                />
              )}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </LabelInput>
          <LabelInput title="Query Type" className="grid--full">
            <div className="row-flex">
              <QueryRadio
                control={control}
                title="Genreal Enquiry"
                id="gen_enqui"
                isDisabled={isSubmitting}
                rules={{ required: "Please select a query type" }}
                name="query"
              />
              <QueryRadio
                control={control}
                title="Support Request"
                id="sup_reque"
                isDisabled={isSubmitting}
                rules={{ required: "Please select a query type" }}
                name="query"
              />
            </div>
            {errors.query && (
              <p className="error-message">{errors.query.message}</p>
            )}
          </LabelInput>
          <LabelInput title="Message" className="grid--full">
            <textarea
              className={classNames("input input--text-area", {
                "input--invalid": errors.message,
                "input--disabled": isSubmitting,
              })}
              disabled={isSubmitting}
              {...register("message", { required: "This field is required" })}
            />
            {errors.message && (
              <p className="error-message">{errors.message.message}</p>
            )}
          </LabelInput>

          <LabelInput empty className="grid--full">
            <div
              className={classNames("input-container--check ", {
                "input--disabled": isSubmitting,
              })}
              tabIndex={0}
              role="checkbox"
              aria-checked={watch("consent")}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault();
                  setValue("consent", !watch("consent"), {
                    shouldValidate: true,
                  });
                }
              }}
            >
              <input
                type="checkbox"
                id="consent"
                {...register("consent", {
                  required:
                    "To submit this form, please consent to being contacted",
                })}
                tabIndex={-1}
              />
              <label htmlFor="consent" className="float-label">
                I consent to being contacted by the team
                <span>*</span>
              </label>
            </div>
            {errors.consent && (
              <p className="error-message">{errors.consent.message}</p>
            )}
          </LabelInput>

          <Button
            label="Submit"
            labelLoading="Loading..."
            isSubmitting={isSubmitting}
            className="grid--full"
          />
        </form>
      </div>
      <Modal isOpen={isOpen} />
    </div>
  );
}

export default App;
