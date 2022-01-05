import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.isLoading$$.asObservable();

  showSpinner(): void {
    this.isLoading$$.next(true);
  }

  hideSpinner(): void {
    this.isLoading$$.next(false);
  }
}
