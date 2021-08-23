const InfoLinksSave = (props) => {
  const { attributes: { links } } = props;
  return (
    <section class="container-fluid container--gray  py-5">
      <div class="container">
        <div class="py-4">
          <h2>¡Todo lo que debes saber para trabajar dentro y fuera del Perú</h2>
          <p class="h5">
            Entérate de los beneficios, requisitos y pasos para acceder a ellos, y otra información de tu interés.
          </p>
          <div class="py-5">
            <div class="row">
              {
                links.map((link) => (
                  <div class="col-md-3 col-xs-12">
                    <div class="card--no-bar">
                      <div class="icon-container py-4">
                        <img class="icon card__super-icon" src={link.image?.url} alt={link.image?.alt} />
                      </div>
                      <a href="{link.url}" class="button--center button--primary">
                        <span class="text-center text--bold">
                          {link.label}
                        </span>
                      </a>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoLinksSave;
