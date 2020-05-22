import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {Skills} from '../resume';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnChanges {
  @Input()
  skills: Skills[];

  treeControl: NestedTreeControl<any>;
  dataSource: MatTreeNestedDataSource<any>;
  hasChild = (_: number, node: Skills) => !!node.children && node.children.length > 0;

  constructor() {
  }


  ngOnInit(): void {

    this.treeControl = new NestedTreeControl<Skills>(node => node.children);
    this.dataSource = new MatTreeNestedDataSource<Skills>();
    this.dataSource.data = this.skills;
  }

  ngOnChanges() {

    this.dataSource.data = this.skills;
  }
}
