import React from 'react';
import { ChevronDown, Mail, Twitter, MessageCircleMore , GraduationCap , ScrollText } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col justify-center items-center p-6">
        <div className="relative z-10 text-center">
          <div className="w-36 h-36 sm:w-48 sm:h-48 mx-auto mb-8 overflow-hidden rounded-full elegant-shadow">
            <img
                src="/images/MarvinsPic.JPG"
                alt="Boran Cui"
                className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-7xl font-bold mb-4 sm:mb-6 text-gradient">Boran Cui</h1>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gradient">Alias: Marvin</h2>
          <div
              className="glass-effect px-6 sm:px-8 py-4 rounded-2xl inline-block mb-6 sm:mb-8 transform hover:scale-105 transition-all duration-300">
            <p className="text-lg sm:text-xl font-light tracking-wide text-purple-900">
              Psychology & Neuroscience Student • Tech Enthusiast • Gay
            </p>
          </div>
          <div className="flex gap-4 sm:gap-6 justify-center mt-6 sm:mt-8">
            {/* WeChat QR Code */}
            <a href="/images/WeChatQRCode.jpeg"
               className="p-2 sm:p-3 glass-effect rounded-full hover:bg-green-100/30 transition-all duration-300">
              <MessageCircleMore className="w-5 h-5 sm:w-6 sm:h-6 text-green-700"/>
            </a>

            {/* Email */}
            <a href="mailto:boran.cui@outlook.com"
               className="p-2 sm:p-3 glass-effect rounded-full hover:bg-blue-100/30 transition-all duration-300">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700"/>
            </a>

            {/* Google Scholar */}
            <a href="https://scholar.google.com/citations?user=pBg-RqEAAAAJ"
               className="p-2 sm:p-3 glass-effect rounded-full hover:bg-orange-100/30 transition-all duration-300">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-orange-700"/>
            </a>

            {/* Twitter */}
            <a href="https://x.com/Marvin_Cui"
               className="p-2 sm:p-3 glass-effect rounded-full hover:bg-sky-100/30 transition-all duration-300">
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-sky-700"/>
            </a>

            {/* ResearchGate */}
            <a href="https://www.researchgate.net/profile/Boran-Cui"
               className="p-2 sm:p-3 glass-effect rounded-full hover:bg-teal-100/30 transition-all duration-300">
              <ScrollText className="w-5 h-5 sm:w-6 sm:h-6 text-teal-700"/>
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-8 sm:mt-12">
          <ChevronDown size={24} sm:size={32} className="animate-bounce text-purple-600 opacity-70"/>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-2xl sm:max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-10 sm:mb-16 text-gradient text-center">About Me</h2>
          <div
              className="glass-panel p-8 sm:p-10 rounded-2xl space-y-4 sm:space-y-6 transform hover:scale-[1.02] transition-all duration-300">
            <p className="text-base sm:text-lg leading-relaxed text-purple-900">
              I'm a high school student at <a href="https://www.pkudalton.com"
                                              className="text-gradient font-medium hover:opacity-80 link-underline">The
              Affiliated High School of Peking University.</a>
              I'm interested in psychology and neuroscience. I am proud to be Gay and continue to do HIV community
              service.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-purple-900">
              I'm also interested in technology and artificial intelligence. During my first year of high school,
              I contributed to several AI and tech media outlets, gaining extensive experience.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-purple-900">
              I interned at renowned startups such as <a href="https://flowgpt.com/" className="font-medium hover:opacity-80 link-underline">FlowGPT</a> and
              <a href="https://www.moonshot.cn" className="font-medium hover:opacity-80 link-underline">Moonshot AI</a>.
              I worked on growth and operations tasks, amassing substantial experience in product-related areas.
            </p>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-2xl sm:max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-10 sm:mb-16 text-gradient text-center">Research</h2>

          <div className="space-y-6 sm:space-y-8">

            <div
                className="glass-panel rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
              <div className="md:flex">
                <div className="md:flex-shrink-0 p-8">
                  <img src="/images/Aphantasia.png" alt="Research visualization"
                       className="w-36 sm:w-48 h-28 sm:h-36 object-cover rounded-xl shadow-lg"/>
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wider text-sm font-semibold text-gradient">Published Research</div>
                  <a href="https://www.researchgate.net/publication/373258960_Exploring_the_Connections_between_Romantic_Desire_and_Mental_Imagery"
                     className="block mt-2 text-xl sm:text-2xl font-playfair font-semibold text-purple-900 hover:text-gradient transition-colors link-underline-nonemargin">
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

            <div
                className="glass-panel rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
              <div className="md:flex">
                <div className="md:flex-shrink-0 p-8">
                  <img src="/images/probiotic_illustration.png" alt="Research visualization"
                       className="w-36 sm:w-48 h-28 sm:h-36 object-cover rounded-xl shadow-lg"/>
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wider text-sm font-semibold text-gradient">DRAFT</div>
                  <a href="/Probiotics_Draft.pdf"
                     className="block mt-2 text-xl sm:text-2xl font-playfair font-semibold text-purple-900 hover:text-gradient transition-colors link-underline-nonemargin">
                    Probiotics Impact on Cognitive Ability and Emotionsin Adolescents: A Brain-Gut Axis Study
                  </a>
                  <p className="mt-3 text-purple-800">
                    <strong>Authors:</strong> Boran Cui, Zhenxiong Wen, Yuhan Zhang, Weibo Zhang*
                  </p>
                  <p className="mt-4 text-purple-800 leading-relaxed">
                    This study investigates the effects of probiotics on adolescents’ cognitive abilities, memory, and
                    emotions,
                    showing that probiotics improve cognitive function and emotional well-being by regulating the
                    gut-brain axis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-2xl sm:max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-10 sm:mb-16 text-gradient text-center">Articles</h2>
          <div className="space-y-6 sm:space-y-8">
            <div
                className="glass-panel p-6 sm:p-8 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                <img src="/images/article1.png" alt="Article 1"
                     className="w-16 sm:w-20 h-16 sm:h-20 object-contain rounded-xl"/>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-900">
                    <a href="/#/articles/first-article"
                       className="link-underline-nonemargin hover:text-gradient transition-all">From Writer to Founder
                    </a>

                  </h3>
                  <p className="text-purple-700 mt-1 mb-3 sm:mb-4">
                    Published on December 2, 2024
                  </p>
                  <p className="text-purple-800 leading-relaxed">
                    This is the story of my exploration of the interested self in 2024.
                  </p>
                </div>
              </div>
            </div>

            <div
                className="glass-panel p-6 sm:p-8 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                <img src="/images/article2.jpg" alt="Article 2"
                     className="w-16 sm:w-20 h-16 sm:h-20 object-contain rounded-xl" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-900">
                    <a href="/#/articles/second-article"
                       className="link-underline-nonemargin hover:text-gradient transition-all">
                      Introducing 'Transparent Growth Path'
                    </a>
                  </h3>
                  <p className="text-purple-700 mt-1 mb-3 sm:mb-4">
                    Published on December 2, 2024
                  </p>
                  <p className="text-purple-800 leading-relaxed">
                    A Transparent Growth Path is a detailed, transparent framework designed to showcase how someone has
                    progressed over time, step-by-step.
                  </p>
                  <a href="/TGP_Reports.html"
                     className="link-underline-nonemargin hover:text-gradient transition-all font-bold">
                    View Boran's Transparent Growth Path
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-2xl sm:max-w-4xl mx-auto">
    <h2 className="text-4xl sm:text-5xl font-bold mb-10 sm:mb-16 text-gradient text-center">Awards and Honors</h2>
    <div className="space-y-6 sm:space-y-8">
      <div className="glass-panel p-6 sm:p-8 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <img src="/images/pkuschool.webp" alt="PKU School" className="w-16 sm:w-20 h-16 sm:h-20 object-contain rounded-xl"/>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-900">Dalton Research Grant</h3>
            <p className="text-purple-700 mt-1">The Affiliated High School of Peking University</p>
            <p className="mt-3 text-gradient font-semibold">CNY 4,000</p>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6 sm:p-8 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <img src="/images/IUPAB.jpg" alt="IUPAB" className="w-16 sm:w-20 h-16 sm:h-20 object-contain rounded-xl"/>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-900">"Excellent Research Report" of 2023</h3>
            <p className="text-purple-700 mt-1">Biophysical Society of China</p>
            <p className="mt-3 text-gradient font-semibold">Top 10</p>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6 sm:p-8 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <img src="/images/ChinaBrainBee.png" alt="CBB" className="w-16 sm:w-20 h-16 sm:h-20 object-contain rounded-xl"/>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-900">China BrainBee 2023</h3>
            <p className="text-purple-700 mt-1">International Brain Bee</p>
            <p className="mt-3 text-gradient font-semibold">National Bronze, China Ranked 128th</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Activities Section */}
