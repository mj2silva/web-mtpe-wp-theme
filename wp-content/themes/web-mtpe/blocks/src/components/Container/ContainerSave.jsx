
import { InnerBlocks } from '@wordpress/block-editor';

const ContainerSave = (props) => {
  const { attributes: { anchor } } = props;
  return (
    <div id={anchor} className="container py-4 position-relative">
      <InnerBlocks.Content />
    </div>
  );
}

export default ContainerSave;
