import { InnerBlocks } from '@wordpress/block-editor';

const ContainerGraySave = (props) => {
  const { attributes: { anchor } } = props;
  return (
    <div id={anchor} className="bg-gray py-4 container-fluid p-0">
      <div className="container">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}

export default ContainerGraySave;
