import {defineType, defineField} from 'sanity';

export default defineType({
    name:'demo',
    title:'Demo',
    type:'document',
    initialValue:{
        feature:false,
    },
    fields:[
        defineField({
            name:'title',
            title:"Demo's name",
            type:'string',
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'string',
        }),
        defineField({
            name:'skillsIcon',
            title:'Skills Icon',
            description:'Skills use for demo',
            type:'array',
           of: [{ type:'image', options:{
            hotspot:true
        }, }],
          
        }),

        defineField({
            name:'mainIcon',
            title:'Main Icon',
            type:'image',
            options:{
                hotspot:true
            },

        }),

        defineField({
            name:'links',
            title:'Links',
            type:'array',
            of:[
                {
                    type:'object',
                    fields:[
                        defineField({
                            name:'label',
                            title:'Label',
                            type:'string',
                        }),

                        defineField({
                            name:'url',
                            title:'URL',
                            type:'url',
                        }),
                    ]
                }
            ]
        }),
    ]
})