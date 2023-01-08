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
for (let i = -2; i < 11; i++){
   fontSize[`fluid-${i}`] =  `var(--step-${i})`;
}
module.exports = {
    content:["./src/**/*.{html,js,ts,jsx,astro,md,mdx,tsx}"],
    theme:{
        extend:{
            colors:{
                "brand-fill":{
                400:"hsl(var(--brand-400))",
                300:"hsl(var(--brand-300))",
                DEFAULT:"hsl(var(--brand-500))",
                dark:"var(--orange-12)"
                },
                "brand-secondary":{
                    DEFAULT:"hsl(var(--brand-secondary-500))",
                    400:"hsl(var(--brand-secondary-400))",
                    300:"hsl(var(--brand-secondary-300))"
                },
                "mode":{
                    light:"hsl(var(--bg-light))",
                    dark:"hsl(var(--bg-dark))",
                },
                "fg":{
                    light:"hsl(var(--fg-light))",
                    light1:"hsl(var(--fg-light1))",
                    dark:"hsl(var(--fg-dark))",
                },
                "gradient":{
                to:"hsl(var(--gradient-to))",
                from:"hsl(var(--gradient-from))",
                
                },

             },
            "screens":{
                "sm1":"500px",
                "la":"620px",
            },
            spacing,
            minHeight,
            fontSize,
        
    
            gradientColorStops:{
               "gradient-from":"var(--gradient-from)",
               "gradient-to":"var(--gradient-to)",
            },
            // fontFamily:{
            //     sans:["Inter", "var(--font-sans)", ...defaultTheme.FontFamily.sans],
            // }
      },
    },
    plugins:[
        plugin(function({addComponents, addUtilities, theme}){
           addComponents({
            ".circle-shape":{
                shapeOutside:"circle()"
            },
            }),
            addUtilities({
                ".from-gradient":theme("colors.gradient-to"),
                ".to-gradient":theme("colors.gradient-from")
            })

        }),
    ]
}