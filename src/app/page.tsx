import React from 'react';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';

/**
 * Home Page Component:
 * Main page Component that combines all the section of the homepage
 * 
 */

const HomePage = () => {
    return (
        <div className="bg-gray-950">
            <HeroSection />
            <BlogSection />
            <ProjectsSection />
            <SkillsSection />
            <Footer />

        </div>
    );
};

export default HomePage;