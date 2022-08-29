import React, { useState, useRef } from "react";
import {
  Container,
  DropDownList,
  DropDownItem,
  Pane,
  CurrentItem,
  Image,
} from "./styles";
import dropIcon from "../../../assets/icons/arrow-drop-down.svg";

export default function DropDown({
  dataSource,
  onItemClicked,
  shouldHide,
  width,
}) {
  const [value, setValue] = useState("Filter By Region");
  const [clickState, setClickState] = useState(false);
  const containerRef = useRef(null);
  const onClickHandler = () => {
    setClickState((prev) => !prev);
  };

  const onItemClickHandler = (e) => {
    setValue(e.target.innerText);
    onItemClicked(e.target.innerText);
    setClickState((prev) => !prev);
  };

  return (
    <Container shouldHide={shouldHide} ref={containerRef} width={width}>
      <Pane
        direction="row"
        justify="space-between"
        margin="1em 1em 0.5em 1em"
        onClick={onClickHandler}
      >
        <CurrentItem>{value}</CurrentItem>
        <Image src={dropIcon} alt="" />
      </Pane>
      {clickState && (
        <DropDownList>
          {dataSource.map((item) => {
            return (
              <DropDownItem key={item} onClick={onItemClickHandler}>
                {item}
              </DropDownItem>
            );
          })}
        </DropDownList>
      )}
    </Container>
  );
}
