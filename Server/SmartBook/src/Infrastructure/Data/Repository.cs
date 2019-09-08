using Infrastructure.Contexts;
using MongoDB.Driver;
using System;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public abstract class Repository<TCadastro> : IRepository<TCadastro> where TCadastro : Cadastro
    {
        protected readonly IMongoDBContext Context;
        protected readonly IMongoCollection<TCadastro> DbSet;

        public Repository(IMongoDBContext context, string collection)
        {
            Context = context;
            DbSet = context.GetCollection<TCadastro>(collection);
        }

        public async Task AdicionarAsync(TCadastro cadastro)
        {
            var result = await ObterPorAsync(cadastro.AggregateId);

            if (result == null)
            {
                await DbSet.InsertOneAsync(cadastro);
            }
            else
            {
                await DbSet.ReplaceOneAsync(p => p.AggregateId == cadastro.AggregateId, cadastro, new UpdateOptions
                {
                    IsUpsert = true
                });
            }
        }
               
        public async Task<TCadastro> ObterPorAsync(Guid aggregateId)
        {
            var filter = new FilterDefinitionBuilder<TCadastro>().Eq(e => e.AggregateId, aggregateId);
            var data = await DbSet.FindAsync(filter);

            return await data.SingleOrDefaultAsync();
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
