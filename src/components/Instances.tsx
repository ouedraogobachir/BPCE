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

var instance = '';
var instanceColor = '';
const linkFDD = require("../media/LinkFDD.png");
const maj = require("../media/MAJ.png");
const newproject = require("../media/new.png");

class Instances extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        //this.state = { :  };
    }
    render() {

        var InstanceStyle: React.CSSProperties = {
            backgroundColor: instanceColor,
            height: '100%'
        }

        var linkStyle: React.CSSProperties = {
            height: '28px',
        }

        var MAJStyle: React.CSSProperties = {
            height: '30px',
        }

        var newStyle: React.CSSProperties = {
            height: '30px',
        }

        return (
            <div style={InstanceStyle} id='instace'>
                <div>
                    <img style={newStyle} src={newproject}></img>
                </div>
                <div>
                    <img style={linkStyle} src={linkFDD}></img>
                </div>
            </div>
        );
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        //gestion couleur instance
        instance = newState.essaie.rows[0][4].toString();
        if (instance == 'Marché des particuliers et des patrimoniaux' || instance == 'Entreprises, professionnels et institutionnels') {
            instanceColor = '#ff0c87'
        }
        if (instance == 'Digital') {
            instanceColor = '#6d28da'
        }
        if (instance == 'Finances & comptabilité') {
            instanceColor = '#3a1dd8'
        }
        if (instance == "Informatique d'entreprise") {
            instanceColor = '#47ccf4'
        }
        if (instance == 'Moyens de paiement & échanges') {o
            instanceColor = '#3ade8b'
        }
        if (instance == 'Risques & conformité') {
            instanceColor = '#06875d'
        }
        else {
            instanceColor = 'brown'
        }


        if (typeof Instances.updateCallback === 'function') {
            Instances.updateCallback(newState);
        }
    }

    public componentWillMount() {
        Instances.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        Instances.updateCallback = null;
    }
}

export default Instances;