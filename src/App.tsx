import React from 'react';
import { ChevronDown, Mail, Twitter, MessageCircleMore , GraduationCap , ScrollText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col justify-center items-center p-6">

        <div className="relative z-10 text-center">
          <div className="w-48 h-48 mx-auto mb-8 overflow-hidden rounded-full elegant-shadow">
            <img
                src="/images/MarvinsPic.JPG"
                alt="Boran Cui"
                className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-7xl font-bold mb-6 text-gradient">Boran Cui</h1>
          <h1 className="text-2xl font-bold mb-6 text-gradient">Alias: Marvin</h1>
          <div
              className="glass-effect px-8 py-4 rounded-2xl inline-block mb-8 transform hover:scale-105 transition-all duration-300">
            <p className="text-xl font-light tracking-wide text-purple-900">
              Psychology & Neuroscience Student • Tech Enthusiast • Gay
            </p>
          </div>
          <div className="flex gap-6 justify-center mt-8">
            <a href="/images/WeChatQRCode.jpeg"
               className="p-3 glass-effect rounded-full hover:bg-pink-100/30 transition-all duration-300">
              <MessageCircleMore className="w-6 h-6 text-pink-700"/>
            </a>
            <a href="mailto:boran.cui@outlook.com"
               className="p-3 glass-effect rounded-full hover:bg-purple-100/30 transition-all duration-300">
              <Mail className="w-6 h-6 text-purple-700"/>
            </a>
            <a href="https://scholar.google.com/citations?user=pBg-RqEAAAAJ"
               className="p-3 glass-effect rounded-full hover:bg-pink-100/30 transition-all duration-300">
              <GraduationCap className="w-6 h-6 text-pink-700"/>
            </a>
            <a href="https://x.com/Marvin_Cui"
               className="p-3 glass-effect rounded-full hover:bg-pink-100/30 transition-all duration-300">
              <Twitter className="w-6 h-6 text-pink-700"/>
            </a>
            <a href="https://www.researchgate.net/profile/Boran-Cui"
               className="p-3 glass-effect rounded-full hover:bg-pink-100/30 transition-all duration-300">
              <ScrollText className="w-6 h-6 text-pink-700"/>
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <ChevronDown size={32} className="animate-bounce text-purple-600 opacity-70"/>
        </div>

      </section>

      {/* About Section */}
      <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-gradient text-center">About Me</h2>
          <div className="glass-panel p-10 rounded-2xl space-y-6">
            <p className="text-lg leading-relaxed text-purple-900">
              I'm a high school student at<a href="https://www.pkudalton.com" className="text-gradient font-medium hover:opacity-80 link-underline">The Affiliated High School of Peking University</a>.
              I'm interested in psychology and neuroscience. I am proud to be Gay and continue to do HIV community service.
            </p>
            <p className="text-lg leading-relaxed text-purple-900">
              I'm also interested in technology and artificial intelligence. During my first year of high school,
              I contributed to several AI and tech media outlets, gaining extensive experience.
            </p>
            <p className="text-lg leading-relaxed text-purple-900">
              I interned at renowned startups such as<a href="https://flowgpt.com/" className="font-medium hover:opacity-80 link-underline">FlowGPT</a>and
              <a href="https://www.moonshot.cn" className="font-medium hover:opacity-80 link-underline">Moonshot AI</a>.
              I worked on growth and operations tasks, amassing substantial experience in product-related areas.
            </p>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-gradient text-center">Research</h2>
          <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 p-8">
                <img src="images/Aphantasia.png" alt="Research visualization"
                     className="w-48 h-36 object-cover rounded-xl shadow-lg"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wider text-sm font-semibold text-gradient">Published Research</div>
                <a href="https://www.researchgate.net/publication/373258960_Exploring_the_Connections_between_Romantic_Desire_and_Mental_Imagery"
                   className="block mt-2 text-2xl font-playfair font-semibold text-purple-900 hover:text-gradient transition-colors link-underline-nonemargin">
                  Exploring the Connections between Romantic Desire and Mental Imagery
                </a>
                <p className="mt-3 text-purple-800">
                  <strong>Authors:</strong> Boran Cui, Yuhan Liu, Zhenxiong Wen, Weibo Zhang*
                </p>
                <p className="mt-2 text-purple-600">
                  Published in The Frontiers of Society, Science and Technology, 2023
                </p>
                <p className="mt-4 text-purple-800 leading-relaxed">
                  This study finds that stronger mental imagery abilities are linked to better recall, continuity,
                  and frequency of romantic feelings and relationships among high school students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-gradient text-center">Awards and Honors</h2>
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-8">
                <img src="images/pkuschool.webp" alt="PKU School"
                     className="w-20 h-20 object-contain rounded-xl"/>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900">Dalton Research Grant</h3>
                  <p className="text-purple-700 mt-1">The Affiliated High School of Peking University</p>
                  <p className="mt-3 text-gradient font-semibold">Total Funding: CNY 4,000</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-8">
                <img src="images/IUPAB.jpg" alt="IUPAB"
                     className="w-20 h-20 object-contain rounded-xl"/>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900">"Excellent Research Report" of 2023</h3>
                  <p className="text-purple-700 mt-1">Biophysical Society of China</p>
                  <p className="mt-3 text-gradient font-semibold">Rank: Top 10</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-8">
                <img src="images/ChinaBrainBee.png" alt="CBB"
                     className="w-20 h-20 object-contain rounded-xl"/>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900">China BrainBee 2023</h3>
                  <p className="text-purple-700 mt-1">International Brain Bee</p>
                  <p className="mt-3 text-gradient font-semibold">Bronze, China Ranked 128th</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-gradient text-center">Activities</h2>
          <div className="space-y-12">
            <div className="glass-panel p-10 rounded-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-8">
                <img src="images/pku.jpeg" alt="PKU"
                     className="w-20 h-20 object-contain rounded-xl"/>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900"><a href="https://talent.psy.pku.edu.cn/" className={"link-underline-nonemargin"}>Talented Youth Initiative</a></h3>
                  <p className="text-purple-700 mt-1 mb-4">Student '23</p>
                  <p className="text-purple-800 leading-relaxed">
                    Talented Youth Initiative is a selection and cultivation program
                    for top innovative youth in China. Initiated by the School of Psychological and Cognitive Sciences
                    at Peking University and specially funded by the Peking University Pei Dian College Global Talents
                    Education Fund. Applying to the Talented Youth Initiative is free and available worldwide, but only 50
                    students can be chosen to participate each year.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-10 rounded-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-8">
                <img src="images/AdvX.png" alt="AdventureX"
                     className="w-20 h-20 object-contain rounded-xl"/>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900"><a href="http://adventure-x.org/" className={"link-underline-nonemargin"}>AdventureX</a></h3>
                  <p className="text-purple-700 mt-1 mb-4">Director, Core Team Member</p>
                  <p className="text-purple-800 leading-relaxed">
                    AdventureX is a truly localized global hackathon platform rooted in China, promoting the
                    influence of maker culture. In July 2024, AdventureX hosted China's largest offline
                    hackathon event for young people in Hangzhou.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center text-purple-700">
        <p>© {new Date().getFullYear()} Boran Cui</p>
      </footer>
    </div>
  );
}

export default App;