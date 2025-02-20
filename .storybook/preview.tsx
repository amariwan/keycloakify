import type { Preview } from "@storybook/react";
import { ModeDecorator } from "./modeDecorator";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import "./../src/styles/index.css";
import { themes } from "@storybook/theming";

export default {
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*",
      disable: true
    },
    decorators: [ModeDecorator],
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff"
        },
        {
          name: "dark",
          value: "#000000"
        }
      ]
    },
    options: {
      storySort: {
        order: ["Intro", "Components", "Layouts", "Templates"]
      },
      theme: themes.normal
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        disable: true
      }
    },
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
      defaultViewport: "ipad"
    },
    viewports: {
      "1440p": {
        name: "1440p",
        styles: {
          width: "2560px",
          height: "1440px"
        }
      },
      fullHD: {
        name: "Full HD",
        styles: {
          width: "1920px",
          height: "1080px"
        }
      },
      macBookProBig: {
        name: "MacBook Pro Big",
        styles: {
          width: "1024px",
          height: "640px"
        }
      },
      macBookProMedium: {
        name: "MacBook Pro Medium",
        styles: {
          width: "1440px",
          height: "900px"
        }
      },
      macBookProSmall: {
        name: "MacBook Pro Small",
        styles: {
          width: "1680px",
          height: "1050px"
        }
      },
      pcAgent: {
        name: "PC Agent",
        styles: {
          width: "960px",
          height: "540px"
        }
      },
      iphone12Pro: {
        name: "Iphone 12 pro",
        styles: {
          width: "390px",
          height: "844px"
        }
      },
      iphone5se: {
        name: "Iphone 5/SE",
        styles: {
          width: "320px",
          height: "568px"
        }
      },
      ipadPro: {
        name: "Ipad pro",
        styles: {
          width: "1240px",
          height: "1366px"
        }
      },
      "Galaxy s9+": {
        name: "Galaxy S9+",
        styles: {
          width: "320px",
          height: "658px"
        }
      }
    }
  }
} as Preview;
