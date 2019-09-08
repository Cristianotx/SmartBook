using Infrastructure.Contexts;
using MongoDB.Driver;
using System;

namespace Infrastructure.MongoDB.Context
{
    public class MongoContext : IMongoDBContext
    {
        protected IMongoDatabase DataBase { get; }

        public MongoContext(IMongoClient client)
        {
            DataBase = client.GetDatabase(client?.Settings?.Credential?.Source ?? "local");
        }

        public IMongoCollection<TCollection> GetCollection<TCollection>(string name)
        {
            return DataBase.GetCollection<TCollection>(name);
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
