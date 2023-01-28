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
            width:{
                "content-area":"96ch",
            },
            colors:{
                "brand-fill":"var(--brand-fill-0)",
                "brand-fill-1":"var(--brand-fill-1)",
                "brand-stroke":"var(--brand-stroke)",
                "text-1":"var(--text-1)",
                "text2":"var(--text-2)",
                "surface-1":"var(--surface-1)",
                "surface-2":"var(--surface-2",
                "surface-3":"var(--surface-3)",
                "surface-4":"var(--surface-4)",
                "surface-alpha":"var(--surface-alpha)",
                "brand-accent-fill":"var(--brand-fill-0)",
                "text-1-accent":"var(--text1-accent)",
                "text-2-accent":"var(--text2-accent)",
                "surface-1-accent":"var(--surface1-accent)",
                "surface-2-accent":"var(--surface2-accent)",
                "surface-3-accent":"var(--surface3-accent)",
                "surface-4-accent":"var(--surface4-accent)",
                },
             
            "screens":{
                "la":"620px",
            },
            spacing,
            minHeight,
            fontSize,
    
            gradientColorStops:{
               gradient:"var(--bradn-gradient)"
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
            ".rad-shadow":{
                    boxShadow:"0 2.8px 2.2px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) + .03)), 0 6.7px 5.3px hsl(var(--surface-shadow-light) / calc(var(--surface-strength-light) + .01)), 0 12.5px 10px hsl(var(--surface-shadow-light) / calc(var(--surface-strength-light) +.02)), 0 22.3px 17.9px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) +.02)), 0 41.8px 33.4px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) + .03)), 0 100px 80px hsl(var(--surface-shadow-light) / var(--shadow-strength-light))"
                }
            }),
            addUtilities({
                // ".rad-shadow":{
                //     boxShadow:"0 2.8px 2.2px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) + .03)), 0 6.7px 5.3px hsl(var(--surface-shadow-light) / calc(var(--surface-strength-light) + .01)), 0 12.5px 10px hsl(var(--surface-shadow-light) / calc(var(--surface-strength-light) +.02)), 0 22.3px 17.9px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) +.02)), 0 41.8px 33.4px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) + .03)), 0 100px 80px hsl(var(--surface-shadow-light) / var(--shadow-strength-light))"
                // }
            })

        }),
    ]
}