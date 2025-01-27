import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'course', component: CourseComponent },
  { path: '', redirectTo: '/student', pathMatch: 'full' } // Redirecciona a component1 por defecto
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
