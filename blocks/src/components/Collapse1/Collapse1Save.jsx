
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Collapse1Save = (props) => {
  const { attributes: { title, description, id } } = props;
  return (
    <div class="container px-0 collapsable2 accordion" id={"accordion"+id}>
      <div class="accordion-item">
        <div class="accordion-header row g-0" id={"collapsablehead" + id}>
          <div class="col-9">
            <h3 class="subtitle">{title}</h3>
            <p>{description}</p>
          </div>
          <div class="col-3 d-flex align-items-center">
            <button class="button button--tertiary accordion-button button--dflex collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapsable" + id} aria-expanded="false" aria-controls={"collapsable" + id}>
              <span class="d-none d-lg-inline button__text">Ver todoss</span>
            </button>
          </div>
        </div>
        <div class="row collapse" id={"collapsable" + id} aria-labelledby={"collapsablehead" + id} data-bs-parent={"accordion"+id}>
          <div className="accordion-body">
            <InnerBlocks.Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collapse1Save;
