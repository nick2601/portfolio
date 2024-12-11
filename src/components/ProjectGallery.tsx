import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
}

export const ProjectGallery = ({ projects }: { projects: Project[] }) => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = projects.filter(project =>
        filter === 'all' ? true : project.category === filter
    );

    return (
        <div>
            {/* Filter buttons */}
            <div className="flex gap-4 mb-8">
                {['all', 'web', 'mobile', 'design'].map(category => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={filter === category ? 'active' : ''}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Project grid */}
            <motion.div layout className="grid grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredProjects.map(project => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Project card content */}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Project modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50"
                    >
                        {/* Modal content */}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}; 