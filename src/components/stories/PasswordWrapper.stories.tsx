import type { Meta, StoryObj } from "@storybook/react";
import { PasswordWrapper } from "../ui/PasswordWrapper";
import React from "react";
import { Input } from "../ui/input";

const i18nMock = {
  msgStr: (key: string) => (key === "hidePassword" ? "Hide password" : "Show password"),
  msg: (key: string) => React.createElement("span", {}, key),
  advancedMsg: (key: string, ...args: (string | undefined)[]) =>
    React.createElement("span", {}, `${key} ${args.join(" ")}`),
  currentLanguage: { languageTag: "de", label: "Deutsch" },
  getChangeLocaleUrl: (languageTag: string) => `#${languageTag}`,
  advancedMsgStr: (key: string, ...args: (string | undefined)[]) =>
    `${key} ${args.join(" ")}`,
  isFetchingTranslations: false,
  enabledLanguages: [
    { languageTag: "en", label: "English", href: "#" },
    { languageTag: "de", label: "Deutsch", href: "#" }
  ]
};

const meta: Meta<typeof PasswordWrapper> = {
  title: "Components/PasswordWrapper",
  component: PasswordWrapper,
  args: {
    i18n: i18nMock,
    passwordInputId: "password-input",
    children: (
      <Input
        id="password-input"
        type="password"
        className="input-class"
        defaultValue="mypassword123"
      />
    )
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    i18n: i18nMock,
    passwordInputId: "password",
    children: (
      <Input
        tabIndex={3}
        id="password"
        className="text-foreground"
        name="password"
        type="password"
        autoComplete="current-password"
        aria-invalid="false"
      />
    )
  },
  render: args => (
    <div className="p-5 bg-background text-foreground w-1/2">
      <PasswordWrapper i18n={args.i18n} passwordInputId={args.passwordInputId}>
        {args.children}
      </PasswordWrapper>
    </div>
  )
};
