
import { Github, Linkedin, Mail, Code2, Brain, Database, Terminal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <img
            src=""
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover mb-8 border-4 border-blue-500"
          />
          <h1 className="text-5xl font-bold mb-4"><b>NDUMISO MTHEMBU </b></h1>
          <h1 className="text-5xl font-bold mb-4">Intermediate Full-Stack Developer</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Third-year student passionate about building robust applications and exploring the frontiers of AI & Machine Learning.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/JMMvelase" className="text-gray-300 hover:text-blue-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ndumiso-mthembu-a89731304/" className="text-gray-300 hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <Code2 className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <ul className="space-y-2 text-gray-300">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <Database className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <ul className="space-y-2 text-gray-300">
              <li>C#</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <Brain className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Aspiring Expertise</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Machine Learning</li>
              <li>Artificial Intelligence</li>
              <li>Data Science</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gray-800 p-8 rounded-lg max-w-3xl mx-auto">
          <Terminal className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            As a third-year student and intermediate full-stack developer, I bring a passionate and dedicated approach to software development. 
            My journey in tech has equipped me with a strong foundation in both frontend and backend technologies. 
            I'm particularly excited about the intersection of traditional software development and emerging AI technologies, 
            which drives my aspiration to specialize in machine learning and artificial intelligence.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-400">
        <p>© 2024 Portfolio. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;