import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private readonly URL_BASE;

  constructor(private http: HttpClient) {
    this.URL_BASE = `${environment.url_api}v1/livro`;
  }

  obterTodos = (pagina = 1, itensPorPagina = 6) =>
    this.http.get<any[]>(
      `${this.URL_BASE}?pagina=${pagina}&itensPorPagina=${itensPorPagina}`
    );

  obterNovos = () =>
    this.http.get<any[]>(`${this.URL_BASE}/novos?itensPorPagina=6`);

  obterPorPesquisa = (pagina = 1, itensPorPagina = 6, texto: string) =>
    this.http.get<any[]>(
      `${this.URL_BASE}?pagina=${pagina}&itensPorPagina=${itensPorPagina}&texto=${texto}`
    );

  obterPorId = (id: string) => this.http.get(`${this.URL_BASE}/${id}`);

  obterPorCategoriaId = (categoriaId: number) =>
    this.http.get<any[]>(`${this.URL_BASE}/categoria/${categoriaId}`);

  cadastrar = (model: any) => this.http.post(`${this.URL_BASE}`, model);

  editar = (id: string, model: any) =>
    this.http.put(`${this.URL_BASE}/${id}`, model);

  excluir = (id: string) => this.http.delete(`${this.URL_BASE}/${id}`);
}
