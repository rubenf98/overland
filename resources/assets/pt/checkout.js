import { Link } from "react-router-dom";

export const text = {
    titles: ["Dados da sua reserva", "Seguro", "Extras", "Informação de contacto", "Detalhes do condutor", "Condutor Adicional", "Método de pagamento"],
    extras: {
        "Cobertura SCDW": "Cobertura SCDW",
        "Cobertura vidros e pneus": "Cobertura vidros e pneus",
        "Condutor adicional": "Condutor adicional",
        "Cadeira de bébé": "Cadeira de bébé",
        "Assento de criança": "Assento de criança"
    },
    prices: {
        per: "por",
        day: "dia",
        uni: "uni"
    },
    descriptions: {
        manual: "manual",
        automatic: "automático",
        gasoline: "gasolina",
        hybrid: "híbrido",
        eletric: "elétrico",
        diesel: "diesel"
    },
    insurance: {
        button: "selecionado",
        basic: {
            title: "Básico",
            items: ["Cobertura CDW (Collision Damage Waiver)", "Sujeito a franquia / depósito de segurança"]
        },
        premium: {
            title: "Premium",
            items: ["Cobertura Premium - SCDW (Super Collision Damage Waiver)", "Possíveis danos estão cobertos", "Não é necessário cartão de crédito"]
        },
        disclaimer: "Notas: O preço do seguro é por dia. Sujeito a franquia/caução: Básico: 2000€, Padrão: 1000€ e Premium: 600€. Caso o condutor tenha menos de 25 anos, é necessário o Seguro Premium."
    },
    placeholder: {
        date: ["data levantamento", "horário levantamento", "data devolução", "horário devolução"],
        pickup_place: {
            label: "local levantamento",
            options: ["Aeroporto", "Loja"],
            tax: "Fora",
            placeholder: "Indique outra morada ou hotel"
        },
        return_place: {
            label: "local devolução",
            options: ["Aeroporto", "Loja"],
            tax: "Fora",
            placeholder: "Indique outra morada ou hotel"
        },

        client: {
            name: "Nome*",
            cc: "ID/Passaporte*",
            nif: "Número de Identificação Fiscal (NIF)*",
            address: "Morada*",
            country: "País*",
            postal_code: "Código Postal*",
            email: "Email*",
            phone: "Número de telemóvel*",
            local_address: "Endereço local / hotel*",
            company: "Companhia",
            flight: "Número de voo (caso se aplique)",
        },
        driver: {
            name: "Nome*",
            age: "Idade*",
            license: "Número Carta Condução*",
        },
    },
    button: "reservar",
    notice: "Inclui IVA a 22%",
    error: "Ocorreu os seguintes erros com a reserva",
    payments: [{
        id: 1,
        name: "Cartão de crédito",
        image: "/icon/credit_card.svg"
    },
    {
        id: 2,
        name: "Pagar no levantamento",
        image: "/icon/money.svg"
    }],
    notices: [
        "50€ obrigatórios, para limpeza e gestão da viatura.",
        "Confirmo que o condutor tem mais de 25 anos e possui no mínimo 3 anos de carta de condução.",
        (<span>Li e aceito as <Link to="/bookingConditions">condições de reserva</Link> e os <Link to="/conditions">termos e condições</Link>.</span>),
    ],
    info: {
        title: "Outras informações",
        items: [
            "Período Mínimo de Reserva: 4 Dias / 3 Noites;",
            "A Zona de Entrega é em Santana, com possibilidade de entrega no Aeroporto da Madeira (custa 70€);",
            "O motorista deve ter mais de 25 anos e carteira de habilitação mínima de 3 anos."
        ]
    },
    pricesDisclaimer: {
        title: "Preços sazonais",
        paragraph: "Os preços podem variar de acordo com a temporada baixa e alta. Verifique a lista de meses abaixo para saber a quais meses isso se aplica.",
        items: [
            "Temporada baixa: Janeiro, Fevereiro, Março, Abril, Outubro, Novembro e Dezembro;",
            "Temporada alta: Maio, Junho, Julho, Agosto e Setembro.",
        ]
    }
} 
