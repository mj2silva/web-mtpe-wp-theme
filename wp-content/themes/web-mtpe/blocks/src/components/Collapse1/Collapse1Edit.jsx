
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
      <div className="wp-block container-fluid with-border">
        <div className="row">
          <div className="col-9">
            <h3 className="subtitle"><PlainText value={title} onChange={onChangeTitle} placeholder="Título del grupo" /></h3>
            <p><PlainText value={description} onChange={onChangeDescription} placeholder="Breve descripción o introducción" label="Breve descripción o introducción" /></p>
          </div>
          <div className="col-3 d-flex align-items-center">
            <button className="button button--tertiary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsable"
              aria-expanded="true" aria-controls="collapsable">
              <span className="button__text">Ver todos</span>
              {' '}
              <span className="material-icons button__icon button__icon--transform">arrow_back_ios_new</span>
            </button>
          </div>
        </div>
        <div className="row" id="collapsable">
          <InnerBlocks />
        </div>
      </div>
    </div>
  );
}

export default Collapse1Edit;
