
// Exporting so other files can use it
export interface Issue {

  // Unique ID for each issue (from database)
  id: number;

  // Short title of the issue
  title: string;

  // Full description of the issue
  description: string;

  // Category like Electricity, Plumbing, Furniture
  category: string;

  // Priority level: Low, Medium, High
  priority: string;

  // Status of the issue: Open, In Progress, Resolved
  status: string;

  // Date when issue was created
  createdAt: Date;

}
