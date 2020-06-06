import { Component, Input, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
require('highcharts/highcharts-more')(Highcharts);

@Component({
  selector: 'app-player-skills',
  templateUrl: './player-skills.component.html',
  styleUrls: ['./player-skills.component.scss']
})
export class PlayerSkillsComponent implements AfterViewInit {
  @Input() playerData: any;
  chartOptions: any;
  loaded = false;

  constructor() { }

  ngAfterViewInit() {
    if (this.playerData) {
      this.chartOptions = {   
        chart: {
          polar: true,
          backgroundColor: 'transparent',
        },
    
        title: {
            text: 'Skills',
            x: -80
        },
    
        pane: {
            size: '80%'
        },
    
        xAxis: {
            categories: [
              this.playerData.Position === 'GK' ? 'Stop' : 'Defensive',
              'Physic',
              'Pace',
              this.playerData.Position === 'GK' ? 'Mental' : 'Vision',
              this.playerData.Position === 'GK' ? 'Communication' : 'Attacking',
              this.playerData.Position === 'GK' ? 'Excentricity' : 'Technique',
              'Aero',
              this.playerData.Position === 'GK' ? 'Distribution' : 'Mental'
            ],
            tickmarkPlacement: 'off',
            lineWidth: 0
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 20,
            max: 100
        },
        legend: {
          enabled: false
        },
    
        series: [{
            name: 'Skills',
            data: [
              this.playerData.Position === 'GK' ? this.playerData.GKHandling : this.playerData.Marking,
              this.playerData.Position === 'GK' ? this.playerData.Strength : this.playerData.Stamina,
              this.playerData.Position === 'GK' ? this.playerData.Reactions : this.playerData.SprintSpeed,
              this.playerData.Position === 'GK' ? this.playerData.GKPositioning : this.playerData.Vision,
              this.playerData.Position === 'GK' ? this.playerData.Composure : this.playerData.Finishing,
              this.playerData.Position === 'GK' ? this.playerData.GKReflexes : this.playerData.Dribbling,
              this.playerData.Position === 'GK' ? this.playerData.Jumping : this.playerData.HeadingAccuracy,
              this.playerData.Position === 'GK' ? this.playerData.GKKicking : this.playerData.Composure,
            ],
            pointPlacement: 'off'
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    // legend: {
                    //     align: 'center',
                    //     verticalAlign: 'bottom',
                    //     layout: 'horizontal'
                    // },
                    pane: {
                        size: '80%'
                    }
                }
            }]
        }
      };
      this.loaded = true;
    }
  }

  highcharts = Highcharts;

}
