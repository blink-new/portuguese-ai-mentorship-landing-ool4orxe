import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Mail, Phone, MapPin, X } from 'lucide-react'

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Interesse na Mentoria QuantumAI')
    const body = encodeURIComponent(`
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem:
${formData.message}
    `)
    
    window.open(`mailto:comercial@extremesales.com.br?subject=${subject}&body=${body}`)
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' })
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardContent className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-royal-navy">
              Inscreva-se na <span className="text-antique-gold">QuantumAI</span>
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-500 hover:text-royal-navy"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-royal-navy mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-antique-gold focus:border-antique-gold transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-royal-navy mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-antique-gold focus:border-antique-gold transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-royal-navy mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-antique-gold focus:border-antique-gold transition-colors"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-royal-navy mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-antique-gold focus:border-antique-gold transition-colors resize-none"
                placeholder="Conte-nos sobre seus objetivos com IA..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-antique-gold hover:bg-antique-gold/90 text-royal-navy font-semibold py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Enviar Inscrição
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-royal-navy mb-4">Informações de Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 text-antique-gold mr-3" />
                <span>comercial@extremesales.com.br</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 text-antique-gold mr-3" />
                <span>11 93227-1961</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 text-antique-gold mr-3" />
                <span>Alphaville-SP, Brasil</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}