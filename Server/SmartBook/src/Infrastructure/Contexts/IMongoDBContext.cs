using MongoDB.Driver;
using System;

namespace Infrastructure.Contexts
{
    public interface IMongoDBContext : IDisposable
    {
        IMongoCollection<TCollection> GetCollection<TCollection>(string name);
    }
}
