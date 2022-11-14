using System;
using System.Collections.Generic;

namespace TodoAPI.Model;

public partial class Todo
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public bool? IsCompleted { get; set; }
}
