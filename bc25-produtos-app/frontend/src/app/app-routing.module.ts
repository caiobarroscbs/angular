import { NgModule } from "@angular/core";

// iniciar o roteamento 
// importar o módulo de roteamento 
import { RouterModule, Routes } from "@angular/router"; 
import { ListarProdutosComponent } from "./pages/listar-produtos/listar-produtos.component";

// rota -> componente
/**
 * rotas é responsável por armazenar as rotas que 
 * existem dentro do site
 * 
 * cada item do array de rotas é uma nova rota que foi declarada
 */

const rotas: Routes = [] = [
    {
        // http://localhost:4200/produtos
        path: '', /* Caminhos para acessar a rota -/  O path com uma string vazia = rota principal  */
        redirectTo:'produtos', /* redireciona para a pagina produtos */
        pathMatch: 'full'
    }, // cada objeto é uma rota
    {
        path:'produtos',
        component: ListarProdutosComponent
    }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rotas) // módulo que inicia o roteamento 
  ],
  providers: [],
  exports: [
    RouterModule // exportando o módulo após as rotas terem sido carregadas dentro dele
  ]
})
export class AppRoutingModule {}