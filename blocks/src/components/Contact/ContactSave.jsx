const ContactSave = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide presentation" data-bs-ride="carousel">
      <div className="d-none d-lg-block carousel-inner">
        <div className="carousel-item active">
          <div className="black-gradient"></div>
          <img src="echo $fields['imagen_principal']" className="d-md-block w-100 presentation__image" alt="Imagen de portada" />
          <div className="row px-0 carousel-caption d-flex px-2 presentation__field">
            <div className="container">
              <h1 className="h1 text-start">$fields['titulo_principal']</h1>
              <div className="presentation__content text-start">
                php echo $fields['mensaje_presentacion'];
              </div>
              <div className="presentation__buttons-container text-start">
                <a href="#" className="btn btn-primary presentation__button">Migración laboral</a>
                <a href="#" className="btn btn-primary presentation__button">Seguridad social</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none d-block row px-4 py-3 g-0">
        <div className="container">
          <h3>Sede central</h3>
          <div className="presentation__content text-start">
            echo $fields['mensaje_presentacion']
          </div>
          <div className="presentation__buttons-container text-start">
            <a href="/proceso-migratorio-laboral" className="btn btn-primary presentation__button">Migración laboral</a>
            <a href="/seguridad-social" className="btn btn-primary presentation__button">Seguridad social</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSave;
