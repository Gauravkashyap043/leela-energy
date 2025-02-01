import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { projects } from '../utils/utils';
import Footer from '../layouts/Footer';

const ProjectsPage = () => {


    return (
        <>
            <div className="min-h-screen bg-gray-50 py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8">All Projects</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                whileHover={{ y: -10 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="bg-white border border-green-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {project.shortDescription}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className="text-green-600 hover:text-green-700 font-medium"
                                        >
                                            Learn More →
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectsPage;