import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {deskStructure} from './deskStructure'
import {markdownSchema} from 'sanity-plugin-markdown'

export default defineConfig({
  name: 'default',
  title: `${import.meta.env.SANITY_STUDIO_PROJECT_NAME} [${import.meta.env.SANITY_STUDIO_PROJECT_DATASET}]`,
  basePath:'/studio',
  token:import.meta.env.SANITY_STUDIO_PROJECT_PREVIEW_TOKEN,
  projectId:import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset:import.meta.env.SANITY_STUDIO_PROJECT_DATASET,

  plugins:[
    deskTool({
    structure:deskStructure
  }),
  visionTool(),
  markdownSchema(),

] ,

  schema: {
    types: schemaTypes,
  },
})
