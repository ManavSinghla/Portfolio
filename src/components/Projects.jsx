const Projects = () => {
  const projects = [
    {
      title: "InsightFlow - Productivity Analysis",
      date: "Dec 2025",
      description: "Developed a full-stack MERN application for time and productivity analysis with JWT-based authentication, protected routes, and secure user-specific data handling.",
      features: [
        "CRUD functionality for tasks",
        "Daily and weekly analytics",
        "MongoDB aggregation pipelines",
        "Responsive charts (Pie, Bar, Line)"
      ],
      tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/ManavSinghla/Time-and-productivity-analysis",
      icon: "📊"
    },
    {
      title: "RouteMate - Ride Scheduling System",
      date: "Sep 2025",
      description: "Simulated a ride-sharing system that efficiently assigns the nearest available driver to users using shortest-path routing.",
      features: [
        "OOP principles applied",
        "BFS for shortest-distance computation",
        "PriorityQueue for VIP and time-based prioritization"
      ],
      tags: ["Java", "OOP", "Collections", "BFS", "PriorityQueue"],
      github: "https://github.com/ManavSinghla/Ride-SharingTaxi-Booking-App-Simulation",
      icon: "🚗"
    },
    {
      title: "Job Portal Platform",
      date: "2025",
      description: "A comprehensive platform connecting job seekers with employers, featuring job listings, applications, and user profiles.",
      features: [
        "Job listings and filtering",
        "User authentication and profiles",
        "Application tracking system"
      ],
      tags: ["Web Development", "Frontend", "Backend"],
      github: "https://github.com/ManavSinghla/Job-Portal",
      icon: "💼"
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text inline-block relative border-b-4 border-light-accent dark:border-dark-accent pb-2">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work focusing on full-stack development, algorithms, and system simulation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
              
              {/* Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-light-accent/20 to-purple-500/20 dark:from-dark-accent/20 dark:to-purple-500/20 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              
              <div className="text-4xl mb-4">{project.icon}</div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{project.title}</h3>
              </div>
              
              <span className="text-sm font-semibold text-light-accent dark:text-dark-accent mb-4 inline-block">{project.date}</span>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                {project.description}
              </p>
              
              <ul className="list-disc list-inside text-sm text-slate-500 dark:text-slate-400 mb-6 space-y-1">
                {project.features.map((feature, fIdx) => (
                  <li key={fIdx}>{feature}</li>
                ))}
              </ul>
              
              <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700/50">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-light-accent dark:text-dark-accent hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  View Source Code
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <a 
              href="https://github.com/ManavSinghla?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 glass text-light-text dark:text-dark-text font-medium rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-300"
            >
              See More on GitHub
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
