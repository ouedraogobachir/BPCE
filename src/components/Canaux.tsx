import * as React from 'react';
import { Component } from 'react';
import Channel from './Channel';
import { VisualSettings } from '../settings';
import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import powerbi from "powerbi-visuals-api";

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

var canaux = '';

 
class Canaux extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // this.state = { :  };
    }
    render() { 

      return ( 
        <div> {canaux} </div>
      );
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
                canaux = newState.essaie.rows[0][0].toString();
        if (typeof Canaux.updateCallback === 'function') {
            Canaux.updateCallback(newState);
        }
    }

    public componentWillMount() {
        Canaux.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        Canaux.updateCallback = null;
    }
}
 
export default Canaux;