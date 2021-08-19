import { registerBlockType } from '@wordpress/blocks';
import { TextControl, Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor'

const InfoLinkInput = (props) => {
  const { link, setLink, removeLink } = props;
  const onChangeUrl = (url) => {
    setLink({
      ...link,
      url,
    })
  };
  const onChangeLabel = (label) => {
    setLink({
      ...link,
      label,
    })
  };
  const onSelectImage = (image) => {
    setLink({
      ...link,
      image,
    })
  }
  const handleRemove = () => {
    removeLink(link);
  }
  return (
    <div>
      <MediaUploadCheck>
        <MediaUpload
          className="js-book-details-image wp-admin-book-details-image"
          allowedTypes={['image']}
          multiple={false}
          value={link.image?.id || ''}
          addToGallery
          onSelect={onSelectImage}
          render={({ open }) => (
            (link.image) ?
              (
                <div>
                  <p>
                    <img src={link.image.url} width={link.image.width / 2} />
                  </p>
                  <p>
                    <Button
                      onClick={() => { setLink({ ...link, image: null }) }}
                      className="button is-small"
                    >
                      Remove
                    </Button>
                  </p>
                </div>
              )
              :
              (
                <Button
                  onClick={open}
                  className="button"
                >
                  Upload Image
                </Button>
              )
          )}
        />
      </MediaUploadCheck>
      <TextControl value={link.url} name="url" placeholder="Url" onChange={onChangeUrl} />
      <TextControl value={link.label} name="label" placeholder="Texto del enlace" onChange={onChangeLabel} />
      <Button onClick={handleRemove} className="button is-small">Eliminar</Button>
    </div>
  )
}

const InfoLinksEdit = (props) => {
  const { attributes: { links }, setAttributes } = props;
  const addLink = () => {
    setAttributes({
      links: [
        ...links,
        {
          id: new Date().getTime().toString(),
          image: null,
          url: '',
          label: '',
        },
      ]
    })
  }
  const removeLink = (linkToRemove) => {
    const newLinks = links.filter((link) => {
      return (link.id !== linkToRemove.id);
    })
    setAttributes({ links: newLinks });
  }
  const editLink = (newLink) => {
    const newLinks = links.map((link) => {
      return (link.id === newLink.id) ? newLink : link;
    })
    setAttributes({ links: newLinks });
  }
  return (
    <div className='container'>
      <div className="row">
        <h2>¡Todo lo que debes saber para trabajar dentro y fuera del Perú!</h2>
        <p>Entérate de los beneficios, requisitos y pasos para acceder a ellos, y otra información de tu interés</p>
      </div>
      <div className="row">
        {
          links.map((link) => (
            <div className="col-3">
              <InfoLinkInput link={link} setLink={editLink} removeLink={removeLink} />
            </div>
          ))
        }
      </div>
      <button className="button" onClick={addLink}>Añadir nuevo link</button>
    </div>
  );
}

const InfoLinksSave = (props) => {
  const { attributes: { links } } = props;
  return (
    <div className='container'>
      <div className="row">
        <h2>¡Todo lo que debes saber para trabajar dentro y fuera del Perú!</h2>
        <p>Entérate de los beneficios, requisitos y pasos para acceder a ellos, y otra información de tu interés</p>
      </div>
      <div className="row justify-content-center">
        {
          links.map((link) => (
            <div className="col-12 col-md-auto">
              <div className="card align-items-center border-0 presentation__card">
                <img className="d-block card-img-top presentation__link-image" alt={link.image?.alt} src={link.image?.url} />
                <div className="card-body text-center">
                  <a className="d-block btn btn-primary button--primary informative-links__button" href={link.url}>{link.label}</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

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