/* eslint-disable react/prop-types */
import React from "react";
import Popup from "devextreme-react/popup";

// eslint-disable-next-line react/prop-types
const ModalPopup = ({
  //   showTitle,
  //   title,
  popupVisible,
  renderContent,
  handlePopupClose,
}) => {
  return (
    <Popup
      width={660}
      height={540}
      showTitle={false}
      dragEnabled={false}
      hideOnOutsideClick={true}
      visible={popupVisible}
      onHiding={handlePopupClose}
      contentRender={renderContent}
    />
  );
};

export default ModalPopup;
