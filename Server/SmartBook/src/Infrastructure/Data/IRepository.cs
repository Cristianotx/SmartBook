using System;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public interface IRepository<TCadastro> : IDisposable where TCadastro : Cadastro
    {
        Task AdicionarAsync(TCadastro cadastro);
        Task<TCadastro> ObterPorAsync(Guid aggregateId);
    }
}
