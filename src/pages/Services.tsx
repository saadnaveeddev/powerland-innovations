import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import transformerImg from '@/assets/transformer.jpg';
import dynamoImg from '@/assets/dynamo.jpg';
import acGeneratorImg from '@/assets/ac-generator.jpg';
import dcGeneratorImg from '@/assets/dc-generator.jpg';
import powerEquipmentImg from '@/assets/power-equipment.jpg';
import customSolutionsImg from '@/assets/custom-solutions.jpg';

const services = [
  {
    id: 1,
    title: 'Transformers',
    description: 'High-efficiency power transformers designed for industrial and commercial applications. Our transformers feature advanced cooling systems, superior insulation, and compliance with international standards.',
    features: ['Step-up & Step-down', 'Distribution Transformers', 'Custom Voltage Ratings', 'Oil & Dry Type'],
    image: transformerImg,
  },
  {
    id: 2,
    title: 'Dynamo Motors',
    description: 'Precision-engineered dynamo motors delivering exceptional torque and reliability. Ideal for heavy-duty industrial applications requiring consistent power output.',
    features: ['High Torque Output', 'Variable Speed Control', 'Industrial Grade', 'Energy Efficient'],
    image: dynamoImg,
  },
  {
    id: 3,
    title: 'AC Generators',
    description: 'Robust AC generators engineered for continuous operation. From standby power to prime power applications, our generators deliver reliable performance.',
    features: ['Synchronous Design', 'Wide Capacity Range', 'Automatic Voltage Regulation', 'Low Maintenance'],
    image: acGeneratorImg,
  },
  {
    id: 4,
    title: 'DC Generators',
    description: 'Specialized DC generators for applications requiring direct current power. Perfect for electroplating, battery charging, and DC motor drives.',
    features: ['Shunt & Series Types', 'Precise Voltage Control', 'Compact Design', 'High Efficiency'],
    image: dcGeneratorImg,
  },
  {
    id: 5,
    title: 'Industrial Power Equipment',
    description: 'Complete range of industrial power equipment including switchgear, control panels, and distribution systems designed for maximum safety and reliability.',
    features: ['Circuit Breakers', 'Control Panels', 'Switchgear', 'Protection Systems'],
    image: powerEquipmentImg,
  },
  {
    id: 6,
    title: 'Custom Electrical Solutions',
    description: 'Tailored electrical solutions designed to meet your specific requirements. Our engineering team works closely with you to develop optimal solutions.',
    features: ['Engineering Consultation', 'Custom Design', 'Installation Support', 'Maintenance Programs'],
    image: customSolutionsImg,
  },
];

const ServiceItem = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          {/* Content */}
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan font-medium text-sm">
              0{service.id}
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              {service.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {service.description}
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="cyan" size="lg" asChild>
              <Link to="/contact">
                Get Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            style={{ y: imageY }}
            className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-cyan/10" />
                <div className="absolute -inset-4 bg-cyan/5 blur-2xl" />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className={`absolute -z-10 w-full h-full rounded-2xl bg-accent/10 ${isEven ? '-right-4 -bottom-4' : '-left-4 -bottom-4'}`} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm mb-6">
              Our Expertise
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Comprehensive <span className="text-accent">Power Solutions</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              Explore our full range of electrical equipment and services designed to power your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-background">
        {services.map((service, index) => (
          <ServiceItem key={service.id} service={service} index={index} />
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our team of experts is ready to design and deliver the perfect electrical solution for your unique requirements.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Contact Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
