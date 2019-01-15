import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  key: string;
  value: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {key: 'Contract No', value: '7711883'},
  {key: 'Contract Type', value: 'Term Plan'},
  {key: 'Contract Start', value: 'Dec 24, 2018'},
  {key: 'Contract Status', value: 'Active'},

];

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  displayedColumns: string[] = ['key', 'value'];
  dataSource = ELEMENT_DATA;
  list = [
    [
      {key: 'Contract No', value: '656565656'},
      {key: 'Contract Type', value: 'Term Plan'},
      {key: 'Contract Start', value: 'Dec 24, 2018'},
      {key: 'Contract Status', value: 'Active'},
    
    ],
    [
      {key: 'Contract No', value: '88888'},
      {key: 'Contract Type', value: 'Term Plan'},
      {key: 'Contract Start', value: 'Dec 24, 2018'},
      {key: 'Contract Status', value: 'Active'},
    
    ],
    [
      {key: 'Contract No', value: '12345'},
      {key: 'Contract Type', value: 'Term Plan'},
      {key: 'Contract Start', value: 'Dec 24, 2018'},
      {key: 'Contract Status', value: 'Active'},
    
    ],
    [
      {key: 'Contract No', value: '656565656'},
      {key: 'Contract Type', value: 'Term Plan'},
      {key: 'Contract Start', value: 'Dec 24, 2018'},
      {key: 'Contract Status', value: 'Active'},
    
    ],
    [
      {key: 'Contract No', value: '88888'},
      {key: 'Contract Type', value: 'Term Plan'},
      {key: 'Contract Start', value: 'Dec 24, 2018'},
      {key: 'Contract Status', value: 'Active'},
    
    ],
    [
      {key: 'Contract No', value: '12345'},
      {key: 'Contract Type', value: 'Term Plan'},
      {key: 'Contract Start', value: 'Dec 24, 2018'},
      {key: 'Contract Status', value: 'Active'},
    
    ],
    [
      {key: 'Contract No', value: '12345'},
      {key: 'Contract Type', value: 'Term Plan'},
      {key: 'Contract Start', value: 'Dec 24, 2018'},
      {key: 'Contract Status', value: 'Active'},
    
    ],
    [
      {key: 'Contract No', value: '12345'},
      {key: 'Contract Type', value: 'Term Plan'},
      {key: 'Contract Start', value: 'Dec 24, 2018'},
      {key: 'Contract Status', value: 'Active'},
    
    ]
  ];
  constructor() { }

  ngOnInit() {
  }

}
