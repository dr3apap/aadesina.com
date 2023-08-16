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
            name:'image',
            title:'Image',
            type:'string',
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'string',
        }),
        defineField({
            name:'skills',
            title:'Skills',
            description:'Skills use for demo',
            type:'array',
           of: [{ type:'string'}],
          
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
    ],
    preview:{
        select:{
            title:'title',
            skills:'skills',
            media:'mainImage'

        }
    }
})