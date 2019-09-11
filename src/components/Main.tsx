import * as React from 'react';
import { Component } from 'react';
import Row from './Row';
import Channel from './Channel';
import Canaux from './Canaux';
import * as Jquery from '../../node_modules/@types/jquery'
//import {  } from '../../node_modules/@types/jquery'

import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import DataView = powerbi.DataView;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
import { VisualSettings } from '../settings';
import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
import { render } from 'react-dom';

export interface Props {
    canaux: string,
    instance: string
}

export interface State {
    settings: VisualSettings,
    essaie: powerbi.DataViewTable
}

export const initialeState: State = {
    settings: new VisualSettings(),
    essaie: null
}


export const props = {
    canaux: "",
    instance: ""
}

var canaux = "J'essaie de placer une variable";
var arr = null;

export class Main extends React.Component<{}, State> {
    constructor(props: any, options: VisualUpdateOptions) {
        super(props);
        //this.state = initialeState;
    }
    render() {

        //const {, instance } = this.props;

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
            //border: 'solid 1px black'
        }

        const calendartitle: React.CSSProperties = {
            width: '75%',
            height: '100%'
        }

        const mainstyle: React.CSSProperties = {
            zIndex: 50,
            position: 'absolute',
            backgroundColor: '#3c42fc',
            width: '25%',
            fontSize: '12',
            color: 'white'
        }

        const infostyle: React.CSSProperties = {
            zIndex: 1,
            position: 'absolute',
            //backgroundColor: '#3c42fc',
            width: '100%',
            fontSize: '12',
            color: 'white',
            textAlign : 'center'
        }

        const canauxStyle: React.CSSProperties = {
            width: '25%',
            backgroundColor: 'red'
        }


        const rowstyle: React.CSSProperties = {
            zIndex: 50,
            position: 'relative',
            backgroundColor: '#3c42fc',
            width: '25%',
            fontSize: '12',
            color: 'white',
            float: 'left',
        }


        const channelstyle: React.CSSProperties = {
            zIndex: 50,
            position: 'relative',
            backgroundColor: '',
            opacity : 0.5,
            width: '75%',
            fontSize: '12',
            color: 'black',
            float: 'right',
            height : '15%',

        }

        const aLign : React.CSSProperties = {}

        return (
            <div id="infostyle" style={infostyle}>
                <div style={canauxStyle}>
                    <Canaux></Canaux>
                </div>
                <div style={aLign}>
                    <div id="rowstyle" style={rowstyle}>
                        <Row></Row>
                    </div>
                    <div id="channelstyle" style={channelstyle}>
                        <Channel></Channel>
                    </div>
                </div>
            </div>

        );
    }

    public static displayForm() {
        var renderedOutput = arr.map((item) => <div> {item} </div>)

        return (
            <div>
                {renderedOutput}
            </div>
        );
    }

    private static updateCallback: (data: object) => void = null;


    public static update(newState: State) {
        console.log("j'y suis");

        Canaux.update(newState);
        Row.update(newState);
        Channel.update(newState);

        arr = newState.essaie.rows;
        console.log(arr);
        // console.log(arr);


        //render(Main.displayForm(), document.getElementById('mainInfostyle'))



        //var renderedOutput = newState.essaie.rows.map(item => <div> {item} </div>)

        // return (
        //   <div>
        //     {renderedOutput}
        //   </div>
        // );

        // console.log("j'y suis");
        // //console.log('essaie = ' + newState.essaie[1] + ' avec la longueur ' + newState.essaie.count);
        // //canaux = newState.essaie[0][5]

        // newState.essaie.rows.forEach(function(i) {
        //     console.log(i[0])
        //     document.getElementById("mainInfostyle").append('<div><div style= infostyle >' +
        //         i[0] + 
        //     '</div> <div>' + 
        //         i[5] + 
        //     '</div></div>')
        // })

        // for(var i = 0; i <= newState.essaie.length; i++)
        // {
        //     console.log('je suis en position ' + i + ' avec la valeur ' + newState.essaie[0][i] )
        // }

        if (typeof Main.updateCallback === 'function') {
            Main.updateCallback(newState);
        }
    }

    public componentWillMount() {
        Main.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        Main.updateCallback = null;
    }
}

export default Main;