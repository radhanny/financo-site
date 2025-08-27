import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { MessageCircle } from "lucide-react";

export default function App() {
  const phone = "5511998633619";

  const links = {
    header: `https://wa.me/${phone}?text=${encodeURIComponent(
      "Olá, gostaria de falar com um atendente."
    )}`,
    cartoes: `https://wa.me/${phone}?text=${encodeURIComponent(
      "Olá, quero saber mais sobre os cartões Finanço+."
    )}`,
    emprestimos: `https://wa.me/${phone}?text=${encodeURIComponent(
      "Olá, quero informações sobre os empréstimos disponíveis."
    )}`,
    cofrinhos: `https://wa.me/${phone}?text=${encodeURIComponent(
      "Olá, gostaria de saber mais sobre os cofrinhos."
    )}`,
    cdi: `https://wa.me/${phone}?text=${encodeURIComponent(
      "Olá, quero detalhes sobre os investimentos CDI 100% e 115%."
    )}`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Finanço+</h1>
        <a href={links.header} target="_blank" rel="noopener noreferrer">
          <Button className="flex items-center gap-2 bg-green-600 text-white">
            <MessageCircle size={18} /> Fale Conosco
          </Button>
        </a>
      </header>

      {/* Hero */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">
          Soluções Financeiras Simples e Rápidas
        </h2>
        <p className="text-lg mb-6">
          Cartões, Empréstimos, Cofrinhos e Investimentos em CDI até 115%
        </p>
        {/* Botão Mercado Pago */}
        <a
          href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SUA_PREF_ID"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
            Pagar com Mercado Pago
          </Button>
        </a>
        {/* Botão WhatsApp */}
        <div className="mt-6">
          <a href={links.header} target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2">
              <MessageCircle size={20} /> Fale Conosco pelo WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Produtos */}
      <section className="grid md:grid-cols-2 gap-6 px-6 pb-20">
        {[
          {
            title: "Nossos Cartões",
            desc: "Cartões modernos com benefícios exclusivos.",
            link: links.cartoes,
          },
          {
            title: "Empréstimos",
            desc: "Taxas acessíveis e aprovação rápida.",
            link: links.emprestimos,
          },
          {
            title: "Cofrinhos",
            desc: "Guarde seu dinheiro de forma prática.",
            link: links.cofrinhos,
          },
          {
            title: "Investimentos CDI",
            desc: "Renda fixa garantida em 100% ou 115% do CDI.",
            link: links.cdi,
          },
        ].map((item, i) => (
          <Card key={i} className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                {item.title}
              </h3>
              <p>{item.desc}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                  Fale com Atendente
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Botão Flutuante WhatsApp */}
      <a
        href={links.header}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2"
      >
        <MessageCircle size={22} /> WhatsApp
      </a>
    </div>
  );
}
