import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Target, Eye, Award, Users, Calendar, Lightbulb } from 'lucide-react';

const timeline = [
  {
    year: '1995',
    title: 'Foundation',
    description: 'PowerLand House was established with a vision to revolutionize the electrical equipment industry.',
  },
  {
    year: '2003',
    title: 'Expansion',
    description: 'Expanded operations to serve international markets with state-of-the-art manufacturing facilities.',
  },
  {
    year: '2010',
    title: 'Innovation Hub',
    description: 'Launched our dedicated R&D center focused on developing next-generation power solutions.',
  },
  {
    year: '2018',
    title: 'Sustainability',
    description: 'Achieved ISO 14001 certification, committing to environmentally responsible manufacturing.',
  },
  {
    year: '2024',
    title: 'Digital Era',
    description: 'Integrated smart monitoring and IoT capabilities across our product range.',
  },
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for perfection in every product and service we deliver.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your success is our priority. We build lasting partnerships.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously pushing boundaries to develop cutting-edge solutions.',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'Transparent, honest, and ethical in all our business dealings.',
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
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
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

      {/* Stats Section */}
      <section className="py-16 bg-background relative -mt-8">
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

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 group hover:shadow-glow transition-all duration-500"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver world-class electrical equipment and solutions that empower industries, 
                drive innovation, and contribute to sustainable development. We are committed to 
                excellence in everything we do, from product design to customer service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 group hover:shadow-glow transition-all duration-500"
            >
              <div className="w-16 h-16 bg-cyan/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors">
                <Eye className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in electrical engineering solutions, recognized for our 
                innovative technologies, uncompromising quality, and positive impact on 
                communities worldwide. We envision a future powered by sustainable energy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-accent">Journey</span>
            </h2>
            <p className="text-muted-foreground">
              Three decades of innovation, growth, and commitment to excellence.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card rounded-xl p-6 hover:shadow-glow transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-5 h-5 text-accent md:hidden" />
                      <span className="font-display font-bold text-accent text-lg">{item.year}</span>
                    </div>
                    <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center w-4 h-4 bg-accent rounded-full ring-4 ring-background z-10">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-accent">Values</span>
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at PowerLand House.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center group hover:shadow-glow transition-all duration-500"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
