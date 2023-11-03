export const text = {
    close: "cancelar",
    pages: [
        {
            title: "Explora as nossas atividades e reserva a tua experiência na Ilha da Madeira!",
            warning: "Atividades privadas de caminhadas, passeios de bicicleta e coasteering são 120€",
            family: "Todas as reservas com 4 ou mais participantes possuem um desconto familiar de 10% no final da reserva.",
            form: {
                name: {
                    placeholder: "Nome *"
                },
                email: {
                    placeholder: "Email *"
                },
                phone: {
                    placeholder: "Número telemóvel *"
                },
                council: {
                    placeholder: "Zona de recolha *"
                },
                address: {
                    placeholder: "Morada de recolha *"
                },
                activity: {
                    placeholder: "Atividade *"
                },
                country: {
                    placeholder: "País de origem",
                },
                participants: {
                    placeholder: "Número de participantes *",
                },
            },
        },
        {
            title: "Seleciona a data para a tua atividade das que estão disponíveis no calendário"
        },
        {
            title: "Preencha os detalhes de todos os que irão participar na atividade",
            subtitle: "Participante",
            form: {
                person: {
                    name: {
                        placeholder: "Nome",
                    },
                    bday: {
                        placeholder: "Aniversário *"
                    },
                    gender: {
                        placeholder: "Sexo *",
                        options: [
                            "masculino", "feminino"
                        ],
                    },
                    height: {
                        placeholder: "Altura *"
                    },
                    weight: {
                        placeholder: "Peso *"
                    },
                    shoe: {
                        placeholder: "Tamanho sapato *"
                    },
                },
            },
        },
        {
            title: "Detalhes da reserva",
            participantsTitle: "Detalhes dos participantes",
            details: {
                activity: "Atividade",
                name: "Nome da reserva",
                email: "Email",
                phone: "Nº de telemóvel",
                address: "Morada",
                private: "Experiência privada",
                privateAnswer: ['Não', 'Sim'],
                date: "Data da atividade",
                created_at: "Data da reserva",
                country: "País",
                participants: "Nº de participantes",
                council: "Zona de recolha",
                councilPrice: "Preço de transporte",
                price: "Total"
            },
        },
        {
            title: "Está a reservar para si ou está a reservar um voucher be local para outra pessoa?",
            options: ["Estou a reservar para mim", "Estou a oferecer um voucher"]
        },
        {
            title: "Explora as nossas atividades e oferece uma experiência na Ilha da Madeira!",
            warning: "Iremos entrar em contacto após a reserva para decidir a data da atividade",
            family: "Todas as reservas com 4 ou mais participantes possuem um desconto familiar de 10% no final da reserva.",
            form: {

                name: {
                    placeholder: "Nome *"
                },
                email: {
                    placeholder: "Email *"
                },
                phone: {
                    placeholder: "Número telemóvel *"
                },
                indicative: {
                    placeholder: "+351"
                },
                address: {
                    placeholder: "Nome do recetor *"
                },
                activity: {
                    placeholder: "Atividade *"
                },
                participants: {
                    placeholder: "Número de participantes *",
                },
            },
        },
    ],
    submit: "RESERVAR",
    success: {
        message: "A sua reserva foi iniciada!",
        description: "Obrigado pro se juntar a nós. Por favor confirme a reserva no seu email"
    },
    error: {
        message: "Ocorreu um erro inesperado",
    },
    popconfirm: {
        yes: "OK",
        no: "Cancelar",
        message: "Tem a certeza que pretende cancelar? Existem campos preenchidos e todo o progresso irá se perder."
    }
} 