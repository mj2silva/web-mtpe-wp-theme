
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Collapse1Save = (props) => {
  const { attributes: { title, description, id } } = props;
  return (
    <div className="container px-0 collapsable2">
      <div className="row g-0" id={"collapsablehead" + id}>
        <div className="col-9">
          <h3 className="subtitle">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="col-3 d-flex align-items-center">
          <button className="button button--tertiary button--dflex" type="button" data-bs-toggle="collapse" data-bs-target={"#collapsable" + id} aria-expanded="true" aria-controls={"collapsable" + id}>
            <span className="d-none d-lg-inline button__text">Ver todos</span>
            <span className="material-icons button__icon">arrow_back_ios_new</span>
          </button>
        </div>
      </div>
      <div className="row collapse" id={"collapsable" + id} aria-labelledby={"collapsablehead" + id}>
        <InnerBlocks.Content />
      </div>
    </div>
  );
}

export default Collapse1Save;
