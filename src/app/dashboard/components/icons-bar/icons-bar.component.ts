import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-icons-bar',
  templateUrl: './icons-bar.component.html',
  styleUrls: ['./icons-bar.component.scss']})

export class IconsBarComponent implements OnInit {

  @Input() data: any;

  icons : any[] = [
    {
      groupName: 'vehicles',
      list: [
        'airplane-front-view',
        'air-station',
        'balloon',
        'boat',
        'cargo-ship',
        'car',
        'catamaran',
        'convertible',
        'drone',
        'fighter-plane',
        'fire-truck',
        'horseback-riding',
        'motorcycle',
        'railcar',
        'railroad-train',
        'rocket-boot',
        'sailing-boat',
        'segway',
        'shuttle',
        'space-shuttle',
        'steam-engine',
        'suv',
        'tour-bus',
        'tow-truck',
        'transportation',
        'trolleybus',
        'water-transportation'
      ]
    }, {
      groupName: 'vehicles',
      list: [
        'airplane-front-view',
        'air-station',
        'balloon',
        'boat',
        'cargo-ship',
        'car',
        'catamaran',
        'convertible',
        'drone',
        'fighter-plane',
        'fire-truck',
        'horseback-riding',
        'motorcycle',
        'railcar',
        'railroad-train',
        'rocket-boot',
        'sailing-boat',
        'segway',
        'shuttle',
        'space-shuttle',
        'steam-engine',
        'suv',
        'tour-bus',
        'tow-truck',
        'transportation',
        'trolleybus',
        'water-transportation'
      ]
    }
  ];

  iconsToDisplay : any[] = this.icons;
  dashRegex : RegExp = new RegExp(/-/g);
  showIconsBar : Boolean = false;

  constructor() {
  }

  filterIcons(str) {
    this.iconsToDisplay = this
      .icons
      .map(group => {
        let {groupName, list} = group;
        return {
          groupName,
          list: list.filter(icon => {
            return icon.includes(str);
          })
        };
      })
  }

  setIcon(icon) {
    setTimeout(() => {
      this.data.icon = icon;
      this.data.show = false;
    }, 0)
  }

  toggleIconsBar(show) {
    setTimeout(() => {
      this.data.show = show || Boolean(document.activeElement.closest('.icons-bar'));
    }, 0)
  }

  ngOnInit() {}

}