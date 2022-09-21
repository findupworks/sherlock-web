/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        tiny: ".675rem",
      },
      colors: {
        //primary
        primaryD1: "#036EAF",
        primaryD2: "#084B76",
        primary: "#0086D6",
        primaryL1: "#339EDE",
        primaryL2: "#80C3EB",
        primaryL3: "#E5F3FB",
        //secondary
        secondaryD1: "#2A9A87",
        secondaryD2: "#1E6D90",
        secondary: "#3CDBC0",
        secondaryL1: "#63E2CD",
        secondaryL2: "#9EEDE0",
        secondaryL3: "#EBFBF9",
        //dark
        darkD1: "#58585B",
        darkD2: "#262627",
        dark: "#7E7E82",
        darkL1: "#BFBFC1",
        darkL2: "#D8D8D9",
        //light
        lightD1: "#CFCBCF",
        lightD2: "#B7B4B8",
        light: "#E5E1E6",
        lightL1: "#EDEAED",
        white: "#FFFFFF",
        //success
        successD1: "#226A33",
        successD2: "#1C5629",
        success: "#287D3C",
        successL1: "#5ACA75",
        successL2: "#EDF9F0",
        //warning
        warningD1: "#9F4500",
        warningD2: "#863A00",
        warning: "#B95000",
        warningL1: "#FF8F39",
        warningL2: "#FFF4EC",
        //danger
        dangerD1: "#C31212",
        dangerD2: "#AB1010",
        danger: "#DA1414",
        dangerL1: "#F48989",
        dangerL2: "#FEEFEF",
        //info
        infoD1: "#031835",
        infoD2: "#020F21",
        info: "#041E42",
        infoL1: "#828FA1",
        infoL2: "#E5E8EC",
        //charts
        blue: "#4B9BFF",
        orange: "#FFB46E",
        red: "#FF5F5F",
        teal: "#50D2A0",
        pink: "#FF73C3",
        green: "#9BE169",
        purple: "#AF78FF",
        yellow: "#FFD76E",
        cyan: "#5FC8FF",
        indigo: "#7785FF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
