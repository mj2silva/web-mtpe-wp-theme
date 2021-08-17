import { registerBlockType } from '@wordpress/blocks';
import { TextControl, Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor'

const InfoLinkInput = (props) => {
  const { onChange, setAttributes } = props;
  /* const image = {
    url: '#',
    width: 200
  } */
  let image = null;
  return (
    <div>
      <MediaUploadCheck>
        <MediaUpload
          className="js-book-details-image wp-admin-book-details-image"
          allowedTypes={['image']}
          multiple={false}
          value={image ? image.id : ''}
          onSelect={image => setAttributes({ image: image })}
          render={({ open }) => (
            image ?
              <div>
                <p>
                  <img src={image.url} width={image.width / 2} />
                </p>

                <p>
                  <Button onClick={() => setAttributes({ image: '' })} className="button is-small">Remove</Button>
                </p>
              </div> :
              <Button onClick={open} className="button">Upload Image</Button>
          )}
        />
      </MediaUploadCheck>
      <TextControl onChange={onChange} />
    </div>
  )
}

const InfoLinksEdit = (props) => {
  const { attributes: { linkDescription, linkIconUrl }, setAttributes } = props;
  const handleIconChange = (fieldValue) => {
    setAttributes({ linkDescription, linkIconUrl: fieldValue });
  }
  const handleDescriptionChange = (fieldValue) => {
    setAttributes({ linkIconUrl, linkDescription: fieldValue });
  }
  return (
    <div className='container'>
      <pre>
        {JSON.stringify(props)}
      </pre>
      <div className="row">
        <h2>¡Todo lo que debes saber para trabajar dentro y fuera del Perú!</h2>
        <p>Entérate de los beneficios, requisitos y pasos para acceder a ellos, y otra información de tu interés</p>
      </div>
      <div className="row">
        <InfoLinkInput onChange={handleIconChange} setAttributes={setAttributes} />
        <div className="col-12 col-md">
          <img src="./assets/img/icons/search_black_24dp.svg" />
          <a href="#">¿Vas a trabajar en el extranjero?</a>
        </div>
        <div className="col-12 col-md">
          <img src="./assets/img/icons/search_black_24dp.svg" />
          <a href="#">¿Vas a trabajar en el extranjero?</a>
        </div>
      </div>
    </div>
  );
}

const InfoLinksSave = (props) => {
  return (
    <div className='container'>
      <pre>
        {JSON.stringify(props)}
      </pre>
      <div className="row">
        <h2>¡Todo lo que debes saber para trabajar dentro y fuera del Perú!</h2>
        <p>Entérate de los beneficios, requisitos y pasos para acceder a ellos, y otra información de tu interés</p>
      </div>
      <div className="row">
        <div className="col-12 col-md-auto">
          <img className="d-block" src="/assets/img/icons/search_black_24dp.svg" />
          <a className="d-block" href="#">¿Vas a trabajar en el extranjero?</a>
        </div>
        <div className="col-12 col-md-auto">
          <img src="/assets/img/icons/search_black_24dp.svg" />
          <a href="#">¿Vas a trabajar en el extranjero?</a>
        </div>
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
            linkDescription: 'Link',
            linkIconUrl: '#',
          },
        ]
      }
    },
    edit: InfoLinksEdit,
    save: InfoLinksSave,
  }
)