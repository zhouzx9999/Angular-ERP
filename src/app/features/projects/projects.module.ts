import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { KanbanComponent } from './kanban/kanban.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProjectsComponent, KanbanComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }