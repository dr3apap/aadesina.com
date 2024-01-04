export const deskStructure = (S: any) =>
  S.list()
    .title('Dr3 portfolio')
    .items([
      S.listItem()
        .title('Site Configuration')
        .child(S.editor().schemaType('siteConfig').documentId('siteConfig')),
      // Visual divider (optional)
      S.divider(),
      S.listItem()
        .title('Curated Content')
        .child(S.editor().schemaType('blogContent').documentId('blogContent')),
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (listItem: any) => !['siteConfig', 'blogContent'].includes(listItem.getId())
      ),
    ])
