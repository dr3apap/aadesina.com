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
    content:["./src/**/*.{html,js,ts,jsx,mjs,cjs,astro,md,mdx,tsx}"],
    theme:{
        extend:{
            width:{
                "content-area":"96ch",
                "article-area":"66ch",
                "main-content":"60ch"
            },
            colors:{
                "brand":"var(--brand-hsl)",
                "stroke":"var(--stroke)",
                "text-1":"var(--text1-light)",
                "text-2":"var(--text2-light)",
                "surface-1":"var(--surface1-light)",
                "surface-2":"var(--surface2-light)",
                "surface-3":"var(--surface3-light)",
                "surface-4":"var(--surface4-light)",
                "surface-alpha":"var(--surface-alpha)",
                "accent":"var(--brand-accent-hsl)",
                "text-1-accent":"var(--text1-accent-light)",
                "text-2-accent":"var(--text2-accent-light)",
                "surface-1-accent":"var(--surface1-accent-light)",
                "surface-2-accent":"var(--surface2-accent-light)",
                "headings":"var(--text2-accent-light)",
                "hover-light":"var(--text2-accent-dark)"
                },
             
            "screens":{
                "md":"640px",
                "la":"768px"
            },
            spacing,
            minHeight,
            fontSize,
    
            gradientColorStops:{
               gradient:"var(--brand-gradient)"
            },
           
      },
    },
    plugins:[
        plugin(function({addComponents, addUtilities, theme}){
           addComponents({
            ".circle-shape":{
                shapeOutside:"circle()"
            },
            
            ".rad-shadow":{
                    boxShadow:"0 2.8px 2.2px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) + 0.03)), 0 6.7px 5.3px hsl(var(--surface-shadow-light) / calc(var(--surface-strength-light) + 0.01)), 0 12.5px 10px hsl(var(--surface-shadow-light) / calc(var(--surface-strength-light) + 0.02)), 0 22.3px 17.9px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) + 0.02)), 0 41.8px 33.4px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) + 0.03)), 0 100px 80px hsl(var(--surface-shadow-light) / var(--shadow-strength-light))"
                }
            }),
            addUtilities({
                ".rad-shadow":{
                    boxShadow:"0 2.8px 2.2px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) + 0.03)), 0 6.7px 5.3px hsl(var(--surface-shadow-light) / calc(var(--surface-strength-light) + 0.01)), 0 12.5px 10px hsl(var(--surface-shadow-light) / calc(var(--surface-strength-light) + 0.02)), 0 22.3px 17.9px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) + 0.02)), 0 41.8px 33.4px hsl(var(--surface-shadow-light) / calc(var(--shadow-strength-light) + 0.03)), 0 100px 80px hsl(var(--surface-shadow-light) / var(--shadow-strength-light))"
                }
            })

        }),
    ]
}