//importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from './componentes/home/home.component';
import { PaginaComponent } from './componentes/pagina/pagina.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'pagina', component: PaginaComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'tabla', component: TablaComponent},
    {path: 'calculadora', component: CalculadoraComponent}

];

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);