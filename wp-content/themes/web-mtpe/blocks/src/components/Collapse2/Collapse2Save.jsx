
import { InnerBlocks } from '@wordpress/block-editor';

const Collapse2Save = (props) => {
  const { attributes: { title, icon, id } } = props;
  return (
    <div className="container px-0 collapsable">
      <div className="row g-0 px-2 my-2 d-flex justify-content-between" id={"collapsable2head" + id}>
        <div className="col-10 p-0 d-flex align-items-center">
          {
            icon && (
              <span className="d-inline-block collapsable__icon">
                <img src={icon.url} alt={icon.alt} />
              </span>
            )
          }
          <h4 className="collapsable__title">{title}</h4>
        </div>
        <div className="col-1 d-flex align-items-center justify-content-end">
          <button className="button collapsable__toggle" type="button" data-bs-toggle="collapse"
            data-bs-target={"#collapsable2" + id} aria-expanded="true" aria-controls={"collapsable2" + id}>
            <span className="material-icons button__icon">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="row collapse g-0" id={"collapsable2" + id} aria-labelledby={"collapsable2head" + id}>
        <div className="collapsable__content">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}

export default Collapse2Save;