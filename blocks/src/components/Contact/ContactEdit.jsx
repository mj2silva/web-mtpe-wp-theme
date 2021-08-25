import { RichText, PlainText, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

const ContactEdit = (props) => {
  const { attributes, setAttributes } = props;

  const onSelectImage = (image) => setAttributes({ ...attributes, background: image });
  const onChange = (name) => {
    return (value) => {
      setAttributes({
        ...attributes,
        [name]: value,
      })
    }
  }
  return (
    <div {...useBlockProps()}>
      <div class="container-fluid m-0 p-0">
        <div id="contactInfo" class="carousel slide contactInfo" data-bs-ride="carousel">
          <div class="d-none d-lg-block carousel-inner contactInfo__carousel">
            <div class="carousel-item active">
              <div class="black-gradient"></div>
              {attributes?.background ? <img src={attributes.background?.url} class="d-md-block w-100"
                alt={attributes.background.alt} />
                : <img class="d-md-block w-100 contactInfo__image" src="" alt="" srcset="" />
              }
              <div class="row px-0 carousel-caption contactInfo__caption d-flex px-2">
                <h2 class="text-start">Contacto</h2>
                <div class="container py-4 px-5 contactInfo__caption-content">
                  <MediaUploadCheck>
                    <MediaUpload
                      className="js-book-details-image wp-admin-book-details-image"
                      allowedTypes={['image']}
                      multiple={false}
                      value={attributes.background?.id || ''}
                      addToGallery
                      onSelect={onSelectImage}
                      render={({ open }) => (
                        (attributes.background) ?
                          (
                            <div class="col-6 px-0 d-flex align-items-center">
                              <span className="me-3">Imagen de fondo:</span>
                              <span class="d-inline-block w-25">
                                <img src={attributes.background?.url} />
                              </span>
                              <Button
                                onClick={() => { setAttributes({ ...attributes, background: null }) }}
                                className="button button--remove"
                              >
                                <span className="material-icons">delete</span>
                              </Button>
                            </div>
                          )
                          :
                          (
                            <div class="col-6 d-flex align-items-center">
                              <span>Imagen de fondo:</span>
                              <Button
                                onClick={open}
                                className="button is-small"
                              >
                                <span className="material-icons">add</span>
                              </Button>
                            </div>
                          )
                      )}
                    />
                  </MediaUploadCheck>
                  <div class="contactInfo__block">
                    <h4 class="h4 text-start">Sede central</h4>
                    <div class="text-start">
                      <RichText placeholder="Texto de la sede central" value={attributes.address} onChange={onChange('address')} />
                    </div>
                    <div class="link py-3 contactInfo__link">
                      <span>Ver Mapa <span class="contactInfo__link-icon">{">"}</span></span>
                    </div>
                    <PlainText value={attributes.mapUrl} placeholder="Ingrese la URL del mapa a la ubicación" onChange={onChange('mapUrl')} />
                  </div>
                  <div class="contactInfo__block">
                    <h4 class="h4 text-start">Central telefónica</h4>
                    <div class="text-start">
                      <RichText placeholder="Número(s) telefónicos" value={attributes.phone} onChange={onChange('phone')} />
                    </div>
                  </div>
                  <div class="contactInfo__block">
                    <h4 class="h4 text-start">Horario</h4>
                    <div class="text-start">
                      <RichText placeholder="Número(s) telefónicos" value={attributes.schedule} onChange={onChange('schedule')} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactEdit;
