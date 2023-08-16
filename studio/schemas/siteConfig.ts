import {defineType, defineField} from "sanity";

export default defineType({
    name:"siteConfig",
    title:"Site Config",
    description:"General site configuration",
    type:"document",
    fields:[
        defineField({
            name:"character",
            title:"Main Character",
            type:"reference",
            to:{type:"author"},
        }),

        defineField({
            name:"bannerDemo",
            title:"Banner embeded demo",
            description:"Use a 3:1 ratio for banner demos",
            type:"object",
            fields:[
        defineField({
            name:"bannderDemo",
            title:"Banner embeded demo",
            description:"Point to a demo to embed",
            type:"string",
        }),
        defineField({
            name:"banneAlt",
            title:"Image Alt",
            type:"string",
        }),
    ]
    }),

        defineField({
            name:"rss",
            title:"RSS",
            description:"RSS related config",
            type:"object",
            fields:[
                defineField({
                    name:"url",
                    title:"Base URL",
                    type:"string",
                }),
                defineField({
                    name:"subtitle",
                    title:"Subtitle",
                    type:"string",
                }),
                defineField({
                    name:"description",
                    title:"Description",
                    type:"string",
                }),
                defineField({
                    name:"image",
                    title:"Image",
                    type:"string",
                }),
            ]
        }),
    ],
    preview:{
        prepare(selection){
            return{
                title:"site Configuration",
                media:undefined,
            }
        },
    },
})