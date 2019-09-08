using Domain.Entities;
using Domain.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using WebApi.Dtos;

namespace WebApi.Controllers
{
    [Route("v1/livro")]
    public class LivroController : Controller
    {
        private readonly ILivroRepository _repository;

        public LivroController(ILivroRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public async Task<IActionResult> CriarAsync([FromBody]LivroDto dto)
        {
            var aggregateId = Guid.NewGuid();

            await _repository.AdicionarAsync(new Livro {AggregateId = aggregateId, Titulo = dto.Titulo });

            return Ok(aggregateId);
        }

        [HttpPut("{aggregateId:guid}/alterar")]
        public async Task<IActionResult> AlterarAsync(Guid aggregateId, [FromBody]LivroDto dto)
        {
            await _repository.AdicionarAsync(new Livro { AggregateId = aggregateId, Titulo = dto.Titulo });

            return Ok(aggregateId);
        }
    }
}
