export const kpiData = [
  {
    title: "Total Revenue",
    value: "$48,295",
    change: "+12.5%",
    trend: "up" as const,
    description: "vs last month",
  },
  {
    title: "Active Users",
    value: "12,847",
    change: "+8.2%",
    trend: "up" as const,
    description: "vs last month",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "-0.4%",
    trend: "down" as const,
    description: "vs last month",
  },
  {
    title: "Active Projects",
    value: "284",
    change: "+5.1%",
    trend: "up" as const,
    description: "vs last month",
  },
];

export const chartData = [
  { month: "Jan", revenue: 32000, users: 4200 },
  { month: "Feb", revenue: 28000, users: 3800 },
  { month: "Mar", revenue: 35000, users: 5100 },
  { month: "Apr", revenue: 40000, users: 6200 },
  { month: "May", revenue: 38000, users: 5800 },
  { month: "Jun", revenue: 45000, users: 7200 },
  { month: "Jul", revenue: 42000, users: 6800 },
  { month: "Aug", revenue: 48000, users: 7900 },
];

export const projectsData = [
  {
    id: 1,
    name: "Website Redesign",
    owner: "Alice Chen",
    status: "In Progress",
    progress: 68,
    dueDate: "2024-02-15",
  },
  {
    id: 2,
    name: "Mobile App v2",
    owner: "Bob Kim",
    status: "Review",
    progress: 92,
    dueDate: "2024-01-30",
  },
  {
    id: 3,
    name: "API Integration",
    owner: "Carol White",
    status: "Planning",
    progress: 15,
    dueDate: "2024-03-10",
  },
  {
    id: 4,
    name: "Data Pipeline",
    owner: "David Lee",
    status: "In Progress",
    progress: 45,
    dueDate: "2024-02-28",
  },
  {
    id: 5,
    name: "Security Audit",
    owner: "Eva Martinez",
    status: "Completed",
    progress: 100,
    dueDate: "2024-01-20",
  },
  {
    id: 6,
    name: "CMS Migration",
    owner: "Frank Zhang",
    status: "In Progress",
    progress: 33,
    dueDate: "2024-03-25",
  },
];

export const notificationsData = [
  {
    id: 1,
    title: "New team member",
    message: "Sarah joined the Design team",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    title: "Project deadline",
    message: "Mobile App v2 is due in 3 days",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    title: "Budget alert",
    message: "Q1 budget is 85% utilized",
    time: "3 hours ago",
    read: false,
  },
  {
    id: 4,
    title: "Report ready",
    message: "Monthly analytics report is ready",
    time: "Yesterday",
    read: true,
  },
];

export const activityData = [
  {
    id: 1,
    user: "Alice Chen",
    action: "Updated project status",
    project: "Website Redesign",
    time: "10 min ago",
  },
  {
    id: 2,
    user: "Bob Kim",
    action: "Submitted for review",
    project: "Mobile App v2",
    time: "45 min ago",
  },
  {
    id: 3,
    user: "Carol White",
    action: "Added new task",
    project: "API Integration",
    time: "2 hours ago",
  },
  {
    id: 4,
    user: "David Lee",
    action: "Completed milestone",
    project: "Data Pipeline",
    time: "4 hours ago",
  },
  {
    id: 5,
    user: "Eva Martinez",
    action: "Closed project",
    project: "Security Audit",
    time: "Yesterday",
  },
];
