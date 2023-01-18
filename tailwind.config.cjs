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
                "brand-light":{
                DEFAULT:"hsl(var(--brand-hue) var(--brand-saturation) var(--brand-lightness))",
                "1":"var(--brand-1)",
                "2":"var(--brand-2)",
                "text1":"hsl(var(--brand-hue) var(--brand-saturation) 10%)",
                "text2":"hsl(var(--brand-hue) 30% 30%)",
                "surface1":"hsl(var(--brand-hue) 25% 90%)",
                "surface2":"hsl(var(--brand-hue) 20% 99%)",
                "surface3":"hsl(var(--brand-hue) 20% 92%)",
                "surface4":"hsl(var(--brand-hue) 20% 85%)",
                "surface-alpha":"hsl(var(--brand-hue) 17% 98% / 65%)",
                },
                "brand-secondary-light":{
                    DEFAULT:"hsl(var(--brand-secondary-hue) var(--brand-secondary-saturation) var(--brand-secondary-lightness))",
                    "text1":"hsl(var(--brand-secondary-hue) var(--brand-secondary-saturation) 10%)",
                    "text2":"hsl(var(--brand-secondary-hue) 30% 30%)",
                    "surface1":"hsl(var(--brand-secondary-hue) 25% 90%)",
                    "surface2":"hsl(var(--brand-secondary-hue) 20% 99%)",
                    "surface3":"hsl(var(--brand-secondary-hue) 20% 92%)",
                    "surface4":"hsl(var(--brand-secondary-hue) 20% 85%)",
                    "surface-alpha":"hsl(var(--brand-secondary-hue) 17% 99% / 65%)",
                },
                "brand-dark":{
                    DEFAULT:"hsl(var(--brand-hue) calc(var(--brand-saturation)/2) calc(var(--brand-lightness)/1.5))",
                    surface1:"hsl(var(--brand-hue) 10% 10%)",
                    surface2:"hsl(var(--brand-hue) 10% 15%)",
                    surface3:"hsl(var(--brand-hue) 5% 20%)",
                    surface4:"hsl(var(--brand-hue) 5% 25%)",
                    text1:"hsl(var(--brand-hue) 15% 85%)",
                    text2:"hsl(var(--brand-hue) 5% 65%)",
                    "surface-alpha":"hsl(var(--brand-hue) 10% 10% / 65%))",

                },
                
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