using Infrastructure.Data;
using Infrastructure.MongoDB.Context;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Driver;
using System.Linq;
using System.Reflection;

namespace Infrastructure.MongoDB.Data
{
    public static class ContextConfiguration
    {
        public static void MongoConfigure(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("MongoUrl");
            var url = new MongoUrlBuilder(connectionString) { GuidRepresentation = GuidRepresentation.Standard };
            services.AddSingleton<IMongoClient>(client => new MongoClient(url.ToMongoUrl()));

            var pack = new ConventionPack
            {
                new CamelCaseElementNameConvention(),
                new LookupIdGeneratorConvention(),
                new IgnoreExtraElementsConvention(true)
            };

            ConventionRegistry.Register("camelCase", pack, t => true);
             
            foreach (var repository in Assembly.GetAssembly(typeof(MongoContext)).GetTypes().Where(t => t.Name.EndsWith("Repository")).ToDictionary(i => i.GetInterfaces()[2], t => t))
            {
                services.AddTransient(repository.Key, repository.Value);
            }
        }
    }
}
