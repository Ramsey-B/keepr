using System.Collections.Generic;
using keepr.Models;
using keepr.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
  [Route("api/[controller]")]
  public class KeepController : Controller
  {
    private readonly KeepRepository _db;
    public KeepController(KeepRepository repo)
    {
      _db = repo;
    }

    [HttpGet]
    public IEnumerable<Keep> GetAll()
    {
      return _db.GetAll();
    }

    [HttpGet("{id}")]
    public IEnumerable<Keep> GetById(string id)
    {
      return _db.GetById(id, "id");
    }

    [HttpGet("vault/{id}")]
    [Authorize]
    public IEnumerable<Keep> GetByVaultId(string id)
    {
      return _db.GetById(id, "vaultId");
    }

    [HttpGet("user/{id}")]
    [Authorize]
    public IEnumerable<Keep> GetByAuthorId(string id)
    {
      return _db.GetById(id, "authorId");
    }

    [HttpPost("{id}")]
    [Authorize]
    public Keep CreateKeep(int id, [FromBody]Keep newKeep)
    {
      newKeep.AuthorId = HttpContext.User.Identity.Name;
      newKeep.VaultId = id;
      if (ModelState.IsValid)
      {
        return _db.CreateKeep(newKeep);
      }
      return null;
    }

    [HttpPost("add/{id}")]
    [Authorize]
    public Keep AddKeep(int id, [FromBody]Keep addKeep)
    {
      if(ModelState.IsValid)
      {
        addKeep.VaultId = id;
        return _db.CreateKeep(addKeep);
      }
      return null;
    }

    [HttpPut("{id}")]
    [Authorize]
    public Keep EditKeep(int id, [FromBody]Keep editKeep)
    {
      if (ModelState.IsValid)
      {
        var user = HttpContext.User.Identity.Name;
        return _db.EditKeep(id, editKeep, user);
      }
      return null;
    }

    [HttpDelete("{id}")]
    [Authorize]
    public string DeleteKeep(int id) 
    {
      var user = HttpContext.User.Identity.Name;
      bool delete = _db.DeleteKeep(id, user);
      if(delete) {
        return "Successfully Deleted!";
      }
      return "An Error Occurred!";
    }

    [HttpPost("tag/{id}")]
    [Authorize]
    public IEnumerable<Tag> AddTags([FromBody]List<Tag> tags, int id)
    {
      var user = HttpContext.User.Identity.Name;
      if (ModelState.IsValid)
      {
        return _db.AddTags(tags, user, id);
      }
      return null;
    }

    [HttpDelete("{id}")]
    [Authorize]
    public string RemoveTag(int id)
    {
      bool result = _db.RemoveTag(id);
      if (result)
      {
        return "Tag Successfully Removed!";
      }
      return "An Error Occurred! Try Again!";
    }

    [HttpGet("tags/{name}")]
    public IEnumerable<Keep> GetByTag(string name)
    {
      return _db.GetByTag(name);
    }

  }
}