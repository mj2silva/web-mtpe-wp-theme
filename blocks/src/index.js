import { registerBlockType } from '@wordpress/blocks';
import InfoCardsEdit from './components/InfoCards/InfoCardsEdit.jsx';
import InfoCardsSave from './components/InfoCards/InfoCardsSave.jsx';
import InfoLinksEdit from './components/InfoLinks/InfoLinksEdit.jsx';
import InfoLinksSave from './components/InfoLinks/InfoLinksSave.jsx';

registerBlockType(
  'pg/basic',
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
  'pg/basic-2',
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