import * as React from 'react';
import { Component } from 'react';
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

var channel = '';
 
class Channel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        //this.state = { :  };
    }
    render() { 

        return ( 
            <div>
             {channel}</div>
         );
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
            channel = 'Period du ' + newState.essaie.rows[0][6] + ' au ' + newState.essaie.rows[0][7];
        if (typeof Channel.updateCallback === 'function') {
            Channel.updateCallback(newState);
        }
    }

    public componentWillMount() {
        Channel.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        Channel.updateCallback = null;
    }
}
 
export default Channel;