import { registerBlockType } from '@wordpress/blocks';
import InfoCardsEdit from './components/InfoCards/InfoCardsEdit.jsx';
import InfoCardsSave from './components/InfoCards/InfoCardsSave.jsx';
import InfoLinksEdit from './components/InfoLinks/InfoLinksEdit.jsx';
import InfoLinksSave from './components/InfoLinks/InfoLinksSave.jsx';
import InfoAssetsEdit from './components/InfoAssets/InfoAssetsEdit.jsx';
import InfoAssetsSave from './components/InfoAssets/InfoAssetsSave.jsx';
import SocialRightsSave from './components/SocialRights/SocialRightsSave.jsx';
import { withSelect } from '@wordpress/data';
import MTPELinkEdit from './components/Link/MTPELinkEdit.jsx';
import MTPELinkSave from './components/Link/MTPELinkSave.jsx';
import Collapse1Edit from './components/Collapse1/Collapse1Edit.jsx';
import Collapse1Save from './components/Collapse1/Collapse1Save.jsx';
import Collapse2Edit from './components/Collapse2/Collapse2Edit.jsx';
import Collapse2Save from './components/Collapse2/Collapse2Save.jsx';
import ContactEdit from './components/Contact/ContactEdit.jsx';
import ContactSave from './components/Contact/ContactSave.jsx';
import ContainerGrayEdit from './components/ContainerGray/ContainerGrayEdit.jsx';
import ContainerEdit from './components/Container/ContainerEdit.jsx';
import ContainerSave from './components/Container/ContainerSave.jsx';
import ContainerGraySave from './components/ContainerGray/ContainerGraySave.jsx';
import ProcessEdit from './components/Process/ProcessEdit.jsx';
import ProcessSave from './components/Process/ProcessSave.jsx';
import ExternalBlueLinkEdit from './components/ExternalBlueLink/ExternalBlueLinkEdit.jsx';
import ExternalBlueLinkSave from './components/ExternalBlueLink/ExternalBlueLinkSave.jsx';
import BorderedLinkEdit from './components/BorderedLink/BorderedLinkEdit.jsx';
import BorderedLinkSave from './components/BorderedLink/BorderedLinkSave.jsx';

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
      },
      title: {
        type: 'string',
        default: '',
      },
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

registerBlockType(
  'mtpe/link',
  {
    title: 'MTPE Link',
    description: 'Link con estilos de la web del MTPE',
    icon: 'external',
    category: 'layout',
    attributes: {
      links: {
        type: 'array',
        default: [
          {
            id: new Date().getTime().toString(),
            style: 'default',
            url: '',
            label: '',
          }
        ]
      },
      style: {
        type: 'string',
        default: 'default',
      }
    },
    edit: MTPELinkEdit,
    save: MTPELinkSave,
  }
)

registerBlockType(
  'mtpe/social-rights-widget',
  {
    apiVersion: 2,
    title: 'Derechos socio laborales - Enlaces',
    description: 'Lista de los distintos derechos socio-laborales y sus enlaces',
    icon: 'megaphone',
    category: 'widgets',
    edit: withSelect((select) => {
      return {
        socialRights: select('core').getEntityRecords('postType', 'derecho', {
          'per_page': 6,
          'order': 'asc',
        })
      };
    })(SocialRightsSave),
  }
)

registerBlockType(
  'mtpe/collapse-element-1',
  {
    apiVersion: 2,
    title: 'Elementos colapsables estilo 1',
    description: 'Elementos colapsables con título y descripción',
    icon: 'arrow-down-alt2',
    category: 'layout',
    attributes: {
      title: {
        type: 'string',
        default: '',
      },
      description: {
        type: 'string',
        default: '',
      },
      id: {
        type: 'string',
        default: '',
      }
    },
    edit: Collapse1Edit,
    save: Collapse1Save,
  }
)

