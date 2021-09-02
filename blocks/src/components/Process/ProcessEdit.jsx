
import { PlainText, InnerBlocks, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

const ProcessEdit = (props) => {
  const { attributes: { title, icon }, setAttributes } = props;
  const onSelectImage = (newImage) => {
    setAttributes({
      title,
      icon: newImage,
    })
  }
  const onChangeTitle = (newTitle) => {
    setAttributes({
      title: newTitle,
      icon,
    })
  }

  return (
    <div {...useBlockProps()}>
      <div class="container">
        <div class="process-bar">
          <div class="row process-bar__header">
            <div class="col-2 p-0 process-bar__icon">
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
                        <>
                          <span class="d-inline-block collapsable__icon">
                            <img src={icon.url} />
                          </span>
                          <Button
                            onClick={() => { setAttributes({ title, icon: null }) }}
                            className="button button--remove"
                          >
                            <span className="material-icons">delete</span>
                          </Button>
                        </>
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
            </div>
            <div class="col p-0 process-bar__title">
              <PlainText placeholder="Título del elemento" onChange={onChangeTitle} value={title} />
            </div>
          </div>
          <div class="row g-0 process-bar__content">
            <InnerBlocks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessEdit;