<section className="py-16 sm:py-24 px-4 sm:px-6">
  <div className="max-w-2xl sm:max-w-4xl mx-auto">
    <h2 className="text-4xl sm:text-5xl font-bold mb-10 sm:mb-16 text-gradient text-center">Activities</h2>
    <div className="space-y-8 sm:space-y-12">
      <div className="glass-panel p-8 sm:p-10 rounded-2xl transform hover:scale-105 transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
          <img src="/images/pku.jpeg" alt="PKU" className="w-16 sm:w-20 h-16 sm:h-20 object-contain rounded-xl"/>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-900"><a href="https://talent.psy.pku.edu.cn/"
                                                                             className="link-underline-nonemargin">Talented
              Youth Initiative</a></h3>
            <p className="text-purple-700 mt-1 mb-3 sm:mb-4">Student '23</p>
            <p className="text-purple-800 leading-relaxed">
              Talented Youth Initiative is a selection and cultivation program for top innovative youth in China.
              Initiated by the School of Psychological and Cognitive Sciences at Peking University and specially funded
              by the Peking University Pei Dian College Global Talents Education Fund.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-panel p-8 sm:p-10 rounded-2xl transform hover:scale-105 transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
          <img src="/images/THU.png" alt="THU" className="w-16 sm:w-20 h-16 sm:h-20 object-contain rounded-xl"/>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-900"><a href="https://life.tsinghua.edu.cn/info/1133/5575.htm"
                                                                             className="link-underline-nonemargin">Tsinghua University "Artificial Evolution" Winter Camp</a></h3>
            <p className="text-purple-700 mt-1 mb-3 sm:mb-4">Student '24 (The First Year)</p>
            <p className="text-purple-800 leading-relaxed">
              The “Artificial Evolution” Winter Camp at Tsinghua University in January 2024 aimed to train high school students and teachers in scientific research.
              It offered theoretical lessons and hands-on experiments, focusing on innovation, scientific methods, and the importance of curiosity in research.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-panel p-8 sm:p-10 rounded-2xl transform hover:scale-105 transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
          <img src="/images/AdvX.png" alt="AdventureX" className="w-16 sm:w-20 h-16 sm:h-20 object-contain rounded-xl"/>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-900"><a href="http://adventure-x.org/"
                                                                             className="link-underline-nonemargin">AdventureX</a>
            </h3>
            <p className="text-purple-700 mt-1 mb-3 sm:mb-4">Co-Founder</p>
            <p className="text-purple-800 leading-relaxed">
              AdventureX is a localized global hackathon platform rooted in China, promoting maker culture. In July
              2024,
              AdventureX hosted China's largest offline hackathon event for young people in Hangzhou.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 text-center text-purple-700">
        <p>© {new Date().getFullYear()} Boran Cui</p>
      </footer>
    </div>
  );
}

export default Home;