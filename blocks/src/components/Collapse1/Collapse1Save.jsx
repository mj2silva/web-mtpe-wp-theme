
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Collapse1Save = (props) => {
  const { attributes: { title, description, id } } = props;
  return (
    <div class="container px-0 collapsable2 accordion" id={"accordion3"+id}>
      <div class="accordion-item border-0">
        <div class="accordion-header row g-0" id={"collapsable3head" + id}>
          <div class="col-9">
            <h3 class="subtitle">{title}</h3>
            <p>{description}</p>
          </div>
          <div class="col-3 d-flex align-items-center justify-content-center justify-content-lg-end">
            <button class="button button--tertiary accordion-button button--dflex justify-content-center w-75 collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapsable3" + id} aria-expanded="false" aria-controls={"collapsable3" + id}>
              <span class="d-none d-lg-inline button__text">Ver todos</span>
            </button>
          </div>
        </div>
        <div class="row collapse" id={"collapsable3" + id} aria-labelledby={"collapsable3head" + id}>
          <div className="accordion-body">
            <InnerBlocks.Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collapse1Save;
