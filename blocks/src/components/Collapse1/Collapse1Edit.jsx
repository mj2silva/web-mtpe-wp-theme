
import { PlainText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';
// import { TextControl } from '@wordpress/components';

const Collapse1Edit = (props) => {
  const { attributes: { title, description, id }, setAttributes } = props;
  const onChangeDescription = (newDescription) => {
    setAttributes({
      title,
      id,
      description: newDescription,
    })
  }
  const onChangeTitle = (newTitle) => {
    setAttributes({
      title: newTitle,
      description,
      id: newTitle.trim().split(' ').join('').toLowerCase(),
    })
  }

  return (
    <div {...useBlockProps()}>
      <div class="wp-block container-fluid with-border">
        <div class="row">
          <div class="col-9">
            <h3 class="subtitle"><PlainText value={title} onChange={onChangeTitle} placeholder="Título del grupo" /></h3>
            <p><PlainText value={description} onChange={onChangeDescription} placeholder="Breve descripción o introducción" label="Breve descripción o introducción" /></p>
          </div>
          <div class="col-3 d-flex align-items-center">
            <button class="button button--tertiary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsable"
              aria-expanded="true" aria-controls="collapsable">
              <span class="button__text">Ver todos</span>
              {' '}
              <span class="material-icons button__icon button__icon--transform">arrow_back_ios_new</span>
            </button>
          </div>
        </div>
        <div class="row" id="collapsable">
          <InnerBlocks />
        </div>
      </div>
    </div>
  );
}

export default Collapse1Edit;
