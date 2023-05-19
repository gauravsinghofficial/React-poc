/* eslint-disable react/prop-types */
import Button from "devextreme-react/button";
import React, { useState } from "react";
import List, { SearchEditorOptions } from "devextreme-react/list";
import { Button as TextBoxButton, Options } from "devextreme-react/text-box";
import { LoadPanel } from "devextreme-react/load-panel";
import { LoadIndicator } from "devextreme-react/load-indicator";
import TextBox from "devextreme-react/text-box";
import "devextreme/dist/css/dx.light.css";
import ModalPopup from "./ModalPopup";
import "./dg.scss";
import products from "./data-dummy";

const DiagnosticCriteria = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedGuideLine, setSelectedGuidLine] = useState(products[0]);
  const [selectedCriteria, setSelectedCriteria] = useState();
  const [guideLine, setGuideLine] = useState(selectedGuideLine);
  const [criteria, setCriteria] = useState(selectedCriteria);
  const [criteriaData, setCriteriaData] = useState(products[0].data);
  const [showLoader, setShowLoader] = useState(false);
  const [dialogbox, setDialogBox] = useState(false);
  const [dataTest, setTestData] = useState([]);
  const [dialogboxContent, setDialogboxContent] = useState(
    "Diagonis criteria is being processed"
  );
  const [dialogBoxLoader, setDialogBoxLoader] = useState(true);
  const [visitedItems, setVisitedItems] = useState([]);

  const handleLoadPanelHide = () => {
    setPopupOpen(false);
    setDialogBox(true);
  };

  const handlePopupOpen = () => {
    setPopupOpen(true);
  };
  const handlePopupClose = () => {
    setPopupOpen(false);
  };
  const handlePopUp = () => {
    setPopupOpen(true);
    setDialogBox(false);
  };

  const onItemClick = (data) => {
    const itemText = data.itemData.ID;

    if (!visitedItems.includes(itemText)) {
      setVisitedItems([...visitedItems, itemText]);
    }
  };
  // eslint-disable-next-line react/no-unstable-nested-components, react/destructuring-assignment
  const selectedIcon = <i className="dx-icon-check"></i>;

  const ItemTemplate = (data) => {
    const itemVisited = visitedItems.includes(data.ID);
    const badge = itemVisited ? <span className="badge"></span> : null;
    return (
      <div
        className="list-item-template"
        style={{ display: "flex", color: "gray" }}
      >
        <span>{data?.label}</span>

        {badge}
        {selectedGuideLine?.label === guideLine?.label &&
          data.label === criteria?.label &&
          selectedIcon}
      </div>
    );
  };

  const DialogBox = () => {
    return (
      <>
        <div id="myModal" className={dialogbox ? "myModal" : "modal"}>
          <div className="modal-content">
            <div>
              <span className="close" onClick={handlePopUp}>
                &harr;
              </span>
              {dataTest.map((data, index) => (
                <div key={index} className="dialog_container">
                  {dialogBoxLoader ? (
                    <LoadIndicator height={30} width={30} />
                  ) : null}
                  <div className="dialog-content">
                    <p style={{ color: "white" }}>{data}</p>
                    <p style={{ color: "gray" }}>{dialogboxContent}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  const LoaderShow = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setDialogboxContent("Processing completed");
      setDialogBoxLoader(false);
    }, 5000);
    setDialogboxContent("Diagonis criteria is being processed");
    setDialogBoxLoader(true);
  };

  const onGuideLineChange = (e) => {
    LoaderShow();
    let item = e.addedItems[0];
    let lbl = item.label;
    setGuideLine(item);
    setCriteriaData(item.data);
    setTestData((d) => [...d, lbl]);
  };

  const onCriteriaChange = (e) => {
    let item = e.addedItems[0];
    setCriteria(item);
    setSelectedCriteria(item);
    setSelectedGuidLine(guideLine);
  };

  const handleDeselectCriteria = (e) => {
    if (
      selectedGuideLine?.label === guideLine?.label &&
      criteria?.label === e.itemData?.label
    ) {
      setCriteria();
      setSelectedCriteria();
      setSelectedGuidLine(products[0]);
    }
  };

  const onClickApplyBtn = (e) => {
    setSelectedGuidLine(guideLine);
    // popupRef.current.instance.hide();
    setPopupOpen(false);
  };

  const handleClearCriteria = (e) => {
    setCriteria();
    setSelectedCriteria();
    setSelectedGuidLine(products[0]);
    setGuideLine(products[0].data);
    setCriteriaData(products[0].data);
  };

  const renderContent = () => (
    <div className="dg-criteria" data-testid="pop-up">
      <h2 className="dg-criteria-heading">Select diagnosis criteria</h2>
      <div className="dg-criteria-content">
        <div className="guide-lines">
          <div className="guide-lines-header">
            <p className="subHeading">Release</p>
            <p className="guide-lines-header-content-date">Apr'21</p>
            <p className="guide-lines-content-tagline">
              Recommended as per patient's discharge date
            </p>
          </div>
          <List
            // ref={guideLineListRef}
            dataSource={products}
            selectedItemKeys={[guideLine]}
            height={400}
            itemRender={ItemTemplate}
            selectionMode="single"
            onSelectionChanged={onGuideLineChange}
            onItemClick={onItemClick}
          />
        </div>
        <div className="criteria">
          {showLoader ? (
            <div className="container-loader">
              <LoadPanel
                width={500}
                shadingColor="rgba(0, 0, 0, 0.2)"
                visible={true}
                showIndicator={showLoader}
                shading={false}
                showPane={false}
                message="Processing your chosen diagnosis criteria. Please wait."
                hideOnOutsideClick={true}
              />
              <div className="button-content">
                <div className="content-loader">
                  You can continue to work while the processing completes.
                </div>
                <div className="button-loader">
                  <Button text="Ok" onClick={handleLoadPanelHide} />
                </div>
              </div>
            </div>
          ) : (
            <div id="listData">
              <List
                data-testid="Criteria"
                dataSource={criteriaData}
                selectedItemKeys={[criteria]}
                height={400}
                itemRender={ItemTemplate}
                searchEnabled={true}
                searchMode="contains"
                searchExpr="label"
                selectionMode="single"
                onSelectionChanged={onCriteriaChange}
                onItemClick={handleDeselectCriteria}
              >
                <SearchEditorOptions
                  mode="text"
                  placeholder="Search Criteria"
                  stylingMode="none"
                >
                  <TextBoxButton name="search">
                    <Options icon="find" disabled="true" />
                  </TextBoxButton>
                </SearchEditorOptions>
              </List>
              <div className="button-apply">
                <Button
                  data-testid="Apply"
                  text="Apply"
                  onClick={onClickApplyBtn}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div data-testid="outside-area"></div>
      {dialogbox ? <DialogBox /> : null}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          background: "#222",
          color: "#eee",
        }}
        className="diagnostic-criteria"
        aria-labelledby="diagnostic criteria"
      >
        <TextBox
          name="textbox"
          placeholder=""
          height={40}
          width={250}
          onFocusIn={handlePopUp}
        >
          <div className="select-criteria">
            <p data-testid="Select-Criteria" onClick={handlePopupOpen}>
              {/* {guideLine?.label ? guideLine?.label : null}{" "}
              {guideLine?.label ? "|   " : null}              
              {criteria?.label || "Select Criteria"} */}
              {criteria?.label
                ? guideLine?.label + " | " + criteria?.label
                : "Select Criteria"}
            </p>
            {criteria && (
              <i
                role="img"
                className="dx-icon-remove"
                onClick={handleClearCriteria}
              ></i>
            )}
            <i
              onClick={handlePopupOpen}
              role="img"
              className="dx-icon-chevronright open-diagnostic-criteria-popup"
            ></i>
          </div>
        </TextBox>
        {/* <div className="searchContent">
          <h3 className="diagnostic-criteria-heading">Diagnostic Criteria</h3>
          <div className="select-criteria">
            <p onClick={handlePopupOpen}>
              {criteria?.label || "Select Criteria"}
            </p>
            {criteria && (
              <i
                role="img"
                className="dx-icon-remove"
                onClick={handleClearCriteria}
              ></i>
            )}
            <i
              onClick={handlePopupOpen}
              role="img"
              className="dx-icon-chevronright open-diagnostic-criteria-popup"
            ></i>
          </div>
        </div> */}
      </div>
      <ModalPopup
        // ref={popupRef}
        popupVisible={popupOpen}
        handlePopupClose={handlePopupClose}
        renderContent={renderContent}
      />
    </>
  );
};

export default DiagnosticCriteria;
