import { inject, Injectable } from '@angular/core';
import { RepoRestService } from '../adapter/repo-rest.service';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  private readonly repoRestService: RepoRestService = inject(RepoRestService);

  public getAll() {
    return this.repoRestService.getAll();
  }
}
