import React from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {

    let gameArray = () => [new Array(3).fill(-1), new Array(3).fill(-1), new Array(3).fill(-1)];

    const [state, setState] = React.useState(gameArray());
    const [val, setVal] = React.useState(1);
    const [winner, setWinner] = React.useState(-1);

    const resetState = () => {
        setState(gameArray())
        setWinner(-1);
    }

    const callback = (row, col) => {
        state[row][col] = val;
        setState(state);
        updateWinningPlayer();
        setVal(val === 1 ? 0 : 1);
    }

    const gameDraw = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (state[i][j] === -1) {
                    return false;
                }
            }
        }
        return true;
    }

    const updateWinningPlayer = () => {

        const gamediagonalGrid = Diagonal();
        const gameverticalgrid = Vertical();
        const gamehorizontalgrid = Horizontal();

        if (gamediagonalGrid !== -1) {
            setWinner(gamediagonalGrid)
            return;
        }

        if (gameverticalgrid !== -1) {
            setWinner(gameverticalgrid);
            return;
        }

        if (gamehorizontalgrid !== -1) {
            setWinner(gamehorizontalgrid);
            return;
        }

        if (gameDraw()) {
            setWinner(2);
        }
    }

    const Diagonal = () => {
        if ((state[0][0] === val && state[1][1] === val && state[2][2] === val) ||
            (state[0][2] === val && state[1][1] === val && state[2][0] === val)) {
            return val;
        }
        return -1;
    }

    const Vertical = () => {
        for (let i = 0; i <= 2; i++) {
            if (state[0][i] === val && state[1][i] === val && state[2][i] === val) {
                return val;
            }
        }
        return -1;
    }
    const Horizontal = () => {
        for (let i = 0; i <= 2; i++) {
            if (state[i][0] === val && state[i][1] === val && state[i][2] === val) {
                return val;
            }
        }
        return -1;
    }

    return <AppContext.Provider value={{
        state, setState, val, setVal, callback, resetState,
        winner, setWinner
    }} >
        {children}
    </AppContext.Provider>
}

export default AppProvider;