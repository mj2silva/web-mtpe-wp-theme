import { RichText } from '@wordpress/block-editor';

const ContactSave = (props) => {
  const { attributes: { mapUrl, background, address, phone, schedule, anchor } } = props;
  return (
    <div id={anchor} className="position-relative container-fluid m-0 p-0">
      <div id="contactInfo" className="carousel slide contactInfo" data-bs-ride="carousel">
        <div className="d-none d-lg-block carousel-inner contactInfo__carousel">
          <div className="carousel-item active">
            <img src={background.url} className="d-md-block w-100"
              alt={background.alt} />
            <div className="row px-0 carousel-caption contactInfo__caption d-flex px-2">
              <h2 className="text-start">Contacto</h2>
              <div className="container py-4 px-5 contactInfo__caption-content">
                <div className="contactInfo__block">
                  <h4 className="h4 text-start">Sede central</h4>
                  <p className="text-start">
                    <RichText.Content value={address} />
                  </p>
                  <div className="link py-2 contactInfo__link text-start">
                    <a href={mapUrl} target="_blank" rel="noreferrer noopener">Ver Mapa <span className="contactInfo__link-icon">{">"}</span></a>
                  </div>
                </div>
                <div className="contactInfo__block">
                  <h4 className="h4 text-start">Central telefónica</h4>
                  <p className="text-start">
                    <RichText.Content value={phone} />
                  </p>
                </div>
                <div className="contactInfo__block">
                  <h4 className="h4 text-start">Horario</h4>
                  <p className="text-start">
                    <RichText.Content value={schedule} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-lg-none d-block row px-4 py-3 g-0">
          <div className="row px-0 d-flex px-2">
            <h2 className="text-center text-lg-start">Contacto</h2>
            <div className="container py-4">
              <div className="contactInfo__block">
                <h4 className="h4 text-start">Sede central</h4>
                <RichText.Content value={address} />
                <div className="link py-3 contactInfo__link">
                  <a href="#">Ver Mapa <span className="contactInfo__link-icon">{">"}</span></a>
                </div>
              </div>
              <div className="contactInfo__block">
                <h4 className="h4 text-start">Central telefónica</h4>
                <RichText.Content value={phone} />
              </div>
              <div className="contactInfo__block">
                <h4 className="h4 text-start">Horario</h4>
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