registerBlockType(
  'mtpe/collapse-element-2',
  {
    apiVersion: 2,
    title: 'Elementos colapsables estilo 2',
    description: 'Elementos colapsables con título e ícono',
    icon: 'arrow-down-alt2',
    category: 'layout',
    attributes: {
      title: {
        type: 'string',
        default: '',
      },
      icon: {
        type: 'object',
        default: null,
      },
      id: {
        type: 'string',
        default: ((new Date().getTime()) * Math.floor(Math.random() * 1000)).toString(16),
      }
    },
    edit: Collapse2Edit,
    save: Collapse2Save,
  }
)

registerBlockType(
  'mtpe/contact-info',
  {
    apiVersion: 2,
    title: 'Información de contacto',
    description: 'Bloque de información de contacto predeterminada para el mtpe',
    icon: 'phone',
    category: 'layout',
    supports: {
      anchor: true,
    },
    attributes: {
      address: {
        type: 'string',
        default: '',
      },
      mapUrl: {
        type: 'string',
        default: '',
      },
      phone: {
        type: 'string',
        default: '',
      },
      schedule: {
        type: 'string',
        default: '',
      },
      background: {
        type: 'object',
        default: null,
      },
      anchor: {
        type: 'string',
        source: 'attribute',
        attribute: 'id',
        selector: '*'
      }
    },
    edit: ContactEdit,
    save: ContactSave,
  }
)

registerBlockType(
  'mtpe/container',
  {
    apiVersion: 2,
    title: 'Contenedor',
    description: 'Contenedor simple para un bloque o bloques de la página',
    icon: 'align-wide',
    category: 'layout',
    supports: {
      anchor: true,
    },
    attributes: {
      anchor: {
        type: 'string',
        source: 'attribute',
        attribute: 'id',
        selector: '*',
      }
    },
    edit: ContainerEdit,
    save: ContainerSave,
  }
)

registerBlockType(
  'mtpe/container-gray',
  {
    apiVersion: 2,
    title: 'Contenedor gris',
    description: 'Uso para crear contenedores con fondo gris claro',
    icon: 'align-wide',
    category: 'layout',
    supports: {
      anchor: true,
    },
    attributes: {
      anchor: {
        type: 'string',
        source: 'attribute',
        attribute: 'id',
        selector: '*',
      }
    },
    edit: ContainerGrayEdit,
    save: ContainerGraySave,
  }
)

registerBlockType(
  'mtpe/process-guide',
  {
    apiVersion: 2,
    title: 'Guía de proceso',
    description: 'Item para describir un elemento de manera organizada',
    icon: 'align-pull-left',
    category: 'layout',
    supports: {
      anchor: true,
    },
    attributes: {
      title: {
        type: 'string',
        default: '',
      },
      icon: {
        type: 'object',
        default: null,
      },
      anchor: {
        type: 'string',
        source: 'attribute',
        attribute: 'id',
        selector: '*'
      }
    },
    edit: ProcessEdit,
    save: ProcessSave
  }
)

registerBlockType(
  'mtpe/blue-link',
  {
    apiVersion: 2,
    title: 'Link (Azul)',
    description: 'Link con estilo azul para recursos externos',
    icon: 'external',
    category: 'layout',
    attributes: {
      label: {
        type: 'string',
        default: '',
      },
      url: {
        type: 'string',
        default: '',
      },
    },
    edit: ExternalBlueLinkEdit,
    save: ExternalBlueLinkSave,
  }
)

registerBlockType(
  'mtpe/bordered-link',
  {
    apiVersion: 2,
    title: 'Link en bloque (Azul)',
    description: 'Link en caja ancha',
    icon: 'external',
    category: 'layout',
    attributes: {
      label: {
        type: 'string',
        default: '',
      },
      url: {
        type: 'string',
        default: '',
      },
    },
    edit: BorderedLinkEdit,
    save: BorderedLinkSave,
  }
)