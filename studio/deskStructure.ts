export const deskStructure = (S:any) => 
S.list()
.title('Post')
.items([
    S.listItems()
    .title('Site Configuration')
    .child(
        S.editor()
        .schemaType('siteConfig')
        .documentID('siteConfig')
    ),
    // Visual divider (optional)
    S.divider(),
    S.listItem()
    .title('curated Content')
    .child(
        S.editor()
        .shcemaType('post')
        .documentID('post')
    ),
    // Visual divide (optional)
    S.divider(),
    // List out the rest of the document types, but filter out the config type
    ...S.documentTypeListItems()
    .filter((listItem:any) => !['siteConfig', 'Post'].includes(listItem.getId()))
])

