import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadMoreButtonComponent {

  constructor() {
  }

  public loadMoreButtonClicked(): void {
    console.log("Load More Btn was clicked")
  }
}
