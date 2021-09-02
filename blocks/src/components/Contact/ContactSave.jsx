import { RichText, PlainText, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';

const ContactSave = (props) => {
  const { attributes: { mapUrl, background, address, phone, schedule, anchor } } = props;
  return (
    <div id={anchor} class="container-fluid m-0 p-0">
      <div id="contactInfo" class="carousel slide contactInfo" data-bs-ride="carousel">
        <div class="d-none d-lg-block carousel-inner contactInfo__carousel">
          <div class="carousel-item active">
            <img src={background.url} class="d-md-block w-100"
              alt={background.alt} />
            <div class="row px-0 carousel-caption contactInfo__caption d-flex px-2">
              <h2 class="text-start">Contacto</h2>
              <div class="container py-4 px-5 contactInfo__caption-content">
                <div class="contactInfo__block">
                  <h4 class="h4 text-start">Sede central</h4>
                  <p className="text-start">
                    <RichText.Content value={address} />
                  </p>
                  <div class="link py-2 contactInfo__link text-start">
                    <a href={mapUrl} target="_blank" rel="noreferrer noopener">Ver Mapa <span class="contactInfo__link-icon">{">"}</span></a>
                  </div>
                </div>
                <div class="contactInfo__block">
                  <h4 class="h4 text-start">Central telefónica</h4>
                  <p className="text-start">
                    <RichText.Content value={phone} />
                  </p>
                </div>
                <div class="contactInfo__block">
                  <h4 class="h4 text-start">Horario</h4>
                  <p className="text-start">
                    <RichText.Content value={schedule} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-lg-none d-block row px-4 py-3 g-0">
          <div class="row px-0 d-flex px-2">
            <h2 class="text-center text-lg-start">Contacto</h2>
            <div class="container py-4">
              <div class="contactInfo__block">
                <h4 class="h4 text-start">Sede central</h4>
                <RichText.Content value={address} />
                <div class="link py-3 contactInfo__link">
                  <a href="#">Ver Mapa <span class="contactInfo__link-icon">{">"}</span></a>
                </div>
              </div>
              <div class="contactInfo__block">
                <h4 class="h4 text-start">Central telefónica</h4>
                <RichText.Content value={phone} />
              </div>
              <div class="contactInfo__block">
                <h4 class="h4 text-start">Horario</h4>
                <RichText.Content value={schedule} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSave;
