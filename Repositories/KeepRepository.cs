using System.Collections.Generic;
using System.Data;
using Dapper;
using keepr.Models;
using keepr.Repositories;
using MySql.Data.MySqlClient;

namespace keepr.Repository
{
  public class KeepRepository : DbContext
  {
    public KeepRepository(IDbConnection db) : base(db)
    {
    }

    public IEnumerable<Keep> GetAll()
    {
      return _db.Query<Keep>("SELECT * FROM keeps;");
    }

    public IEnumerable<Keep> GetById(string id, string value)
    {
      if (value == "id")
      {
        var i = _db.Execute(@"
                UPDATE keeps SET
                  views = views + 1
                WHERE id = @id;
            ", new { id });
        if (i < 1)
        {
          return null;
        }
      }
      return _db.Query<Keep>("SELECT * FROM keeps WHERE " + value + " = @id", new { id });
    }

    public Keep CreateKeep(Keep newKeep)
    {
      int id = _db.ExecuteScalar<int>(@"
                INSERT INTO keeps (description, img, author, authorId, vaultId, views, public)
                VALUES (@Description, @Img, @Author, @AuthorId, @VaultId, @Views, @Public);
                SELECT LAST_INSERT_ID();
            ", newKeep);
      newKeep.Id = id;
      return newKeep;
    }

    public Keep EditKeep(int id, Keep editKeep, string user)
    {
      editKeep.Id = id;
      editKeep.AuthorId = user;
      var i = _db.Execute(@"
                UPDATE keeps SET
                  description = @Description,
                  img = @Img,
                  public = @Public
                WHERE id = @Id
                AND authorId = @AuthorId;
            ", editKeep);
      if (i > 0)
      {
        return editKeep;
      }
      return null;
    }

    public bool DeleteKeep(int id, string authorId)
    {
      var i = _db.Execute(@"
      DELETE FROM keeps
      WHERE id = @id
      AND authorId = @authorId
      LIMIT 1;
      ", new { id, authorId });
      if (i > 0)
      {
        return true;
      }
      return false;
    }

    public IEnumerable<Tag> AddTags(List<Tag> tags, string userId, int keepId)
    {
      Keep keep = _db.QueryFirstOrDefault<Keep>("SELECT * FROM keeps WHERE id = @keepId;", new { keepId });
      if (keep.AuthorId == userId)
      {
        tags.ForEach(tag =>
        {
          tag.KeepId = keep.Id;
          tag.TagName = tag.TagName.Replace(' ', '+');
          tag.AuthorId = userId;
        });
        try
        {
          int num = _db.Execute(@"
                INSERT INTO tags (tag, authorId, keepId)
                VALUES (@TagName, @AuthorId, @KeepId);
            ", tags);
          if (num > 0)
          {
            return tags;
          }
        }
        catch (MySqlException e)
        {
          System.Console.WriteLine("ERROR: " + e.Message);
          return null;
        }
      }
      return null;
    }

    public bool RemoveTag(int id)
    {
      var i = _db.Execute(@"
      DELETE FROM tags
      WHERE id = @id
      LIMIT 1;
      ", new { id });
      return i > 0;
    }

    public IEnumerable<Keep> GetByTag(string tag)
    {
      var check = _db.Query<Keep>(@"
      SELECT * FROM tags
      INNER JOIN keeps ON keeps.id = tags.keepId 
      WHERE (tag = @tag)
      AND keeps.public = true;
      ", new{tag});
      return check;
    }

  }
}