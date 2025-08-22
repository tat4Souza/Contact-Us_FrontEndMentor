import Button from "./components/Button";
import LabelInput from "./components/LabelInput";
import TextArea from "./components/TextArea";
import TextInput from "./components/TextInput";

function App() {
  return (
    <div className="content">
      <div className="form__container">
        <h1>Contact Us</h1>
        <form className="form__content">
          <LabelInput title="First Name">
            <TextInput />
          </LabelInput>
          <LabelInput title="Last Name">
            <TextInput />
          </LabelInput>
          <LabelInput title="Email Address" className="grid--full">
            <TextInput />
          </LabelInput>
          <LabelInput title="Message" className="grid--full">
            <TextArea />
          </LabelInput>

          <div className="input-container--check grid--full">
            <input type="checkbox" id="consent" />
            <label for="consent" className="float-label">
              I consent to being contacted by the team
              <span>*</span>
            </label>
          </div>

          <Button label="Submit" className="grid--full" />
        </form>
      </div>
    </div>
  );
}

export default App;
