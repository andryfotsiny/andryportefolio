"use client";

import { Tabs } from "../components/ui/Tabs";
import { FaHtml5, FaCss3, FaJs, FaReact, FaVuejs, FaPhp, FaPython, FaJava, FaNodeJs } from "react-icons/fa";
import { SiArduino, SiBlender, SiMysql, SiPostgresql, SiMongodb, SiDocker, SiJenkins } from "react-icons/si";

import { motion } from "framer-motion";

const skills = {
  title: 'Compétence',
  description: `Avec une solide maîtrise des langages de développement web front-end comme HTML et CSS, 
    j'ai développé des interfaces utilisateur réactives et esthétiquement plaisantes. 
    J'ai une expertise approfondie en PHP, principalement avec Laravel et Symfony, et en Python, 
    avec des projets variés incluant des systèmes médicaux et des entrepôts de données. 
    J'ai également travaillé sur des applications Java robustes, en utilisant Spring Boot et Angular. 

    Mes compétences en JavaScript m'ont permis de créer des applications interactives avec React et Vue.js,
    tandis que Node.js m'a permis de développer des serveurs performants. En c++ et C# , j'ai réalisé des projets de gestion de stock 
    et des systèmes embarqués avec Arduino. Enfin, j'ai utilisé R pour des analyses statistiques et des visualisations de données.`,
  skillList: [
    { icon: <FaHtml5 />, name: 'HTML', stars: 10 },
    { icon: <FaCss3 />, name: 'CSS', stars: 10 },
    { icon: <SiMysql />, name: 'MySQL', stars: 9 },
    { icon: <SiPostgresql />, name: 'PostgreSQL', stars: 9 },
    { icon: <FaPython />, name: 'Python', stars: 8 },
    { icon: <FaPhp />, name: 'PHP', stars: 8 },
    { icon: <FaJs />, name: 'JavaScript', stars: 6 },
    { icon: <FaReact />, name: 'React', stars: 6 },
    { icon: <FaJava />, name: 'Java', stars: 6 },
    { icon: <FaNodeJs />, name: 'Node.js', stars: 5 },
    { icon: <FaVuejs />, name: 'Vue.js', stars: 4 },
    { icon: <SiArduino />, name: 'Arduino', stars: 3 },
    { icon: <SiBlender />, name: 'Blender', stars: 3 },
    { icon: <SiMongodb />, name: 'MongoDB', stars: 3 },
    { icon: <SiDocker />, name: 'Docker', stars: 4 },
    { icon: <SiJenkins />, name: 'Jenkins', stars: 4 },

  ]
};

const Competences: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="p-5">
        <Tabs className="flex flex-col xl:flex-row gap-[60px]">
          <div className="min-h-[70vh] w-full">
            <div className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[10px] text-center xl:text-left">
                  <h3 className="text-3xl font-bold">{skills.title}</h3>
                  <p className="mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill) => (
                    <li key={skill.name}>
                      <div className="w-full h-[100px] dark:bg-gray-800 bg-white rounded-xl flex flex-col justify-center items-center group">
                        <div className="text-4xl group-hover:text-accent">
                          {skill.icon}
                        </div>
                        <p className="text-xl capitalize">{skill.name}</p>
                        <div className="flex">
                          {/* Vous pouvez ajouter des éléments ici si nécessaire */}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Competences;
