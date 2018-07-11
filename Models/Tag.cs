using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
  public class Tag
  {
    public int Id { get; set; }
    [Required]
    public string TagName { get; set; }
    public string AuthorId { get; set; }
    public int KeepId { get; set; }
  }
}