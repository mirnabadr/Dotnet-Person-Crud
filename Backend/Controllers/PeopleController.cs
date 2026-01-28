using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PeopleController : ControllerBase
{
    // POST / api / people {body}
    // GET / api / people
    // GET / api / people / {id}
    // PUT / api / people / {body}
    // DELETE / api / people / {id}
    //
    // 
    private readonly AppDbContext _context;

    public PeopleController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost] // Post / api / people 
    public async Task<IActionResult> AddPerson(Person person)
    {
       try 
       {
        _context.People.Add(person);
        await _context.SaveChangesAsync();
        return CreatedAtRoute("GetPerson", new { id = person.Id }, person); // 201 created status code + the location of the resource (http://localhost:3000/api/people/{id}) + the person object in the body of the response
       }
       catch (Exception ex)
       {
        return StatusCode(StatusCodes.Status500InternalServerError, ex.Message); // 500 internal server error status code + the error message in the body of the response
       }
    }

    [HttpGet] // Get / api / people 
    public async Task<IActionResult> GetPeople()
    {
       try 
       {
         var people = await _context.People.ToListAsync();
         return Ok(people); // 200 ok status code + the list of people in the body of the response
       }
       catch (Exception ex)  
       {
        return StatusCode(StatusCodes.Status500InternalServerError, ex.Message); // 500 internal server error status code + the error message in the body of the response
       }
    }

    [HttpGet("{id}" , Name = "GetPerson")] // Get / api / people / {id}
    public async Task<IActionResult> GetPerson(int id)
    {
       try 
       {
         var person = await _context.People.FindAsync(id);

         if (person == null)
         {
            return NotFound(); // 404 not found status code
         }


         return Ok(person);    // 201  created status code + person object in the body of the response
       }
       catch (Exception ex)  
       {
        return StatusCode(StatusCodes.Status500InternalServerError, ex.Message); // 500 internal server error status code + the error message in the body of the response
       }
    }


     [HttpPut("{id}")] // Put / api / people / {id}
     public async Task<IActionResult> UpdatePerson(int id, [FromBody] Person person)
    {
       try 
       {
        if ( id != person.Id)
        {
            return BadRequest("Id in url and body mismatch "); // 400 + message in the body of the response
        }

        if (!await _context.People.AnyAsync(p => p.Id == id))
        {
            return NotFound(); // 404 not found status code
        }

        _context.Entry(person).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return NoContent(); // 204 no content
       }
       catch (Exception ex)
       {
        return StatusCode(StatusCodes.Status500InternalServerError, ex.Message); // 500 internal server error status code + the error message in the body of the response
       }
    }


     [HttpDelete("{id}")] // Delete / api / people / {id}
     public async Task<IActionResult> DeletePerson(int id)
    {
       try 
       {
        
        var person = await _context.People.FindAsync(id);

         if (person == null)
         {
            return NotFound(); // 404 not found status code
         }
        _context.People.Remove(person); 
        await _context.SaveChangesAsync(); 

        return NoContent(); // 204 no content
       }
       catch (Exception ex)
       {
        return StatusCode(StatusCodes.Status500InternalServerError, ex.Message); // 500 internal server error status code + the error message in the body of the response
       }
    }

   // server application : http://localhost:3000
   // client application : http://localhost:5173 => CORS policy
   // Course request means that the client is requesting a resource from the server.
   // Course response means that the server is responding to the client's request.
   

    
}