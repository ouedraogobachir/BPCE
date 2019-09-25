import * as React from 'react';
import { Component } from 'react';
import { Main } from './Main';

export interface Props {
    canaux: string,
    instance: string
}

export interface State {

}

export const props = {
    canaux: "",
    instance: ""
}


export class Osature extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        // this.state = { :  };
    }
    render() {

        const plannindDeployYear: React.CSSProperties = {
            width: '100%',
            height: '100%',
            display: 'flex'
        }

        const trimestreStyleEven: React.CSSProperties = {
            backgroundColor: "lightgrey",
            position: 'sticky',
            top: 0,
            width: '100%',
            border: '1px black',
            textAlign: 'center',
            fontSize: 'smaller'
        }

        const trimestreStyleOdd: React.CSSProperties = {
            backgroundColor: "white",
            position: 'sticky',
            top: 0,
            width: '100%',
            textAlign: 'center',
            fontSize: 'smaller'

        }

        const instanceStyle: React.CSSProperties = {
            backgroundColor: "cyan",
            display: 'flex',
            width: '25%'
        }

        const grey: React.CSSProperties = {
            backgroundColor: 'lightgrey',
            width: '100%',
            height: '100%',
            paddingBottom: '100%'
        }

        const white: React.CSSProperties = {
            backgroundColor: 'white',
            width: '100%',
            paddingBottom: '100%'
        }

        const trimestretitle: React.CSSProperties = {
            width: '100%',
            display: 'flex',
            border: 'solid 1px black'
        }

        const calendartitle: React.CSSProperties = {
            width: '75%',
            height: '100%'
        }

        return (
            <div id='infostyle'>
                <div style={plannindDeployYear}>
                    <div style={instanceStyle}></div>

                    <div style={calendartitle}>
                        <div style={trimestretitle}>
                            <div style={trimestreStyleOdd}>1er trimestre</div>
                            <div style={trimestreStyleEven}>2eme trimestre</div>
                            <div style={trimestreStyleOdd}>3eme trimestre</div>
                            <div style={trimestreStyleEven}>4eme trimestre</div>
                        </div>
                        <div style={trimestretitle}>
                            <div style={grey}> </div>
                            <div style={white}></div>
                            <div style={grey}></div>
                            <div style={white}></div>
                            <div style={grey}></div>
                            <div style={white}></div>
                            <div style={grey}></div>
                            <div style={white}></div>
                            <div style={grey}></div>
                            <div style={white}></div>
                            <div style={grey}></div>
                            <div style={white}></div>
                        </div>
                    </div>
                    <Main></Main>
                </div>
            </div>
        );
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof Osature.updateCallback === 'function') {
            Osature.updateCallback(newState);
        }
    }

    public componentWillMount() {
        Osature.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        Osature.updateCallback = null;
    }
}

export default Osature;