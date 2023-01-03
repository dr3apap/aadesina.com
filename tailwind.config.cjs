/**@type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const spacing = {};
const minHeight = {};
const AVATAR_SPACING = 9;
const fontSize = {};
spacing.avatar = `var(--step-${AVATAR_SPACING})`;
minHeight['half-avatar'] = `calc(var(--step-${AVATAR_SPACING}) * 0.5)`;
// Typography scales
for (let i = -2; i < 10; i++){
   fontSize[`fluid-${i}`] =  `var(--step-${i})`;
}
module.exports = {
    content:["./src/**/*.{html,js,ts,jsx,astro,md,mdx,tsx}"],
    theme:{
        extend:{
            colors:{
                "brand-fill":{
                light:"var(--orange-4)",
                DEFAULT:"var(--orange-7)",
                dark:"var(--orange-12)"
                },
                "mode":{
                    light:"var(--gray-1)",
                    dark:"var(--cyan-12)",
                },
                "fg":{
                    light1:"var(--gray-7)",
                    light2:"var(--gray-8)",
                    dark1:"var(--gray-1)",
                    dark2:"var(--gray-2)",
                },
                "gradient":{
                to:"hsl(var(--gradient-to))",
                from:"hsl(var(--gradient-from))",
                "from-gradient":"hsl(var(--gradient-from))",
                "to-gradient":"hsl(var(--gradient-to))",
                },

        },
        "screens":{
            "xsm":"220px",
            "sm1":"320px",
        },
        spacing,
        minHeight,
        fontSize,
        
    },
        gradientColorStops:{
            "brand-gradient-stops":"var(--brand-gradient-from),var(--brand-gradient-to)",
            "gradient-stops":"var(--gradient-from), var(--gradient-to)",
        },
        // fontFamily:{
        //     sans:["Inter", "var(--font-sans)", ...defaultTheme.FontFamily.sans],
        // }

    }
}