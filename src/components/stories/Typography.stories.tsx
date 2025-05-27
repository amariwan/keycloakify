// src/components/Typography.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { Typography, TypographyProps } from "@/components/ui/typography";

const meta: Meta<TypographyProps> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "subheading", "body", "caption"]
    },
    children: {
      control: "text"
    },
    className: { control: "text" }
  },
  args: {
    variant: "body",
    children: "Dies ist ein Beispieltext."
  }
};

export default meta;
type Story = StoryObj<TypographyProps>;

export const Default: Story = {};

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1"
  }
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Heading 2"
  }
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    children: "Heading 3"
  }
};

export const Heading4: Story = {
  args: {
    variant: "h4",
    children: "Heading 4"
  }
};

export const Subheading: Story = {
  args: {
    variant: "subheading",
    children: "Subheading Text"
  }
};

export const Body: Story = {
  args: {
    variant: "body",
    children: "Dies ist der Fließtext, der als Body-Text formatiert wird."
  }
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Dies ist ein kleiner Beschriftungstext (Caption)."
  }
};
