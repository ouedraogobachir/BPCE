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
        return (
            <React.Fragment>
                <Header></Header>
                <Osature></Osature>
            </React.Fragment>
        );
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        console.log('app ok');
        console.log('app newState ');
        console.log("app row[0][1] " + newState.essaie);
        Main.update({
            settings : newState.settings,
            essaie : newState.essaie
        });
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