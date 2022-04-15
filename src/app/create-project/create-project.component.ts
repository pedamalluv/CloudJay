import { Component } from '@angular/core';

@Component({
  selector: 'app-cj-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
  selectedTab: any = 2;
  selectedFile: any = -1;
  isSelect: boolean = false
  folders: any = [
    {id: 0, name: 'XYZ', type: 'folder', isSelected: false},
    {id: 1, name: 'ABC', type: 'folder', isSelected: false},
    {id: 2, name: 'PDF File', type: 'filetype-pdf', isSelected: false},
    {id: 3, name: 'jpg File', type: 'filetype-jpg', isSelected: false},
    {id: 4, name: 'mp4 File', type: 'filetype-mp4', isSelected: false},
    {id: 5, name: 'ppt File', type: 'filetype-ppt', isSelected: false},
    {id: 6, name: 'folder', type: 'folder-fill', isSelected: false},
    {id: 7, name: 'xml File', type: 'filetype-xml', isSelected: false},
    {id: 8, name: 'xls File', type: 'filetype-xls', isSelected: false},
  ];
  subFolders: any = [
    {id: 0, name: 'ABC', type: 'filetype-pdf'},
    {id: 1, name: 'PDF File', type: 'filetype-pdf', isSelected: false},
    {id: 2, name: 'jpg File', type: 'filetype-jpg', isSelected: false},
    {id: 3, name: 'mp4 File', type: 'filetype-mp4', isSelected: false},
    {id: 4, name: 'xml File', type: 'filetype-xml', isSelected: false},
    {id: 5, name: 'xls File', type: 'filetype-xls', isSelected: false},
  ];
  selectFolder(selected: any) {
    if(this.isSelect) {
      this.folders[selected.id]["isSelected"] = !selected.isSelected;
    }
    if(selected && (selected.type === "folder" || selected.type === "folder-fill")) {
      this.selectedFile = selected;
    } else {
      this.selectedFile = -1;
    }
  }
}
