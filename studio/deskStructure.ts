export const deskStructure = (S:any) => 
S.list()
.title('Post')
.items([
    S.listItem()
    .title('Site Configuration')
    .child(
        S.editor()
        .schemaType('siteConfig')
        .documentId('siteConfig')
    ),
    // Visual divider (optional)
    S.divider(),
    S.listItem()
    .title('Post body')
    .child(
        S.editor()
        .schemaType('post')
        .documentId('post')
    ),
    // Visual divide (optional)
    S.divider(),
    // List out the rest of the document types, but filter out the config type
    ...S.documentTypeListItems()
    .filter((listItem:any) => !['siteConfig', 'Post'].includes(listItem.getId()))
])

