import React from "react";
import Form, { SimpleItem, GroupItem } from "devextreme-react/form";
import "./styles.scss";

const CardRender = ({ name }) => {
  return (
    <div className="card">
      <img src={name} className="card-img" alt="Enterainment-poster" />
    </div>
  );
};

const Content = () => {
  return (
    <>
      <h1 className="title-enter">The Best of Entertainment</h1>
      <div className="enter-list">
        <div className="enter-container">
          <Form>
            <GroupItem cssClass="first-group" colCount={12}>
              <SimpleItem
                name={require("../../assets/img/enter/enter1.webp")}
                render={CardRender}
              />
              <SimpleItem
                name={require("../../assets/img/enter/enter2.webp")}
                render={CardRender}
              />
              <SimpleItem
                name={require("../../assets/img/enter/enter3.webp")}
                render={CardRender}
              />
              <SimpleItem
                name={require("../../assets/img/enter/enter4.webp")}
                render={CardRender}
              />
              <SimpleItem
                name={require("../../assets/img/enter/enter5.webp")}
                render={CardRender}
              />
              <SimpleItem
                name={require("../../assets/img/enter/enter6.webp")}
                render={CardRender}
              />
              <SimpleItem
                name={require("../../assets/img/enter/enter7.webp")}
                render={CardRender}
              />
              <SimpleItem
                name={require("../../assets/img/enter/enter8.webp")}
                render={CardRender}
              />
              <SimpleItem
                name={require("../../assets/img/enter/enter9.webp")}
                render={CardRender}
              />
              <SimpleItem
                name={require("../../assets/img/enter/enter10.webp")}
                render={CardRender}
              />
              <SimpleItem
                name={require("../../assets/img/enter/enter11.webp")}
                render={CardRender}
              />
              <SimpleItem
                name={require("../../assets/img/enter/enter12.webp")}
                render={CardRender}
              />
            </GroupItem>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Content;
