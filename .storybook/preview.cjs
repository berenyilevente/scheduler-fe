import "tailwindcss/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "rgb(247, 245, 245)",
      },
      {
        name: "dark",
        value: "rgb(116, 116, 116)",
      },
    ],
  },
};
