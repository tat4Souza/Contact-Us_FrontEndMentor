import classNames from "classnames";
import Button from "./components/Button";
import LabelInput from "./components/LabelInput";
import QueryRadio from "./components/QueryRadio";
import TextInput from "./components/TextInput";
import { useForm, Controller } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
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

  const onSubmit = (data) => {
    console.log(data);
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
                <TextInput invalid={errors.firstName} {...field} />
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
                <TextInput invalid={errors.lastName} {...field} />
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
                <TextInput invalid={errors.email} {...field} />
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
                rules={{ required: "Please select a query type" }}
                name="query"
              />
              <QueryRadio
                control={control}
                title="Support Request"
                id="sup_reque"
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
              })}
              {...register("message", { required: "This field is required" })}
            />
            {errors.message && (
              <p className="error-message">{errors.message.message}</p>
            )}
          </LabelInput>

          <LabelInput empty className="grid--full">
            <div className="input-container--check ">
              <input
                type="checkbox"
                id="consent"
                {...register("consent", {
                  required:
                    "To submit this form, please consent to being contacted",
                })}
              />
              <label for="consent" className="float-label">
                I consent to being contacted by the team
                <span>*</span>
              </label>
            </div>
            {errors.consent && (
              <p className="error-message">{errors.consent.message}</p>
            )}
          </LabelInput>

          <Button label="Submit" className="grid--full" />
        </form>
      </div>
    </div>
  );
}

export default App;
