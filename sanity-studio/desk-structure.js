import S from '@sanity/desk-tool/structure-builder';
import { FiSettings, FiHome } from 'react-icons/fi';

const hiddenDocTypes = (listItem) =>
  !['siteSettings', 'homepage'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        )
        .icon(FiSettings),
      S.listItem()
        .title('Homepage')
        .child(S.document().schemaType('homepage').documentId('homepage'))
        .icon(FiHome),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
