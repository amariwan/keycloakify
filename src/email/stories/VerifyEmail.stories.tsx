import type { Meta, StoryObj } from "@storybook/react";
import { VerifyEmail } from "../pages/VerifyEmail";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "email-verify.ftl" });

const meta: Meta<typeof VerifyEmail> = {
    title: "Email/Verify Email",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

export const Default: StoryObj = {
    render: () => (
        <VerifyEmail>
            <div>Beispielinhalt</div>
        </VerifyEmail>
    )
};
