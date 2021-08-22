import { registerBlockType } from '@wordpress/blocks';
import InfoCardsEdit from './components/InfoCards/InfoCardsEdit.jsx';
import InfoCardsSave from './components/InfoCards/InfoCardsSave.jsx';
import InfoLinksEdit from './components/InfoLinks/InfoLinksEdit.jsx';
import InfoLinksSave from './components/InfoLinks/InfoLinksSave.jsx';
import InfoAssetsEdit from './components/InfoAssets/InfoAssetsEdit.jsx';
import InfoAssetsSave from './components/InfoAssets/InfoAssetsSave.jsx';

registerBlockType(
  'mtpe/info-links',
  {
    title: 'Links de información',
    description: 'Links a las secciones informativas',
    icon: 'info',
    category: 'layout',
    attributes: {
      links: {
        type: 'array',
        default: [
          {
            id: new Date().getTime().toString(),
            image: null,
            url: '',
            label: '',
          }
        ]
      }
    },
    edit: InfoLinksEdit,
    save: InfoLinksSave,
  }
)

registerBlockType(
  'mtpe/info-cards',
  {
    title: 'Cartillas informativas',
    description: 'Links a las secciones informativas',
    icon: 'info',
    category: 'layout',
    attributes: {
      links: {
        type: 'array',
        default: [
          {
            id: new Date().getTime().toString(),
            image: null,
            url: '',
            label: '',
          }
        ]
      }
    },
    edit: InfoCardsEdit,
    save: InfoCardsSave,
  }
)

registerBlockType(
  'mtpe/info-assets',
  {
    title: 'Materiales informativos',
    description: 'Lista de materiales informativos para el migrante',
    icon: 'info',
    category: 'layout',
    attributes: {
      links: {
        type: 'array',
        default: [
          {
            id: new Date().getTime().toString(),
            image: null,
            url: '',
            label: '',
          }
        ]
      }
    },
    edit: InfoAssetsEdit,
    save: InfoAssetsSave,
  }
)