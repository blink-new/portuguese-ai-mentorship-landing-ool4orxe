import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Star, Users, Award, TrendingUp, Globe, CheckCircle, ArrowRight, Play, Linkedin, Mail, Instagram, Twitter, Calendar } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { ContactForm } from './components/ContactForm'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleScheduleCall = () => {
    window.open('https://calendar.app.google/mbm9ELA6HHChHxA2A', '_blank')
  }

  return (
    <div className="min-h-screen bg-charcoal-black">
      {/* Fixed Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 bg-cta-orange px-4 py-2 rounded-lg">
              <h1 className="text-2xl font-bold text-charcoal-black">
                Quantum<span className="text-pure-white">AI</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-pure-white hover:text-cta-orange transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-pure-white hover:text-cta-orange transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('programa')}
                className="text-pure-white hover:text-cta-orange transition-colors font-medium"
              >
                Programa
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-pure-white hover:text-cta-orange transition-colors font-medium"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('inscricao')}
                className="text-pure-white hover:text-cta-orange transition-colors font-medium"
              >
                Inscreva-se
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => setIsContactFormOpen(true)}
                className="bg-cta-orange hover:bg-cta-orange/90 text-pure-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Quero Saber Mais
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-pure-white hover:text-cta-orange transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-charcoal-black border-t border-gray-700">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left text-pure-white hover:text-cta-orange transition-colors font-medium py-2"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-pure-white hover:text-cta-orange transition-colors font-medium py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('programa')}
                className="block w-full text-left text-pure-white hover:text-cta-orange transition-colors font-medium py-2"
              >
                Programa
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="block w-full text-left text-pure-white hover:text-cta-orange transition-colors font-medium py-2"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('inscricao')}
                className="block w-full text-left text-pure-white hover:text-cta-orange transition-colors font-medium py-2"
              >
                Inscreva-se
              </button>
              <Button 
                onClick={() => setIsContactFormOpen(true)}
                className="w-full bg-cta-orange hover:bg-cta-orange/90 text-pure-white mt-4"
              >
                Quero Saber Mais
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-charcoal-black via-charcoal-black/90 to-charcoal-black">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cta-orange rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
              <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-cta-orange/70 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-cta-orange/50 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
          <div className="video-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-pure-white mb-6 leading-tight">
              <span className="text-cta-orange">QuantumAI</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pure-white mb-6 leading-tight">
              Domine Inteligência Artificial e Entregue Resultados em 8 Semanas
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforme seu conhecimento em resultados reais com quem foi treinado por{' '}
              <span className="text-cta-orange font-semibold">Stanford, Harvard e Yale</span>.
            </p>
            <Button 
              onClick={() => setIsContactFormOpen(true)}
              className="bg-cta-orange hover:bg-cta-orange/90 text-pure-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Garanta Sua Vaga
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-pure-white" />
        </div>
      </section>

      {/* Sobre a Mentoria Section */}
      <section id="sobre" className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal-black mb-6">
              Sobre a <span className="text-cta-orange">QuantumAI</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-charcoal-black leading-relaxed">
                A QuantumAI foi desenvolvida para profissionais que desejam dominar as tecnologias mais avançadas 
                de Inteligência Artificial e aplicá-las em projetos reais que geram impacto. Em apenas 8 semanas intensivas, 
                você aprenderá não apenas os fundamentos técnicos, mas também as habilidades de liderança e negociação 
                necessárias para se destacar no mercado global de IA.
              </p>
              <p className="text-lg text-charcoal-black leading-relaxed">
                Com uma abordagem prática e orientada a resultados, você desenvolverá competências em Data Science, 
                Machine Learning e Deep Learning, enquanto constrói uma rede de contatos exclusiva com líderes do setor 
                e acesso direto às comunidades mais influentes da área tecnológica.
              </p>
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-cta-orange bg-charcoal-black text-pure-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-cta-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-pure-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Inteligência Artificial</h3>
                <p className="text-cta-orange font-semibold">Stanford University</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-cta-orange bg-charcoal-black text-pure-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-cta-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-pure-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Science</h3>
                <p className="text-cta-orange font-semibold">Harvard University</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-cta-orange bg-charcoal-black text-pure-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-cta-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-pure-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Liderança e Gestão</h3>
                <p className="text-cta-orange font-semibold">Harvard University</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-cta-orange bg-charcoal-black text-pure-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-cta-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-pure-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Negociação</h3>
                <p className="text-cta-orange font-semibold">Yale University</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-cta-orange bg-charcoal-black text-pure-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-cta-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-pure-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">140+ Certificações</h3>
                <p className="text-cta-orange font-semibold">Nacionais e Internacionais</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-cta-orange bg-charcoal-black text-pure-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-cta-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-pure-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comunidades Elite</h3>
                <p className="text-cta-orange font-semibold">Y Combinator & OpenAI</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O que Você Vai Aprender Section */}
      <section id="programa" className="py-20 bg-charcoal-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-pure-white mb-6">
              O que Você Vai <span className="text-cta-orange">Aprender</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-pure-white leading-relaxed mb-8">
                Durante nossa jornada intensiva de 8 semanas, você mergulhará nos <strong>fundamentos de Machine Learning e Deep Learning</strong>, 
                compreendendo não apenas a teoria, mas dominando a aplicação prática dessas tecnologias em cenários reais. 
                Você desenvolverá projetos hands-on utilizando Python e as bibliotecas mais avançadas do mercado, 
                criando soluções que podem ser implementadas imediatamente em sua carreira ou negócio.
              </p>
              
              <p className="text-lg text-pure-white leading-relaxed mb-8">
                Além do domínio técnico, você aprenderá <strong>estratégias de liderança e negociação</strong> aplicadas 
                especificamente a iniciativas de alto impacto em tecnologia. Essas habilidades são fundamentais para 
                quem deseja não apenas executar projetos de IA, mas liderar equipes e influenciar decisões estratégicas 
                em organizações de qualquer porte.
              </p>
              
              <p className="text-lg text-pure-white leading-relaxed mb-8">
                Um diferencial único da QuantumAI é o <strong>networking exclusivo e acesso direto às comunidades 
                OpenAI e Y Combinator</strong>. Você terá oportunidades de conectar-se com empreendedores, investidores 
                e líderes tecnológicos que estão moldando o futuro da Inteligência Artificial, abrindo portas para 
                colaborações, parcerias e oportunidades de carreira que não estão disponíveis em outros programas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios e Resultados Section */}
      <section className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal-black mb-6">
              Benefícios e <span className="text-cta-orange">Resultados</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-charcoal-black leading-relaxed">
                Ao concluir a QuantumAI, você estará preparado para acelerar significativamente sua carreira, 
                seja assumindo posições de liderança em empresas de tecnologia, lançando sua própria startup 
                baseada em IA, ou consultando para organizações que buscam transformação digital. Suas habilidades 
                aprimoradas de negociação abrirão portas para oportunidades de maior valor, enquanto sua rede de 
                contatos exclusiva proporcionará acesso contínuo a insights, parcerias e investimentos que podem 
                transformar suas ideias em realidade.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-cta-orange to-cta-orange/80 text-pure-white">
              <CardContent className="p-0">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Acelere sua carreira</h3>
                <p className="text-pure-white/90">
                  Posicione-se como especialista em IA e conquiste oportunidades de liderança 
                  em empresas de tecnologia globais.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-cta-orange">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-cta-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-charcoal-black mb-4">Conecte-se com líderes do setor</h3>
                <p className="text-charcoal-black">
                  Acesse uma rede exclusiva de empreendedores, investidores e especialistas 
                  das comunidades Y Combinator e OpenAI.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-charcoal-black to-charcoal-black/90 text-pure-white">
              <CardContent className="p-0">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Acesse conteúdos exclusivos</h3>
                <p className="text-gray-300">
                  Materiais premium, casos de estudo reais e metodologias desenvolvidas 
                  nas melhores universidades do mundo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 bg-charcoal-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-pure-white mb-6">
              <span className="text-cta-orange">Depoimentos</span> dos Mentorados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-pure-white">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cta-orange rounded-full flex items-center justify-center text-pure-white font-bold text-lg mr-4">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal-black">Marina Silva</h4>
                    <p className="text-sm text-gray-600">CTO, TechStart Brasil</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal-black italic">
                  "A QuantumAI transformou completamente minha visão sobre IA. Em 8 semanas, 
                  consegui liderar a implementação de machine learning na nossa startup e 
                  captamos R$ 2M em investimento."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-pure-white">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cta-orange rounded-full flex items-center justify-center text-pure-white font-bold text-lg mr-4">
                    R
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal-black">Roberto Santos</h4>
                    <p className="text-sm text-gray-600">Head of AI, Banco Digital</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal-black italic">
                  "O networking foi incrível. Através dos contatos da QuantumAI, 
                  consegui uma posição de Head of AI em um dos maiores bancos digitais 
                  do país. O salário triplicou!"
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-pure-white">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cta-orange rounded-full flex items-center justify-center text-pure-white font-bold text-lg mr-4">
                    A
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal-black">Ana Costa</h4>
                    <p className="text-sm text-gray-600">Founder, AI Solutions</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal-black italic">
                  "Lancei minha empresa de soluções em IA após a QuantumAI. 
                  As estratégias de negociação me ajudaram a fechar contratos 
                  de R$ 500K no primeiro ano. Resultado extraordinário!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="inscricao" className="py-20 bg-charcoal-black text-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Última Chance para a <span className="text-cta-orange">Próxima Turma</span>
          </h2>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-gray-300 leading-relaxed">
              Restam apenas <strong className="text-cta-orange">12 vagas</strong> para a turma que inicia em 
              <strong className="text-cta-orange"> 5 de Setembro de 2025</strong>. Este é um investimento de 
              <strong className="text-cta-orange"> R$ 4.997</strong> que pode transformar sua carreira para sempre. 
              Oferecemos <strong className="text-cta-orange">garantia total de 30 dias</strong> - se não ficar 
              completamente satisfeito, devolvemos 100% do seu investimento. Não perca esta oportunidade única 
              de aprender com quem foi treinado pelas melhores universidades do mundo.
            </p>
          </div>

          <div className="space-y-6">
            <Button 
              onClick={() => setIsContactFormOpen(true)}
              className="bg-cta-orange hover:bg-cta-orange/90 text-pure-white px-12 py-6 text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Inscreva-se Agora
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <p className="text-sm text-gray-400">
              Ou agende uma conversa para esclarecer suas dúvidas
            </p>
            
            <Button 
              onClick={handleScheduleCall}
              variant="outline"
              className="border-cta-orange text-cta-orange hover:bg-cta-orange hover:text-pure-white px-8 py-3 rounded-lg transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Conversa
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-black text-pure-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                Quantum<span className="text-cta-orange">AI</span>
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Transformando profissionais através da Inteligência Artificial com 
                metodologias das melhores universidades do mundo.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/danielrochaoficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cta-orange transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/me.danielrocha/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cta-orange transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://x.com/DanielRochaOfc1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cta-orange transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:comercial@extremesales.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cta-orange transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('sobre')}
                    className="text-gray-400 hover:text-cta-orange transition-colors"
                  >
                    Sobre a QuantumAI
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('programa')}
                    className="text-gray-400 hover:text-cta-orange transition-colors"
                  >
                    Programa
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('depoimentos')}
                    className="text-gray-400 hover:text-cta-orange transition-colors"
                  >
                    Depoimentos
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>comercial@extremesales.com.br</li>
                <li>11 93227-1961</li>
                <li>Alphaville-SP, Brasil</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 QuantumAI. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-cta-orange transition-colors text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-cta-orange transition-colors text-sm">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  )
}

export default App