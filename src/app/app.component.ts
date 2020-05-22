import {Component, OnInit, OnDestroy} from '@angular/core';
import {DataService} from './data.service';
import {Resume} from './resume';
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
  resume: Resume;

  constructor(private dataService: DataService) {


  }

  ngOnInit(): void {

    this.dataService.getResume('/resumes').pipe(takeUntil(this.destroy$))
      .subscribe((res: Resume) => {
        this.resume = res;
        console.log(this.resume);
      });
  }

  ngOnDestroy(): void {

  }
}
