// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';


export default function(manifest) {
  manifest.addComponent({
    name: 'MijnOverzicht',
    displayName: 'Mijn overzicht',
    // totally optional, but fun
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'content', type: CommonFieldTypes.RichText },
      { name: 'subtitle', type: CommonFieldTypes.RichText },
    ],
  });
}
