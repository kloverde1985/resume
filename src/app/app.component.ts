import {Component, OnInit, OnDestroy} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {DataService} from './data.service';
import {Education, Experience, Resume, Skills} from './resume';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'KevinProject';

  destroy$: Subject<boolean> = new Subject<boolean>();
  resume = {} as Resume ;
  skills: Skills[];
  education: Education[];
  experience: Experience[];


  constructor(private dataService: DataService) {
    this.dataService.getResume('/resumes?id=1').pipe(takeUntil(this.destroy$))
      .subscribe((res: Resume) => {
        this.resume = res;
      });
  }

  ngOnInit(): void {


  }

  ngOnDestroy(): void {

  }
}
