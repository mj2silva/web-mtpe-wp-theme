import { TextControl, Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck, InnerBlocks } from '@wordpress/block-editor';

const InfoAssetInput = (props) => {
  const { link, setLink, removeLink } = props;
  const onChangeUrl = (url) => {
    setLink({
      ...link,
      url,
    })
  };
  const onChangeLabel = (label) => {
    setLink({
      ...link,
      label,
    })
  };
  const onSelectImage = (image) => {
    setLink({
      ...link,
      image,
    })
  }
  const handleRemove = () => {
    removeLink(link);
  }
  return (
    <div>
      <InnerBlocks />
      <MediaUploadCheck>
        <MediaUpload
          className="js-book-details-image wp-admin-book-details-image"
          allowedTypes={['image']}
          multiple={false}
          value={link.image?.id || ''}
          addToGallery
          onSelect={onSelectImage}
          render={({ open }) => (
            (link.image) ?
              (
                <div>
                  <p>
                    <img src={link.image.url} width={link.image.width / 2} />
                  </p>
                  <p>
                    <Button
                      onClick={() => { setLink({ ...link, image: null }) }}
                      className="button is-small"
                    >
                      <span className='material-icons'>delete</span>
                    </Button>
                  </p>
                </div>
              )
              :
              (
                <Button
                  onClick={open}
                  className="button"
                >
                  Subir imagen
                </Button>
              )
          )}
        />
      </MediaUploadCheck>
      <TextControl value={link.url} name="url" placeholder="Url" onChange={onChangeUrl} />
      <TextControl value={link.label} name="label" placeholder="Texto del enlace" onChange={onChangeLabel} />
      <Button onClick={handleRemove} className="button is-small">Eliminar</Button>
    </div>
  )
}

export default InfoAssetInput;
