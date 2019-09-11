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

        const trimestreStyle: React.CSSProperties = {
            display: 'flex',
            backgroundColor: "orange",
            position: 'sticky',
            top: 0,
            width: '75%'
        }

        const trimestreStyleEven: React.CSSProperties = {
            display: 'flex',
            backgroundColor: "lightgrey",
            position: 'sticky',
            top: 0,
            width: '100%',
            border: '1px black'
        }

        const trimestreStyleOdd: React.CSSProperties = {
            display: 'flex',
            backgroundColor: "white",
            position: 'sticky',
            top: 0,
            width: '100%',

        }

        const instanceStyle: React.CSSProperties = {
            backgroundColor: "cyan",
            display: 'flex',
            width: '25%'
        }

        const textAlign: React.CSSProperties = {
            display: "flex"

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
            //height : '100%'
        }

        const trimestretitle: React.CSSProperties = {
            width: '100%',
            display: 'flex',
            //height : '100%',
            border: 'solid 1px black'
        }

        const calendartitle: React.CSSProperties = {
            width: '75%',
            height: '100%'
        }

        const infostyle: React.CSSProperties = {
            zIndex: 50,
            position: 'absolute',

        }

        const canauxStyle: React.CSSProperties = {
            width: '25%',
            height: '5%',
            backgroundColor: 'red'
        }
        return (
            <div id='infostyle'>
                <div style={plannindDeployYear}>
                    <div style={instanceStyle}></div>

                    <div style={calendartitle}>
                        <div style={trimestretitle}>
                            <div style={trimestreStyleOdd}>1er T</div>
                            <div style={trimestreStyleEven}>2eme T</div>
                            <div style={trimestreStyleOdd}>3eme T</div>
                            <div style={trimestreStyleEven}>4eme T</div>
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

    //public state: State = initialeState;

    public componentWillMount() {
        Osature.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        Osature.updateCallback = null;
    }
}
