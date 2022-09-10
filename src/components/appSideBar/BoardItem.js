import React from "react";
import { BoardListItem, BoardListItemName } from "./styles";
import { ReactComponent as IconLight } from "../../assets/icons/layout-light.svg";
import { ReactComponent as IconDark } from "../../assets/icons/layout-dark.svg";
import { getUserThemePref } from "../../helpers/helpers";
import MoreOptions from "../common/moreOptions/MoreOptions";
import Wrapper from "../common/Wrapper/Wrapper";

export default function BoardItem({
  board,
  isActive,
  onBoardEdit,
  onBoardDelete,
  ...rest
}) {
  const isDark = getUserThemePref();

  const editHandler = (e) => {
    e.stopPropagation();
    onBoardEdit.apply(null, board);
  };

  const deleteHandler = (e) => {
    e.stopPropagation();
    onBoardDelete.apply(null, board);
  };

  return (
    <BoardListItem isActive={isActive} {...rest}>
      <Wrapper bgColor="transparent" cursor="pointer">
        {isDark ? <IconLight /> : <IconDark />}
        <BoardListItemName>{board.title}</BoardListItemName>
      </Wrapper>
      <MoreOptions
        datasource={[
          { title: "Edit", handler: editHandler },
          { title: "Delete", handler: deleteHandler },
        ]}
      />
    </BoardListItem>
  );
}
