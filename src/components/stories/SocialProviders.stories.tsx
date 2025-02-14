import type { Meta, StoryObj } from "@storybook/react";
import { SocialProviders, SocialProvidersProps } from "../ui/SocialProviders";

type ClsxFn = (...args: string[]) => string;

const meta: Meta<typeof SocialProviders> = {
  title: "Components/SocialProviders",
  component: SocialProviders,
  tags: ["autodocs"],
  args: {
    social: {
      providers: [
        {
          loginUrl: "google",
          alias: "google",
          displayName: "Google",
          iconClasses: "fa fa-google"
        },
        {
          loginUrl: "microsoft",
          alias: "microsoft",
          displayName: "Microsoft",
          iconClasses: "fa fa-windows"
        }
      ]
    },
    realm: {
      password: true
    },
    msg: (key: string) => key,
    kcClsx: ((...args: string[]) => args.join(" ")) as ClsxFn,
    clsx: ((...args: string[]) => args.join(" ")) as ClsxFn
  }
};

export default meta;

type Story = StoryObj<typeof SocialProviders>;

export const Default: Story = {
  render: (args: SocialProvidersProps) => <SocialProviders {...args} />
};

export const SingleProvider: Story = {
  args: {
    social: {
      providers: [
        {
          loginUrl: "google",
          alias: "google",
          displayName: "Google",
          iconClasses: "fa fa-google"
        }
      ]
    }
  },
  render: (args: SocialProvidersProps) => <SocialProviders {...args} />
};

export const MultipleProviders: Story = {
  args: {
    social: {
      providers: [
        {
          loginUrl: "google",
          alias: "google",
          displayName: "Google",
          iconClasses: "fa fa-google"
        },
        {
          loginUrl: "microsoft",
          alias: "microsoft",
          displayName: "Microsoft",
          iconClasses: "fa fa-windows"
        },
        {
          loginUrl: "twitter",
          alias: "twitter",
          displayName: "Twitter",
          iconClasses: "fa fa-twitter"
        }
      ]
    }
  },
  render: (args: SocialProvidersProps) => <SocialProviders {...args} />
};

export const NoProviders: Story = {
  args: {
    social: {
      providers: []
    },
    realm: {
      password: true
    }
  },
  render: (args: SocialProvidersProps) => <SocialProviders {...args} />
};
