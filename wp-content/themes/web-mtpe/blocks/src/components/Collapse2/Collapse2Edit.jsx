
import { PlainText, InnerBlocks, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

const Collapse2Edit = (props) => {
  const { attributes: { title, icon, id }, setAttributes } = props;
  const onSelectImage = (newImage) => {
    setAttributes({
      title,
      icon: newImage,
      id,
    })
  }
  const onChangeTitle = (newTitle) => {
    setAttributes({
      title: newTitle,
      icon,
      id: newTitle.trim().split(' ').join(''),
    })
  }

  return (
    <div {...useBlockProps()}>
      <div className="container-fluid wp-block py-2 collapsable with-border">
        <div className="row d-flex justify-content-between">
          <MediaUploadCheck>
            <MediaUpload
              className="js-book-details-image wp-admin-book-details-image"
              allowedTypes={['image']}
              multiple={false}
              value={icon?.id || ''}
              addToGallery
              onSelect={onSelectImage}
              render={({ open }) => (
                (icon) ?
                  (
                    <div class="col-3 px-0 d-flex align-items-center">
                      <span class="d-inline-block collapsable__icon">
                        <img src={icon.url} />
                      </span>
                      <Button
                        onClick={() => { setAttributes({ title, id, icon: null }) }}
                        className="button button--remove"
                      >
                        <span className="material-icons">delete</span>
                      </Button>
                    </div>
                  )
                  :
                  (
                    <div class="col-2 d-flex align-items-center">
                      <Button
                        onClick={open}
                        className="button is-small"
                      >
                        <span className="material-icons">add</span>
                      </Button>
                    </div>
                  )
              )}
            />
          </MediaUploadCheck>
          <div className="col-7">
            <h4 className="collapsable__title"><PlainText className="p-2" value={title} placeholder="Título del elemento" onChange={onChangeTitle} /></h4>
          </div>
          <div className="col-2 d-flex align-items-center justify-content-end">
            <button className="button collapsable__toggle" type="button">
              <span className="material-icons button__icon button__icon--transform">arrow_back_ios_new</span>
            </button>
          </div>
        </div>
        <div className="row collapsable__content">
          <InnerBlocks />
        </div>
      </div>
    </div>
  );
}

export default Collapse2Edit;
