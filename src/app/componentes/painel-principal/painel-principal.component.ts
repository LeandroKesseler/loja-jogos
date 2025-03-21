import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-painel-principal',
  templateUrl: './painel-principal.component.html',
  styleUrls: ['./painel-principal.component.css']
})
export class PainelPrincipalComponent implements OnInit {
  produtos: any[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.produtoService.obterProdutos().subscribe({
      next: (dados: any[]) => {
        this.produtos = dados;
      },
      error: (erro: any) => {
        console.error('Erro ao obter produtos:', erro);
      }
    });
  }

  excluirProduto(id: number): void {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.produtoService.deletarProduto(id).subscribe({
        next: () => {
          alert('Produto excluído com sucesso!');
          this.listarProdutos();
        },
        error: (erro: any) => {
          console.error('Erro ao excluir produto:', erro);
        }
      });
    }
  }

  editarProduto(id: number): void {
    this.router.navigate(['/cadastro-produto', id]);
  }
}
