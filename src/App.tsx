import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  FileText,
  Server,
  Database,
  Cloud,
  Terminal,
  Network,
  Layers,
  Container,
  Workflow,
} from 'lucide-react';
import './index.css';

type Skill = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

type SkillCardProps = {
  skill: Skill;
  index: number;
};

const skills: Skill[] = [
  { name: 'Kubernetes', description: 'Baremetal, Managed & K3s clusters', icon: Container },
  { name: 'CI/CD Pipelines', description: 'GitLab CI, Jenkins, ArgoCD', icon: Workflow },
  { name: 'Infrastructure as Code', description: 'Terraform & Terragrunt', icon: Layers },
  { name: 'Databases', description: 'MySQL & Elasticsearch', icon: Database },
  { name: 'Linux & Networking', description: 'Advanced administration & Cisco/Juniper', icon: Network },
  { name: 'Cloud Platforms', description: 'AWS, OVH, Alibaba Cloud', icon: Cloud },
];

const profileImage =
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6924be8cc1c8061cf9c727ad/a78ea92cf_Tamir-Portrait-01.jpg';

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-white">{skill.name}</h3>
        <p className="text-sm text-white/60">{skill.description}</p>
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-purple-600/30 blur-[150px]" />
        <div
          className="absolute bottom-0 right-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-blue-600/30 blur-[150px]"
          style={{ animationDelay: '1s' }}
        />
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[180px]" />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E')]" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Profile Image */}
            <div className="relative mb-8 inline-block">
              <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 blur-xl opacity-50" />
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl shadow-purple-500/30 md:h-48 md:w-48">
                <img src={profileImage} alt="Tamir Madar" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-slate-950 bg-green-500">
                <div className="h-3 w-3 animate-ping rounded-full bg-green-400" />
              </div>
            </div>

            {/* Name & Title */}
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl">Tamir Madar</h1>
            <p className="mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-xl font-medium text-transparent md:text-2xl">
              DevOps Engineer
            </p>
            <p className="mb-8 mx-auto max-w-xl text-lg leading-relaxed text-white/60">
              Building robust infrastructure, automating everything, and running production workloads on my own Kubernetes
              cluster.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/RollerSweet"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                <Github className="h-5 w-5 text-white transition-colors group-hover:text-purple-400" />
                <span className="text-sm font-medium text-white">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/tamir-madar-11901521a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                <Linkedin className="h-5 w-5 text-white transition-colors group-hover:text-blue-400" />
                <span className="text-sm font-medium text-white">LinkedIn</span>
              </a>
              <a
                href="https://cv.tamirmadar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 transition-all duration-300 hover:scale-105 hover:opacity-90 shadow-lg shadow-purple-500/30"
              >
                <FileText className="h-5 w-5 text-white" />
                <span className="text-sm font-medium text-white">Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="flex h-10 w-6 items-center justify-center rounded-full border-2 border-white/30 pt-2">
              <div className="h-3 w-1.5 animate-bounce rounded-full bg-white/50" />
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Technical Expertise</h2>
            <p className="mx-auto max-w-2xl text-white/60">
              Specialized in cloud-native technologies, infrastructure automation, and production-grade deployments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </section>

        {/* Homelab Section */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:p-12"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px]" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-blue-500/20 blur-[80px]" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500">
                    <Server className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">My Homelab</h3>
                    <p className="text-white/60">Self-hosted infrastructure</p>
                  </div>
                </div>

                <p className="mb-8 text-lg leading-relaxed text-white/80">
                  This website is running as a <span className="font-semibold text-purple-400">Kubernetes deployment</span>{' '}
                  on my personal K3s cluster, built on top of <span className="font-semibold text-blue-400">Proxmox VE</span>.
                  I believe in practicing what I preach — managing my own production infrastructure helps me stay sharp and
                  experiment with new technologies.
                </p>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {[
                    { label: 'Proxmox VE', sublabel: 'Hypervisor' },
                    { label: 'K3s Cluster', sublabel: 'Orchestration' },
                    { label: 'GitOps', sublabel: 'Deployment' },
                    { label: '24/7', sublabel: 'Uptime' },
                  ].map((item, index) => (
                    <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="text-sm text-white/50">{item.sublabel}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-white/40">© {new Date().getFullYear()} Tamir Madar. Built with passion & deployed on K3s.</p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="mailto:me@tamirmadar.com" className="transition-colors hover:text-white">
                me@tamirmadar.com
              </a>
              <div className="flex items-center gap-1 text-white/40">
                <Terminal className="h-4 w-4" />
                <span>tamirmadar.com</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
