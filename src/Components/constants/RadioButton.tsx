import React from "react";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
interface Props {
  name?: string;
  items: any;
  onChange: any;
  size?: any;
  checked?: boolean;
  row?: boolean;
  defaultValue?: string;
}

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ checked }) => ({
  ".MuiFormControlLabel-label": checked
    ? { color: "#004080" }
    : { color: "#001f3f" },
}));

const MyFormControlLabel = (props: FormControlLabelProps) => {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
};

const RadioButton: React.FC<Props> = ({
  items,
  name,
  onChange,
  checked,
  defaultValue,
  row,
}) => (
  <div className=" w-full">
    {" "}
    <RadioGroup name={name} defaultValue={defaultValue}>
      <div className={`${row ? "flex" : ""}`}>
        {" "}
        {React.Children.toArray(
          items.map((e: any) => (
            <MyFormControlLabel
              value={e?.value}
              label={e?.label}
              control={
                <Radio
                  checked={checked}
                  onChange={onChange}
                  sx={{
                    "&.Mui-checked": {
                      color: "#004080",
                    },
                    "&.Mui-unchecked": {
                      color: "#001f3f",
                    },
                  }}
                />
              }
            />
          ))
        )}
      </div>
    </RadioGroup>
  </div>
);

export default RadioButton;
