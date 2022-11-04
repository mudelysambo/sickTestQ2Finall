import React from 'react';
import GridItem from '../GridItem';
import styled from 'styled-components';
import AppContext from '../../context/AppContext';
import labels from '../../constants';

const GridDisplay = styled.div`
    display: grid;
    grid-template-columns: 210px 210px 210px;
    width: 500px;
    min-width: 700px;
`

const ContentDisplay = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: grid;
    margin-top: ${props => props.topMargin ? props.topMargin : '0rem'};
    margin-bottom: ${props => props.bottomMargin ? props.bottomMargin : '0rem'}
`;

const GameReset = styled.button`
    width: 4rem;
    height: 2rem;
    border: none;
    border-radius: 5px;
    background-color: lightpink;
`;

const TicTacToeGrid = () => {

    const {resetState} = React.useContext(AppContext);
    const { state } = React.useContext(AppContext);
    const { winner} = React.useContext(AppContext);
    const { val } = React.useContext(AppContext);



    
    const element = state.map((row, horizontalGridIndex) => {
        return <GridDisplay key={horizontalGridIndex}>
            {row.map((_, verticanGridIndex) => {
                return <GridItem key={horizontalGridIndex + verticanGridIndex} row={horizontalGridIndex} col={verticanGridIndex} />
            })}
        </GridDisplay>
    })

    let winningParticipant = winner === 0 || winner === 1 ? ` Winner: Player <b>${labels[winner]}</b> 🤸‍♀️🤸‍♀️` : null;
    let gameDraw = winner === 2 ? 'Draw  🤙 ' : null;

    let participanTurnLabel;
    if (winningParticipant) {
        participanTurnLabel = winningParticipant
    } else if (gameDraw) {
        participanTurnLabel = gameDraw;
    } else {
        participanTurnLabel = `Player  ${labels[val]}, is your turn`;
    }
    return <ContentDisplay>
        <h2>Tick Tac Toe Game!</h2>
        {element}
        <ContentDisplay topMargin='1rem'>
            {participanTurnLabel}
        </ContentDisplay>
        <ContentDisplay bottomMargin='1rem' topMargin='1rem'>
            <GameReset onClick={() => { resetState()}}>Reset</GameReset>
        </ContentDisplay>
    </ContentDisplay>
}

export default TicTacToeGrid;