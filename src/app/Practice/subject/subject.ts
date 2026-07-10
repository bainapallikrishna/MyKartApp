import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.html',
  styleUrl: './subject.css',
})
export class SubjectConcept {
  subject = new Subject<string>();
  ngOnInit() {
    this.subject.subscribe((value) => {
      console.log('Received value:', value);
    });
  
    // Emit a value to the subject
    this.subject.next("Hello, Subject!");
  } 

}
