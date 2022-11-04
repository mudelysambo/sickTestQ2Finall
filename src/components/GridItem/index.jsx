import React from "react";
import styled from "styled-components";
import AppContext from "../../context/AppContext";

const Grid = styled.div`
  border-radius: 5px;
  width: 215px;
  background-color: purple;
  height: 150px;
  border-right: 5px solid black;
  border-left: 5px solid black;
  border-top: 5px solid black;
  border-bottom: ${(props) => (props.endgridRaw ? "5px solid black" : "none")};
  font-size: 8rem;
  :hover {
    background-color: lightpink;
    cursor: pointer;
  }
  color: ${(props) => (props.gamecurrentwinner ? "lightblue" : "black")};
`;

const Gamebox = ({ row, col }) => {
  let { winner, state, callback } = React.useContext(AppContext);

  const val = state[row][col];

  const onClick = () => {
    if (val !== -1 || winner !== -1) {
      return;
    }
    callback(row, col);
  };

  const gameVal = <>{val === -1 ? "" : val === 0 ? "O" : "X"}</>;

  return (
    <div>
      <Grid
        endgridRaw={row === 2}
        gamecurrentwinner={winner !== -1}
        onClick={() => onClick()}
      >
        {gameVal}
      </Grid>
    </div>
  );
};

export default Gamebox;
