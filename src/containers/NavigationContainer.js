import React, { useState } from "react";
import Wrapper from "../components/common/Wrapper/Wrapper";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import addIcon from "../assets/icons/add.svg";
import DropDown from "../components/form/dropDown/DropDown";
import ActionButton from "../components/navigation/ActionButton";
import Navigation from "../components/navigation/Navigation";
import AddTaskContainer from "./AddTaskContainer";

const DUMMY_BOARDS = ["Platform Launch", "Marketing Plan", "Roadmap"];
export default function NavigationContainer() {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const onBoardClickedHandler = () => {};
  const toggleAddTaskModal = () => setShowAddTaskModal((prev) => !prev);

  return (
    <>
      <Navigation>
        <Logo />
        <Wrapper width="100%" justify="space-between" margin="0 0 0 1em">
          <DropDown
            dataSource={DUMMY_BOARDS}
            onItemClicked={onBoardClickedHandler}
            shouldHide={true}
          />
          <Wrapper>
            <ActionButton
              title="Add new task"
              icon={addIcon}
              handler={toggleAddTaskModal}
            />
          </Wrapper>
        </Wrapper>
      </Navigation>
      {showAddTaskModal && <AddTaskContainer onClose={toggleAddTaskModal} />}
    </>
  );
}
