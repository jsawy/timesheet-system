import { Injectable } from '@angular/core';

@Injectable()
export class TraceService {

  traceStack: string[] = [];

  add(trace: string) {
    if (this.traceStack.length > 200) {
      this.traceStack.shift();
    }
    this.traceStack.push(trace);
  }

  constructor() { }

}
