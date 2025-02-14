import { Checkbox } from "../ui/checkbox";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    disabled: { control: "boolean" }
  }
};

export default meta;

const CheckboxTemplate = (args: React.ComponentProps<typeof Checkbox>) => {
  const [checked, setChecked] = useState<CheckedState>(false);
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        {...args}
        checked={checked}
        onCheckedChange={state => setChecked(state)}
      />
      <label>
        {checked === "indeterminate"
          ? "Indeterminate"
          : checked
            ? "Checked"
            : "Unchecked"}
      </label>
    </div>
  );
};

export const Default: StoryObj = {
  render: args => <CheckboxTemplate {...args} />,
  args: { className: "" }
};

export const Disabled: StoryObj = {
  render: args => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} disabled />
      <label>Disabled</label>
    </div>
  ),
  args: { disabled: true }
};

export const CustomStyle: StoryObj = {
  render: args => <CheckboxTemplate {...args} />,
  args: { className: "border-red-500 bg-red-100" }
};
