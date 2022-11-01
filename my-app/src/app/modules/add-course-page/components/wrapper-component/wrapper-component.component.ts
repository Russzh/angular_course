import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-wrapper-component',
  templateUrl: './wrapper-component.component.html',
  styleUrls: ['./wrapper-component.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapperComponent {
  @Input() public labelText: string = '';
  @Input() public specificNameContainer: string = '';
}
