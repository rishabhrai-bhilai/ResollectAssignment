import { useTheme } from '../context/ThemeContext';
import { HomeIcon, BellIcon, EnvelopeIcon, ShoppingBagIcon, CloudArrowUpIcon, CogIcon, UserGroupIcon, LockClosedIcon, DocumentTextIcon, PlusIcon, FunnelIcon, ArrowsUpDownIcon, DevicePhoneMobileIcon, LinkIcon, BookOpenIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const Readme = () => {
  const { theme } = useTheme();

  return (
    <div className="px-4 py-1 pt-6 md:pt-3 max-w-8xl mx-auto">
      {/* Title with icon */}
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-2 rounded-full mr-3 shadow-md">
          <BookOpenIcon className="text-blue-600 dark:text-blue-300 h-5 w-5" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
          Loan Portfolio Management System (<a href="https://resollectdashboard.netlify.app/" className="text-blue-500 dark:text-blue-400 hover:underline">Frontend</a>)
        </h1>
      </div>

      {/* Description with link icon */}
      <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-xl mb-6 border border-blue-100 dark:border-gray-700 shadow-lg">
        <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
          <span className="font-semibold">🔗 Live URL:</span>{' '}
          <a href="https://resollectdashboard.netlify.app/" className="text-blue-500 dark:text-blue-400 hover:underline flex items-center">
            <LinkIcon className="mr-1 h-4 w-4" /> https://resollectdashboard.netlify.app/
          </a>
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          A frontend web application for managing a loan portfolio, featuring a data table with filtering, grouping (bucketing), and CRUD operations. Built with React and using a <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">data.js</code> file to mimic backend API data. The project is mobile-responsive and deployed on Netlify.
        </p>
      </div>

      {/* Table of Contents with cards */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
          <DocumentTextIcon className="mr-2 h-5 w-5" /> Table of Contents
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { id: 'project-overview', title: 'Project Overview', icon: '📋' },
            { id: 'features', title: 'Features', icon: '✨' },
            { id: 'implemented-functionalities', title: 'Functionalities', icon: '🛠️' },
            { id: 'tech-stack', title: 'Tech Stack', icon: '💻' },
            { id: 'project-structure', title: 'Project Structure', icon: '📂' },
            { id: 'setup-instructions', title: 'Setup', icon: '⚙️' },
            { id: 'running-the-application', title: 'Running App', icon: <RocketLaunchIcon className="h-4 w-4" /> },
            { id: 'mobile-responsiveness', title: 'Mobile', icon: <DevicePhoneMobileIcon className="h-4 w-4" /> },
            { id: 'deployment', title: 'Deployment', icon: <CloudArrowUpIcon className="h-4 w-4" /> },
            { id: 'links', title: 'Links', icon: <LinkIcon className="h-4 w-4" /> },
            { id: 'documentation', title: 'Docs', icon: <BookOpenIcon className="h-4 w-4" /> },
            { id: 'future-improvements', title: 'Future', icon: '🔮' },
          ].map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="block p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all shadow-md hover:shadow-lg"
            >
              <div className="flex items-center">
                <span className="text-base mr-2 text-blue-500 dark:text-blue-300">{item.icon}</span>
                <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{item.title}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Project Overview */}
      <section id="project-overview" className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">📋</span>
          Project Overview
        </h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm leading-relaxed">
            This project is a Loan Portfolio Management System (Frontend) that allows users to view, filter, group, and manage loan data through a web interface. The frontend is built with React, and instead of making API calls to a backend, it uses a <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">data.js</code> file to mimic the data and perform CRUD operations locally.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 text-base">Frontend</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Built with React, Tailwind CSS, and Vite. Uses a <code className="bg-gray-200 dark:bg-gray-600 px-1 py-0.5 rounded text-xs">data.js</code> file to mimic backend data.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 text-base">Key Features</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Filtering, grouping, CRUD operations, pagination, sorting, and mobile responsiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full mr-3">✨</span>
          Features
        </h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <HomeIcon className="h-5 w-5" />, title: "Landing Page with Data Table", desc: "Displays loans from data.js" },
              { icon: <FunnelIcon className="h-5 w-5" />, title: "Filtering", desc: "Search term filtering on frontend" },
              { icon: <UserGroupIcon className="h-5 w-5" />, title: "Bucketing", desc: "Group loans by selected fields" },
              { icon: <ArrowsUpDownIcon className="h-5 w-5" />, title: "CRUD Operations", desc: "Create, Read, Update, Delete loans" },
              { icon: <DevicePhoneMobileIcon className="h-5 w-5" />, title: "Responsive", desc: "Card layout on mobile" },
              { icon: <CogIcon className="h-5 w-5" />, title: "Pagination & Sorting", desc: "6 items per page, sortable columns" },
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full mr-3 shadow-sm">
                  <div className="text-indigo-600 dark:text-indigo-300">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implemented Functionalities */}
      <section id="implemented-functionalities" className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-full mr-3">🛠️</span>
          Implemented Functionalities
        </h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left text-[10px] font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Functionality</th>
                  <th className="px-4 py-2 text-left text-[10px] font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { func: "Pagination", desc: "6 items per page with navigation controls" },
                  { func: "Input Checking", desc: "Checkbox selection for delete/update" },
                  { func: "Dummy Authentication", desc: "Sign in/out with local state" },
                  { func: "Search Filtering", desc: "Case-insensitive dynamic filtering" },
                  { func: "Bucketing", desc: "Group loans by selected field" },
                  { func: "CRUD Operations", desc: "Add, edit, delete loans in data.js" },
                  { func: "Responsive Design", desc: "Collapsible sidebar, mobile cards" },
                  { func: "Sorting", desc: "Sort table columns ascending/descending" },
                ].map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700'}>
                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900 dark:text-gray-200 text-xs">{item.func}</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 text-xs">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">💻</span>
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-3">Frontend</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">⚛️</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">React</span>
              </li>
              <li className="flex items-center">
                <span className="bg-cyan-100 dark:bg-cyan-900 p-2 rounded-full mr-3">🎨</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Tailwind CSS</span>
              </li>
              <li className="flex items-center">
                <span className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full mr-3">⚡</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Vite</span>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-3">Deployment</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="bg-teal-100 dark:bg-teal-900 p-2 rounded-full mr-3">🌐</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Netlify</span>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-3">Development Tools</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-full mr-3">🛠️</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Vite</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Structure */}
      <section id="project-structure" className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="bg-orange-100 dark:bg-orange-900 p-2 rounded-full mr-3">📂</span>
          Project Structure
        </h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-gray-800 dark:text-gray-200 overflow-x-auto text-xs font-mono">
{`loan-portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddLoanModal.jsx
│   │   │   ├── DataTable.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── data.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── README.md
└── documentation.md`}
          </pre>
        </div>
      </section>

      {/* Setup Instructions */}
      <section id="setup-instructions" className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="bg-red-100 dark:bg-red-900 p-2 rounded-full mr-3">⚙️</span>
          Setup Instructions
        </h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <h3 className="text-base font-semibold mb-2 text-gray-800 dark:text-gray-200">Prerequisites</h3>
          <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-lg mb-4 shadow-sm">
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
              <li>Node.js 18+</li>
              <li>Git</li>
            </ul>
          </div>
          <h3 className="text-base font-semibold mb-2 text-gray-800 dark:text-gray-200">Frontend Setup</h3>
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-3 shadow-sm">
            <pre className="text-gray-800 dark:text-gray-200 overflow-x-auto text-xs font-mono">
{`# Clone repository
git clone https://github.com/your-username/loan-portfolio.git

# Navigate to frontend
cd loan-portfolio/frontend

# Install dependencies
npm install

# Start development server
npm run dev`}
            </pre>
          </div>
        </div>
      </section>

      {/* Running the Application */}
      <section id="running-the-application" className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3"><RocketLaunchIcon className="h-4 w-4" /></span>
          Running the Application
        </h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-3 shadow-sm">
            <pre className="text-gray-800 dark:text-gray-200 text-xs font-mono">
{`cd frontend
npm run dev`}
            </pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Open <a href="http://localhost:5173" className="text-blue-500 dark:text-blue-400 hover:underline">http://localhost:5173</a> in your browser.
          </p>
        </div>
      </section>

      {/* Mobile Responsiveness */}
      <section id="mobile-responsiveness" className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full mr-3"><DevicePhoneMobileIcon className="h-4 w-4" /></span>
          Mobile Responsiveness
        </h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { size: "Small (<640px)", features: "Card layout, collapsed sidebar, floating buttons" },
              { size: "Medium (768px-1023px)", features: "Reduced padding, narrower sidebar" },
              { size: "Large (1024px+)", features: "Full table, expanded sidebar" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 text-sm">{item.size}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-xs">{item.features}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section id="deployment" className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="bg-teal-100 dark:bg-teal-900 p-2 rounded-full mr-3"><CloudArrowUpIcon className="h-4 w-4" /></span>
          Deployment
        </h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <h3 className="text-base font-semibold mb-2 text-gray-800 dark:text-gray-200">Frontend Deployment</h3>
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
            <pre className="text-gray-800 dark:text-gray-200 text-xs font-mono">
{`# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Navigate to frontend
cd frontend

# Deploy to Netlify
netlify deploy

# Deploy to production
netlify deploy --prod`}
            </pre>
          </div>
        </div>
      </section>

      {/* Links */}
      <section id="links" className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
          <LinkIcon className="mr-2 h-5 w-5" />
          Links
        </h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a 
              href="https://github.com/rishabhrai-bhilai/ResollectAssignment" 
              className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all shadow-sm hover:shadow-md"
            >
              <span className="bg-gray-100 dark:bg-gray-600 p-2 rounded-full mr-3">📦</span>
              <span className="text-gray-800 dark:text-gray-200 font-semibold text-sm">GitHub Repository</span>
            </a>
            <a 
              href="https://resollectdashboard.netlify.app/" 
              className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all shadow-sm hover:shadow-md"
            >
              <span className="bg-teal-100 dark:bg-teal-900 p-2 rounded-full mr-3">🌐</span>
              <span className="text-gray-800 dark:text-gray-200 font-semibold text-sm">Live Deployed Link</span>
            </a>
            <a 
              href="/documentation" 
              className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all shadow-sm hover:shadow-md"
            >
              <BookOpenIcon className="text-blue-500 mr-3 h-4 w-4" />
              <span className="text-gray-800 dark:text-gray-200 font-semibold text-sm">Documentation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section id="documentation" className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpenIcon className="mr-2 h-5 w-5" />
          Documentation
        </h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Refer to <a href="/documentation" className="text-blue-500 dark:text-blue-400 hover:underline flex items-center">
              <BookOpenIcon className="mr-1 h-4 w-4" /> documentation.md
            </a> for detailed code structure and component explanations.
          </p>
        </div>
      </section>

      {/* Future Improvements */}
      <section id="future-improvements" className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
          <span className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full mr-3">🔮</span>
          Future Improvements
        </h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Backend Integration with Django",
              "Testing with Jest & React Testing Library",
              "Real Authentication",
              "Advanced Filtering",
              "Styling Enhancements with Material-UI",
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-green-100 dark:bg-green-600 p-1 rounded-full mr-2 mt-1 shadow-sm">
                  <svg className="h-3 w-3 text-green-600 dark:text-green-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Readme;