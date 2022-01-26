import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit
{
    chart:any;

    constructor() { }

    ngOnInit(): void
    {
      this.chart = document.getElementById('my_first_chart');
      Chart.register(...registerables);
      this.loadChart();
    }

    loadChart(): void
    {
      new Chart(this.chart,{
                                  type:'line',
                                  data: {
                                          labels:['A','B','C','D','E','F','G','H','I'],
                                          datasets: [
                                                      {
                                                        data:[30,20,10,60,70,80,90,50,40],
                                                        label: "Series 1",
                                                        backgroundColor: '#007bff',
                                                        borderWidth: 5,
                                                        borderColor: '#007bff',
                                                        tension:0.2,
                                                      },
                                                    ],
                                        },

                                  options: {
                                            responsive:true,
                                            maintainAspectRatio:true,
                                            scales: {
                                                      y: {
                                                          grid:
                                                              {
                                                                borderDash:[1, 2],
                                                                drawBorder: true,
                                                              },
                                                          beginAtZero: true
                                                          },

                                                      x: {
                                                          grid:
                                                              {
                                                                drawBorder: true,
                                                              },
                                                          },
                                                    },
                                            },
                                  }
               );
    }
}
