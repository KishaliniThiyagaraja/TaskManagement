using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;
using TaskManagment.Model;

namespace TaskManagment.Data
{
    public class Taskcontext : DbContext
    {

        public Taskcontext(DbContextOptions<Taskcontext> options) : base(options)
        {

        }
        public DbSet<TaskItem> Task { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
