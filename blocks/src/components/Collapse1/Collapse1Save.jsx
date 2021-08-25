
import { InnerBlocks } from '@wordpress/block-editor';
// import { TextControl } from '@wordpress/components';

const Collapse1Save = (props) => {
  const { attributes: { title, description } } = props;
  const rand = ((new Date().getTime()) * Math.floor(Math.random() * 1000)).toString(16);
  return (
    <div class="container">
      <div class="row">
        <div class="col-9">
          <h3 class="subtitle">{title}</h3>
          <p>{description}</p>
        </div>
        <div class="col-3 d-flex align-items-center">
          <button class="button button--tertiary" type="button" data-bs-toggle="collapse" data-bs-target={"#collapsable" + rand}
            aria-expanded="false" aria-controls="collapsable">
            <span class="button__text">Ver todos</span>
            {' '}
            <span class="material-icons button__icon button__icon--transform">arrow_back_ios_new</span>
          </button>
        </div>
      </div>
      <div class="row collapse" id={"collapsable" + rand}>
        <InnerBlocks.Content />
      </div>
    </div>
  );
}

export default Collapse1Save;
