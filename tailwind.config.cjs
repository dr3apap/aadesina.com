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
                medium:"hsl(var(--brand-400))",
                light:"hsl(var(--brand-300))",
                DEFAULT:"hsl(var(--brand-500))",
                dark:"var(--orange-12)"
                },
                "brand-secondary":{
                    DEFAULT:"hsl(var(--brand-secondary-500))",
                    medium:"hsl(var(--brand-secondary-400))",
                    light:"hsl(var(--brand-secondary-300))"
                },
                "mode":{
                    light:"hsl(var(--bg-light))",
                    dark:"hsl(var(--bg-dark))",
                },
                "fg":{
                    light:"hsl(var(--light))",
                    light1:"hsl(var(--light1))",
                    dark:"hsl(var(--fg-light))",
                },
                "gradient":{
                to:"hsl(var(--gradient-to))",
                from:"hsl(var(--gradient-from))",
                
                },

             },
            "screens":{
                "xsm":"220px",
                "sm1":"320px",
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