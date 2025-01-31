import { useParams } from 'react-router-dom';
import { Project } from '../types';
import { projects } from '../utils/utils';
import Footer from '../layouts/Footer';

const ProjectDetails = () => {
    const { projectId } = useParams<{ projectId: string }>();
    // In real app, fetch project data using projectId

    const project: Project = projects.find(p => p.id === projectId)!;

    return (
        <>
            <div className="max-w-6xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-8">{project.title}</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold mb-4">Project Highlights</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="text-gray-600">{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Energy Savings</h3>
                            <p className="text-gray-600">{project.savings}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-6">
                    <h2 className="text-2xl font-semibold">Project Details</h2>
                    <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="font-medium">{project.location}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-500">System Capacity</p>
                            <p className="font-medium">{project.capacity}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-500">Completion Date</p>
                            <p className="font-medium">{project.date}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectDetails;