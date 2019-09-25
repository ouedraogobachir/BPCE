/*
*  Power BI Visual CLI
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
"use strict";

import * as React from "react";
import * as ReactDom from "react-dom";
import "core-js/stable";
import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import DataView = powerbi.DataView;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;


// React
import App from "./components/App";

import { VisualSettings } from "./settings";
import { dataViewObject } from "powerbi-visuals-utils-dataviewutils";
import { Main } from "./components//Main";
import { Osature } from "./components//Osature";

export class Visual implements IVisual {
    private target: HTMLElement;
    private updateCount: number;
    private settings: VisualSettings;
    private textNode: Text;

    constructor(options: VisualConstructorOptions) {
        this.target = options.element;

        if (typeof document !== "undefined") {
            ReactDom.render(React.createElement(App), this.target);
        }
        else {
            console.error('document is undefined');
        }
    }


    public update(options: VisualUpdateOptions) {
        if (options.dataViews && options.dataViews[0]) {
            this.settings = Visual.parseSettings(options && options.dataViews && options.dataViews[0]);
            this.settings.dataPoint
            console.log(options.dataViews[0])
            var tableau = new Array();
            var list = new Array();
            for (var i = 0; i < options.dataViews[0].table.rows.length; i++) {
                var element = [];
                element['canaux'] = options.dataViews[0].table.rows[i][5];
                element["iB"] = options.dataViews[0].table.rows[i][0];
                element['iC'] = options.dataViews[0].table.rows[i][1];
                element['instance'] = options.dataViews[0].table.rows[i][3];
                element['titre'] = options.dataViews[0].table.rows[i][4];
                element['accompDate'] = options.dataViews[0].table.rows[i][6];
                element['periodStart'] = options.dataViews[0].table.rows[i][7];
                element['periodEnd'] = options.dataViews[0].table.rows[i][8];
                element['genDate'] = options.dataViews[0].table.rows[i][9];
                tableau.push(element);
            }
            console.log(tableau);
            //var essayage;
            //console.log(tableau[0].canaux)
            list.push(tableau[0].canaux)

            // if(list != null)
            // {
                // console.log(list)
                // console.log('list non null')
//             for (var o in list) {
//                         essayage = list.filter(function (k) {
//                             return list[o] == k;
//                         })
//                     }
              
//             tableau.forEach(element => { 
//                 if(essayage.length == 0 || essayage.length == null )
//                 {list.push(element.canaux)}
                
//             });
//              console.log('list');
//              console.log(list);


//             var newtableau = new Array();
// list.forEach(m => {
//             newtableau[tableau[0].canaux] = tableau.map(x => tableau[0]);
//             console.log(newtableau);
//             // console.log("aaaa")
//             // console.log(m);
//             // console.log(newtableau[m.toString()])
//             var secondtab = new Array();
            
//             newtableau[m.toString()].forEach(n => {
                
            
//             {
//                 //console.log(newtableau[m.toString()][i].titre)
//                 //var l = newtableau[m.toString()].map(x => x.titre == newtableau[m.toString()][i].titre)
//                 var l = n.map(x => n.titre)
//                console.log(l);
//                 if(l == true)
//                 {
//                     console.log(newtableau[m.toString()][i])
//                     secondtab[m][[m.toString()][i].titre].push(newtableau[m.toString()][i])
//                 }
//             }
//         });
//             console.log(secondtab);
//         });

            // // for (var i = 0; i < tableau.length; i++)
            // // {
            // //     for(var j in tableau)
            // //     {
            // //         console.log('j ' + j)
            // //         if(tableau[i].canaux.toString() == j['canaux'])
            // //         {
            // //             console.log('ok')
            // //             newtableau[j['canaux']].push(tableau[i])
            // //         }
            // //     }
            // //     console.log('newtableauInter ' + newtableau);
            // // }
            // // console.log('newtableau ' + newtableau)
            // var newtableau = new Array();
            // for (var j in tableau) {
            //     var essaie = tableau.filter(function (k) {
            //         return tableau[j].canaux == k.canaux;
            //     })

            //     var element = [];
            //     newtableau[tableau[j].canaux] = essaie;
            //     var name = tableau[j].canaux;

            //     var nameadd = new Array();
            //     for (var o in list) {
            //         var essayage = list.filter(function (k) {
            //             return list[o] == k;
            //         })
            //     }
            //     //console.log('listlength ' + essayage.length)

            //     if (essayage == null) {
            //         list.push(name);
            //     }
            //     // if (essayage != null)
            //     // {
            //     //     console.log(essayage.length);
            //     //     if(essayage.length < 2)
            //     //     {
            //     //     list.push(name);
            //     //     }
            //     // }


            //     //newtableau[''].push(essaie);
            //     //console.log(essaie.length)
            // }
            // console.log(newtableau);
            // // console.log('list ' + list);
            // // console.log(newtableau.length);


            // var tableaubis = new Array();
            // ///console.log(.length)
            // //for (var p = 0; )
            // for (var p = 0; p < list.length; p++) {
            //     var ligne = newtableau[list[p]];



            //     //console.log(ligne);
            //     for (var z in ligne) {

            //         var trouver = tableaubis.find(function(element){
            //             console.log('element ')
            //             console.log(element[ligne])
            //             return element[0] == ligne.titre
            //         })
            //         console.log('ce quil y a')
            //         console.log(tableaubis)
            //         console.log(trouver);
            //         if (trouver == null )
            //         {
            //             console.log('trouver null')
            //             //continue;
                    


            //         // console.log(z)
            //         // console.log(ligne[z])
            //         var match = ligne.filter(function(k) {
            //             // console.log('listz ' + ligne[z].titre)
            //             // console.log('lktitre ' + k.titre)
            //             return ligne[z].titre == k.titre
            //         })

            //         //console.log(match);
            //         var nom = [];
            //         nom[ligne[z].titre] = match;
            //         //console.log('nonono');
            //         //console.log(nom);
            //         tableaubis.push(nom);
            //     }

            //         //console.log(tableaubis);

            //         //tableaubis[list[p]][ligne[z].titre] = match





            //         //     for (var j in newtableau[list[p]][z]) {
            //         //         var essaie2 = newtableau[list[p]][z].filter(function (k) {
            //         //             return newtableau[z][j].titre == k.titre;
            //         //         })

            //         //         //console.log(newtableau[z])
            //         //         if (essaie2 == null)
            //         //         {
            //         //             console.log('je rentre')
            //         //             tableaubis[z] = newtableau[list[p]][z];
            //         //         }

            //         //         var element = [];
            //         //         tableaubis[z] = essaie2;
            //         //         //console.log(name);
            //         //         //tableaubis[z.toString()[newtableau[z][j].titre]] = essaie2;
            //         //         //newtableau[''].push(essaie);
            //         //     }
            //         // }
            //     }
            // }
            // // console.log('tableaubis');
            // // console.log(tableaubis);
            // // var tableaubis = new Array();
            // // for(var j in newtableau)
            // // {
            // //     var essaie = newtableau.filter(function(k){
            // //         return newtableau[j].titre == k.titre;
            // //     })

            // //     var element = [];
            // //     tableaubis[newtableau[j].titre] = essaie;
            // //     //newtableau[''].push(essaie);
            // // }
            //  console.log(tableaubis);
            var longueur = this.countnumberofdays(tableau[0].periodStart)

            var total = this.countnumberofYeardays(tableau[0].periodStart)

            App.update({
                settings: this.settings,
                essaie: options.dataViews[0].table
            });
        }
    }


    private static parseSettings(dataView: DataView): VisualSettings {
        return VisualSettings.parse(dataView) as VisualSettings;
    }

    /**
     * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the
     * objects and properties you want to expose to the users in the property pane.
     *
     */
    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        return VisualSettings.enumerateObjectInstances(this.settings || VisualSettings.getDefault(), options);
    }

    public countnumberofdays(date)
    {
        var startday, firstday;
        startday = new Date(date);
        var day = '01/01/' + startday.getFullYear();
        firstday = new Date(day)
        var res = Math.abs(startday - firstday) / 1000;
        var number = Math.floor(res / 86400);
        return number;
    }

    public countnumberofYeardays(date)
    {
        var startday, firstday, lastday;
        startday = new Date(date);
        var day = '01/01/' + startday.getFullYear();
        var end = '12/31/' + startday.getFullYear();
        firstday = new Date(day);
        lastday = new Date(end);
        var res = Math.abs(lastday - firstday) / 1000;
        var number = Math.floor(res / 86400);
        return number;
    }
}