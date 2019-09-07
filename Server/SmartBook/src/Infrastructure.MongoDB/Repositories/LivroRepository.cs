using Domain.Entities;
using Domain.Repositories;
using Infrastructure.Contexts;
using Infrastructure.Data;

namespace Infrastructure.MongoDB.Repositories
{
    public class LivroRepository : Repository<Livro>, ILivroRepository
    {
        public LivroRepository(IMongoDBContext context) : base(context, "livro")
        {

        }
    }
}
