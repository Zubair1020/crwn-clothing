import { FromInput, FromInputLabel, InputGroupCon } from "./form-input";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <InputGroupCon>
      <FromInput
        {...otherProps}
        required
      />
      {label && (
        <FromInputLabel shrink={otherProps.value.length}>
          {label}
        </FromInputLabel>
      )}
    </InputGroupCon>
  );
};

export default FormInput;
