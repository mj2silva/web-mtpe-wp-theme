
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Collapse1Save = (props) => {
  const { attributes: { title, description, id } } = props;
  return (
    <div class="container px-0">
      <div class="row g-0">
        <div class="col-9">
          <h3 class="subtitle">{title}</h3>
          <p>{description}</p>
        </div>
        <div class="col-3 d-flex align-items-center">
          <button class="button button--tertiary" type="button" data-bs-toggle="collapse" data-bs-target={"#collapsable" + id}
            aria-expanded="false" aria-controls="collapsable">
            <span class="d-none d-md-inline button__text">Ver todos{'  '}</span>
            <span class="material-icons button__icon button__icon--transform">arrow_back_ios_new</span>
          </button>
        </div>
      </div>
      <div class="row collapse" id={"collapsable" + id}>
        <InnerBlocks.Content />
      </div>
    </div>
  );
}

export default Collapse1Save;
