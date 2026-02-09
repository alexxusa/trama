import { Button } from "@/components/ui/button";
import { ShoppingBag, Truck, RefreshCw, Heart, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Design: Vintage Feminino Elegante
 * - Tipografia em camadas: Playfair Display (títulos), Montserrat (subtítulos), Lato (corpo)
 * - Cores: Amarelo dourado (#e6af4b), Verde menta (#81ad96), Rosa coral (#f1855f)
 * - Layout: Assimétrico com espaço negativo generoso
 * - Animações: Suaves e premium com micro-interações refinadas
 */

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const whatsappLink = "https://wa.me/message/QUQO4LT6AH55B1";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Segunda Trama" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-[#2d2d2d]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Segunda Trama
              </h1>
              <p className="text-xs text-gray-500">Brechó & Outlet</p>
            </div>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm md:text-base"
          >
            Garimpar Peças
          </a>
        </div>
      </header>

      {/* Hero Section com Vídeo de Fundo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Vídeo de Fundo */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={isMobile ? "https://files.manuscdn.com/user_upload_by_module/session_file/310519663153632019/CeCbERyecYoceYNu.mp4" : "https://files.manuscdn.com/user_upload_by_module/session_file/310519663153632019/xZGNcWbdmEBeAzVN.mp4"} type="video/mp4" />
        </video>

        {/* Overlay escuro para legibilidade */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Conteúdo do Hero */}
        <div className="relative z-10 container text-center text-white px-4 md:px-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Segunda Trama
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Brechó Feminino Premium & Outlet de Grandes Magazines
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Cada peça já viveu uma história e está pronta pra viver a próxima com você.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#e6af4b] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Quero Garimpar Minhas Peças
          </a>
        </div>
      </section>

      {/* Seção: Sobre a Segunda Trama */}
      <section className="section-padding container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="divider-gold mb-6" />
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              O que é Segunda Trama?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A <strong>Segunda Trama</strong> é um brechó feminino online e outlet de grandes magazines, especializado em roupas, calçados e acessórios femininos de marcas nacionais e internacionais.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Trabalhamos com curadoria criteriosa, oferecendo peças selecionadas em excelente estado, com preços acessíveis e foco em moda consciente.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              "Se você ama garimpar com propósito e quer se sentir bem nas roupas que usa, vem acompanhar os próximos achados."
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Explorar Coleção
            </a>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-[#81ad96] to-[#f1855f] rounded-2xl h-96 flex items-center justify-center shadow-lg">
              <div className="text-center text-white">
                <Heart className="w-24 h-24 mx-auto mb-4 opacity-80" />
                <p className="text-2xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Moda Consciente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Por que Escolher */}
      <section className="section-padding section-alt">
        <div className="container">
          <div className="text-center mb-16">
            <div className="divider-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Por que Escolher Segunda Trama?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Qualidade, variedade e preços que fazem sentido
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: "Curadoria Cuidadosa",
                desc: "Cada peça passa por avaliação de qualidade, conservação e estilo"
              },
              {
                icon: Star,
                title: "Marcas Premium",
                desc: "Renner, Riachuelo, C&A, Farm, Animale, Zara, Mango e muito mais"
              },
              {
                icon: Heart,
                title: "Preços Acessíveis",
                desc: "De R$ 19,90 a R$ 299,90 - moda de qualidade para todos"
              }
            ].map((item, idx) => (
              <div key={idx} className="card-elegant group">
                <item.icon className="w-12 h-12 text-[#e6af4b] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção: Tipos de Roupas */}
      <section className="section-padding container">
        <div className="text-center mb-16">
          <div className="divider-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nossa Curadoria de Moda
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre tudo o que você procura em um só lugar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Vestidos (casual, midi, social e festa)",
            "Blusas, Camisas e Camisetas",
            "Saias, Shorts e Bermudas",
            "Calças e Jeans",
            "Macaquinhos e Conjuntos",
            "Casacos e Peças de Meia-Estação",
            "Bolsas Femininas",
            "Calçados",
            "Acessórios Selecionados"
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#e6af4b] transition-colors">
              <p className="text-lg font-semibold text-[#2d2d2d]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção: Marcas */}
      <section className="section-padding section-alt">
        <div className="container">
          <div className="text-center mb-16">
            <div className="divider-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Marcas que Trabalhamos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#e6af4b]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Marcas Nacionais
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Farm, Animale, Arezzo, Schutz, Le Lis Blanc, Toli, Carmin, Dimy, M. Officer, Chamelle, Lez a Lez, Zinzane, Someday
              </p>
              <p className="text-lg font-semibold text-[#524217]">De R$ 19,90 a R$ 249,90</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#81ad96]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Marcas Internacionais
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Zara, Mango, Stradivarius, Bershka, Guess, Tommy Hilfiger
              </p>
              <p className="text-lg font-semibold text-[#524217]">De R$ 29,90 a R$ 299,90</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Envios e Retiradas */}
      <section className="section-padding container">
        <div className="text-center mb-16">
          <div className="divider-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Envios & Retiradas
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Retirada Agendada",
              items: ["Mínimo de 24h", "Grande Florianópolis", "Sem ponto fixo - agendamos com você"],
              color: "bg-[#81ad96]"
            },
            {
              title: "Envios Brasil",
              items: ["Correios (PAC ou SEDEX)", "Jadlog", "Frete por conta do comprador", "Postagem em até 2 dias úteis"],
              color: "bg-[#e6af4b]"
            },
            {
              title: "Entrega Local",
              items: ["Transportadora Disk Tenha", "R$ 14 - área continental", "R$ 15 - ilha", "Entrega em até 2 dias úteis"],
              color: "bg-[#f1855f]"
            }
          ].map((section, idx) => (
            <div key={idx} className={`${section.color} rounded-xl p-8 text-white`}>
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Truck className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Seção: Sacolinha */}
      <section className="section-padding section-alt">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-[#81ad96] to-[#e6af4b] rounded-2xl h-80 flex items-center justify-center shadow-lg">
                <ShoppingBag className="w-32 h-32 text-white opacity-80" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="divider-gold mb-6" />
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Sacolinha
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Prático, econômico e seguro</strong>
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Você pode ir fazendo suas compras e nós guardamos suas peças na Segunda Trama, identificadas com seu nome, até o frete compensar para você.
              </p>
              <div className="bg-[#faf8f3] border-l-4 border-[#e6af4b] p-6 rounded mb-6">
                <p className="font-semibold text-[#524217] mb-2">⏳ Prazo da Sacolinha:</p>
                <p className="text-gray-700">Até 30 dias</p>
              </div>
              <p className="text-sm text-red-600 italic">
                ⚠️ Peças na sacolinha não entram na política de trocas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Política de Trocas */}
      <section className="section-padding container">
        <div className="text-center mb-16">
          <div className="divider-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Política de Trocas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recebeu seu pedido e não ficou satisfeita? A gente te explica como funciona 🤍
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="card-elegant">
            <h3 className="text-2xl font-bold mb-6 text-[#e6af4b]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Trocas por Envio
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <RefreshCw className="w-5 h-5 text-[#81ad96] flex-shrink-0 mt-1" />
                <span>Prazo: até 7 dias corridos após o recebimento</span>
              </li>
              <li className="flex gap-3">
                <RefreshCw className="w-5 h-5 text-[#81ad96] flex-shrink-0 mt-1" />
                <span>Crédito equivale ao valor pago pela peça devolvida</span>
              </li>
              <li className="flex gap-3">
                <RefreshCw className="w-5 h-5 text-[#81ad96] flex-shrink-0 mt-1" />
                <span>Crédito liberado após análise da conservação</span>
              </li>
              <li className="flex gap-3">
                <RefreshCw className="w-5 h-5 text-[#81ad96] flex-shrink-0 mt-1" />
                <span>Frete de reenvio por conta da cliente</span>
              </li>
            </ul>
          </div>

          <div className="card-elegant">
            <h3 className="text-2xl font-bold mb-6 text-[#f1855f]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Não Trocamos
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-[#f1855f] font-bold">✕</span>
                <span>Peças de sacolinha</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#f1855f] font-bold">✕</span>
                <span>Peças promocionais</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#f1855f] font-bold">✕</span>
                <span>Peças de saldo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#f1855f] font-bold">✕</span>
                <span>Créditos em ações promocionais</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-[#e6af4b] to-[#f1855f] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Pronta para Garimpar?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Cada peça já viveu uma história e está pronta pra viver a próxima com você.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#e6af4b] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Começar Agora →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d2d2d] text-white section-padding">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Segunda Trama
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Brechó feminino online com moda consciente e preços acessíveis.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e6af4b] hover:underline"
              >
                WhatsApp
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Informações</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Política de Trocas</li>
                <li>Envios e Retiradas</li>
                <li>Sobre Nós</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Segunda Trama. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
