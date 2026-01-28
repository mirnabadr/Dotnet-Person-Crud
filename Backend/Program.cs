using Backend.Models;
using Microsoft.EntityFrameworkCore;

var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);
 
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});
// Add services to the container.
builder.Services.AddControllers();

string connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
    ?? throw new ArgumentNullException("ConnectionStrings:DefaultConnection is null");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(connectionString)); 


var app = builder.Build();
app.UseCors(MyAllowSpecificOrigins);

// middleware pipeline
app.MapControllers();


app.Run();
