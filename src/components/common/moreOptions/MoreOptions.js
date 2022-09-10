import React, { useState } from "react";
import { MoreOptionsPane, OptionsList, OptionItem } from "./styles";
import { ReactComponent as MoreIcon } from "../../../assets/icons/more-light.svg";
import useClickOutside from "../../../hooks/useClickOutside";

export default function MoreOptions({ datasource }) {
  const [showMore, setShowMore] = useState(false);
  const toggleMoreOptions = (e) => {
    if (e) e.stopPropagation();
    setShowMore((prev) => !prev);
  };

  const itemClickHandler = (callback, e) => {
    callback.call(null, e);
    toggleMoreOptions();
  };
  let domNode = useClickOutside(() => {
    setShowMore(false);
  });
  return (
    <MoreOptionsPane ref={domNode}>
      <MoreIcon onClick={toggleMoreOptions} />
      {showMore && (
        <OptionsList>
          {datasource.map((item) => {
            return (
              <OptionItem
                key={item.title}
                onClick={itemClickHandler.bind(null, item.handler)}
              >
                {item.title}
              </OptionItem>
            );
          })}
        </OptionsList>
      )}
    </MoreOptionsPane>
  );
}
