import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Target, Eye, Award, Users, Lightbulb, Wrench, Cpu, Zap } from 'lucide-react';

const knowledgePanels = [
  {
    icon: Zap,
    title: 'Our Background',
    description: 'Founded in 1995, PowerLand House emerged from a vision to revolutionize the electrical equipment industry. Starting as a small workshop with just five engineers, we have grown into a powerhouse serving industries across 50+ countries.',
    accent: 'from-accent/20 to-accent/5',
  },
  {
    icon: Wrench,
    title: 'Our Experience',
    description: 'With over 25 years of hands-on experience, we have successfully delivered 500+ major projects. From power plants to manufacturing facilities, our expertise spans the entire spectrum of electrical engineering.',
    accent: 'from-cyan/20 to-cyan/5',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To deliver world-class electrical equipment and solutions that empower industries, drive innovation, and contribute to sustainable development. We are committed to excellence in everything we do.',
    accent: 'from-accent/20 to-accent/5',
  },
  {
    icon: Cpu,
    title: 'Our Expertise',
    description: 'Specializing in transformers, generators, motors, and custom power solutions. Our engineering team combines traditional expertise with cutting-edge technology to solve the most complex challenges.',
    accent: 'from-cyan/20 to-cyan/5',
  },
  {
    icon: Award,
    title: 'Our Values',
    description: 'Integrity, innovation, and excellence form the foundation of everything we do. We believe in building lasting partnerships through transparency, quality, and unwavering commitment to our clients.',
    accent: 'from-accent/20 to-accent/5',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the global leader in electrical engineering solutions, recognized for our innovative technologies, uncompromising quality, and positive impact on communities worldwide.',
    accent: 'from-cyan/20 to-cyan/5',
  },
];

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '50+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm mb-6">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Powering Progress <span className="text-accent">Since 1995</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              From humble beginnings to industry leadership, discover the journey of PowerLand House.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Illuminated Workshop Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Background grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: 'linear-gradient(hsl(185 80% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 80% 45%) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Hanging Industrial Lamp */}
          <div className="flex flex-col items-center mb-16">
            {/* Cord */}
            <motion.div 
              className="w-0.5 h-20 bg-gradient-to-b from-muted-foreground/30 to-accent/50"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ transformOrigin: 'top' }}
            />
            
            {/* Lamp fixture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {/* Lamp shade */}
              <div className="w-32 h-12 bg-gradient-to-b from-secondary to-primary rounded-b-full border-2 border-accent/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
              </div>
              
              {/* Bulb */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 30px hsl(50 100% 50% / 0.4), 0 0 60px hsl(50 100% 50% / 0.2), 0 0 100px hsl(50 100% 50% / 0.1)',
                    '0 0 40px hsl(50 100% 50% / 0.6), 0 0 80px hsl(50 100% 50% / 0.3), 0 0 120px hsl(50 100% 50% / 0.15)',
                    '0 0 30px hsl(50 100% 50% / 0.4), 0 0 60px hsl(50 100% 50% / 0.2), 0 0 100px hsl(50 100% 50% / 0.1)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 -translate-x-1/2 top-4 w-8 h-10 bg-gradient-to-b from-accent via-accent to-accent/80 rounded-full"
              >
                {/* Filament glow */}
                <div className="absolute inset-2 bg-gradient-to-b from-primary-foreground/80 to-accent rounded-full" />
              </motion.div>
            </motion.div>

            {/* Light cone effect */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              style={{ transformOrigin: 'top' }}
              className="relative w-[600px] h-[400px] -mt-2"
            >
              {/* Main light cone */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'conic-gradient(from 180deg at 50% 0%, transparent 35%, hsl(50 100% 50% / 0.08) 45%, hsl(50 100% 50% / 0.12) 50%, hsl(50 100% 50% / 0.08) 55%, transparent 65%)',
                }}
              />
              {/* Inner glow */}
              <motion.div 
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse 40% 60% at 50% 0%, hsl(50 100% 50% / 0.15) 0%, transparent 70%)',
                }}
              />
            </motion.div>

            {/* Section title in light */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center -mt-80 relative z-10 mb-8"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Knowledge <span className="text-accent">Illuminated</span>
              </h2>
              <p className="text-primary-foreground/60 max-w-lg mx-auto">
                Discover the pillars that define PowerLand House
              </p>
            </motion.div>
          </div>

          {/* Knowledge Panels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {knowledgePanels.map((panel, index) => (
              <motion.div
                key={panel.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card glow on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-b from-accent/30 to-cyan/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative bg-secondary/40 backdrop-blur-xl border border-primary-foreground/10 rounded-2xl p-6 h-full overflow-hidden group-hover:border-accent/30 transition-all duration-500">
                  {/* Top light reflection */}
                  <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${panel.accent} opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                  
                  {/* Ambient glow from lamp */}
                  <motion.div 
                    className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:shadow-glow-yellow transition-all duration-500">
                      <panel.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-primary-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                      {panel.title}
                    </h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed group-hover:text-primary-foreground/80 transition-colors duration-300">
                      {panel.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom ambient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-accent/5 rounded-full blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Spirit Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-accent" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Powered by <span className="text-accent">Passion</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Behind every transformer, generator, and electrical solution is a team of dedicated engineers 
              and technicians who share a common goal: powering the world's progress. Our culture of innovation, 
              collaboration, and continuous learning drives us to exceed expectations every single day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <Users className="w-4 h-4" />
                200+ Engineers
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-medium">
                <Award className="w-4 h-4" />
                ISO Certified
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neon/10 text-neon text-sm font-medium">
                <Zap className="w-4 h-4" />
                24/7 Support
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
