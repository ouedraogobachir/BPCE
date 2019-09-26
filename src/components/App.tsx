import * as React from 'react';
import { Component } from 'react';

import { Main } from './Main';
import { Osature, props } from './Osature';
import Header from './Header';
import { VisualSettings } from '../settings';
import powerbi from 'powerbi-visuals-api';



export interface Props {

}

export interface State {
    settings: VisualSettings,
    essaie: powerbi.DataViewTable
}

export const initialeState: State = {
    settings: new VisualSettings(),
    essaie: null
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // this.state = { :  };
    }

    render() {

        const border: React.CSSProperties = {
            border: 'solid 1px grey'
        }

        return (
            <React.Fragment>
                <div style={border}>
                    <Header></Header>
                    <Osature></Osature>
                </div>
            </React.Fragment>
        );
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        Main.update(newState);
        if (typeof App.updateCallback === 'function') {
            App.updateCallback(newState);
        }
    }

    public componentWillMount() {
        App.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        App.updateCallback = null;
    }
}

export default App;