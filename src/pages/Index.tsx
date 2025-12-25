import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import heroPower from '@/assets/hero-power.jpg';

const features = [
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Cutting-edge electrical solutions engineered for maximum efficiency and reliability.',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Every product meets strict international standards and undergoes rigorous testing.',
  },
  {
    icon: Award,
    title: 'Industry Leaders',
    description: 'Decades of experience serving major industries with proven excellence.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support ensuring your operations never stop.',
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={heroPower}
            alt="Power Station"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 h-full flex items-center"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm mb-6">
                  <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                  Powering Industrial Excellence
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
              >
                Engineering the Future of
                <span className="block text-accent">Power Systems</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl"
              >
                Your trusted partner for transformers, generators, and industrial electrical equipment. Delivering excellence since decades.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Button variant="hero" size="xl" asChild>
                  <Link to="/services">
                    Explore Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="glass" size="xl" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2 text-primary-foreground/50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-accent rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-accent">PowerLand House</span>
            </h2>
            <p className="text-muted-foreground">
              We combine decades of expertise with cutting-edge technology to deliver unmatched electrical solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-500"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Power Your <span className="text-accent">Next Project?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Get in touch with our experts and discover how PowerLand House can transform your electrical infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
