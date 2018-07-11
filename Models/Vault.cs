using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
  public class Vault
  {
    public int Id { get; set; }
    [Required]
    public string Title { get; set; }
    public string AuthorId { get; set; }

  }
}