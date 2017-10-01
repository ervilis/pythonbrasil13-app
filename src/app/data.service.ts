import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(public http:Http) { }

  cars = [
    'Ford','Chevrolet','Buick'
  ];


  getSchedule() {
	var schedule = {
            presentations: [{
                    "name": "sexta",
                    "label": "Sexta-feira",
                    "items": [
                        [
                            "08:00", [{
                                "title": "Credenciamento",
                                "room": "",
                                "description": ""
                            }]
                        ],
                        [
                            "09:00", [{
                                "title": "Abertura",
                                "room": "Auditório",
                                "description": "Comunidade Python MG"
                            }]
                        ],
                        [
                            "09:40", [{
                                "title": "Paola Katherine",
                                "room": "Auditório",
                                "description": "Keynote"
                            }]
                        ],
                        [
                            "10:30", [{
                                "title": "Coffee-break",
                                "room": "Aquamarine",
                                "description": ""
                            }]
                        ],
                        [
                            "11:00", [{
                                    "title": "Jessica Temporal",
                                    "room": "Auditório",
                                    "description": "Serenata de Amor: Inteligência artificial usando dados abertos governamentais"
                                },
                                {
                                    "title": "Tiago Assunção",
                                    "room": "Sala Amethyst",
                                    "description": "Python na Manutenção de mais de 100 mil embarcados"
                                },
                                {
                                    "title": "Ryllari Santana",
                                    "room": "Sala Chrystal",
                                    "description": "Como NÃO programar em Python: crimes dolosos e com agravante"
                                }
                            ]
                        ],
                        [
                            "11:40", [{
                                    "title": "Elinaldo Monteiro",
                                    "room": "Auditório",
                                    "description": "Bots (automatizando tarefas) um funcionário que não reclama!"
                                },
                                {
                                    "title": "Hélio de Meira Lins",
                                    "room": "Sala Amethyst",
                                    "description": "Decifrando as Runas dos Anões com Python e Machado de Assis"
                                },
                                {
                                    "title": "Bruno Rocha",
                                    "room": "Sala Chrystal",
                                    "description": "A Qualidade do Ecossistema Python - e o que podemos fazer para mante-la"
                                }
                            ]
                        ],
                        [
                            "12:15", [{
                                "title": "Almoço",
                                "room": "",
                                "description": ""
                            }]
                        ],
                        [
                            "14:00", [{
                                    "title": "Nicolle Cysneiros",
                                    "room": "Auditório",
                                    "description": "GraphQL: nem sempre REST é a melhor alternativa para sua API"
                                },
                                {
                                    "title": "Gustavo Pantuza",
                                    "room": "Sala Amethyst",
                                    "description": "Wrapping C libraries into Python interfaces"
                                },
                                {
                                    "title": "Daniela Petruzalek",
                                    "room": "Sala Chrystal",
                                    "description": "Big Data com Apache Spark na Globo.com"
                                }
                            ]
                        ],
                        [
                            "14:40", [{
                                    "title": "Osvaldo Santana",
                                    "room": "Auditório",
                                    "description": "Plataforma distribuída de Microserviços ou, como a Olist funciona"
                                },
                                {
                                    "title": "Flavio Juvenal",
                                    "room": "Sala Amethyst",
                                    "description": "Prevenindo dores de cabeça com linters e checagens automáticas"
                                },
                                {
                                    "title": "Gileno Filho",
                                    "room": "Sala Chrystal",
                                    "description": "Criando Web Crawlers com Scrapy e Selenium para páginas com Javascript"
                                }
                            ]
                        ],
                        [
                            "15:20", [{
                                    "title": "Artur Rodrigues",
                                    "room": "Auditório",
                                    "description": "Python na Infraestrutura MySQL do Facebook"
                                },
                                {
                                    "title": "Julio Melanda",
                                    "room": "Sala Amethyst",
                                    "description": "Desafios e vantagens do trabalho remoto freelancer Python"
                                },
                                {
                                    "title": "Bianca Rosa",
                                    "room": "Sala Chrystal",
                                    "description": "Redes Neurais com Python e Scikit"
                                }
                            ]
                        ],
                        [
                            "16:00", [{
                                "title": "Coffee-break",
                                "room": "Aquamarine",
                                "description": ""
                            }]
                        ],
                        [
                            "16:30", [{
                                "title": "Lightning Talks",
                                "room": "Auditório",
                                "description": ""
                            }]
                        ],
                        [
                            "17:10", [{
                                "title": "Manuel Kaufmann",
                                "room": "Auditório",
                                "description": "Keynote"
                            }]
                        ],
                        [
                            "18:00", [{
                                "title": "Encerramento",
                                "room": "Auditório",
                                "description": ""
                            }]
                        ]
                    ]
                },
                {
                    "name": "sabado",
                    "label": "Sábado",
                    "items": [
                        [
                            "08:30", [{
                                "title": "Credenciamento",
                                "room": "",
                                "description": ""
                            }]
                        ],
                        [
                            "09:00", [{
                                "title": "Lightning Talks",
                                "room": "Auditório",
                                "description": ""
                            }]
                        ],
                        [
                            "09:40", [{
                                "title": "Rodolpho Eckhardt",
                                "room": "Auditório",
                                "description": "Keynote"
                            }]
                        ],
                        [
                            "10:30", [{
                                "title": "Coffee-break",
                                "room": "Aquamarine",
                                "description": ""
                            }]
                        ],
                        [
                            "11:00", [{
                                    "title": "Paula Grangeiro",
                                    "room": "Auditório",
                                    "description": "Agilizando o ciclo de desenvolvimento de software com a ajuda de testes unitários"
                                },
                                {
                                    "title": "Lais Varejão",
                                    "room": "Sala Amethyst",
                                    "description": "Salvando grandes projetos"
                                },
                                {
                                    "title": "Diego \"Dukão\" Guimarães",
                                    "room": "Sala Chrystal",
                                    "description": "Kivy: Python no celular e em vários outros lugares!"
                                }
                            ]
                        ],
                        [
                            "11:40", [{
                                    "title": "Henrique Bastos",
                                    "room": "Auditório",
                                    "description": "The Walking Dev"
                                },
                                {
                                    "title": "Kátia Nakamura",
                                    "room": "Sala Amethyst",
                                    "description": "Django Migrations: para entender e perder o medo"
                                },
                                {
                                    "title": "Douglas Bastos",
                                    "room": "Sala Chrystal",
                                    "description": "Descomplicando os mocks"
                                }
                            ]
                        ],
                        [
                            "12:15", [{
                                "title": "Almoço",
                                "room": "",
                                "description": ""
                            }]
                        ],
                        [
                            "14:00", [{
                                    "title": "Diogo Martins",
                                    "room": "Auditório",
                                    "description": ""
                                },
                                {
                                    "title": "Associação Python Brasil",
                                    "room": "Sala Amethyst",
                                    "description": "Reunião da associação ApyB"
                                },
                                {
                                    "title": "Álvaro \"Turicas\" Justen",
                                    "room": "Sala Chrystal",
                                    "description": "Gênero e Número: Python ajudando nas questões de gênero brasileiras"
                                }
                            ]
                        ],
                        [
                            "14:40", [{
                                    "title": "Alice Adativa",
                                    "room": "Auditório",
                                    "description": "Python, ciência dos dados e redes sociais: uma combinação poderosa"
                                },
                                {
                                    "title": "Associação Python Brasil",
                                    "room": "Sala Amethyst",
                                    "description": "Reunião da associação ApyB"
                                },
                                {
                                    "title": "Thomaz Reis",
                                    "room": "Sala Chrystal",
                                    "description": "Generators e Programação Assincrona com Python"
                                }
                            ]
                        ],
                        [
                            "15:20", [{
                                    "title": "Paula Santos",
                                    "room": "Auditório",
                                    "description": "Análise de imagens e machine learning utilizando Python e openCV"
                                },
                                {
                                    "title": "Associação Python Brasil",
                                    "room": "Sala Amethyst",
                                    "description": "Reunião da associação ApyB"
                                },
                                {
                                    "title": "Alan Justino",
                                    "room": "Sala Chrystal",
                                    "description": "Python Runtime sem GIL em Golang: Grumpy"
                                }
                            ]
                        ],
                        [
                            "16:00", [{
                                "title": "Coffee-break",
                                "room": "Aquamarine",
                                "description": ""
                            }]
                        ],
                        [
                            "16:30", [{
                                "title": "Lightning Talks",
                                "room": "Auditório",
                                "description": ""
                            }]
                        ],
                        [
                            "17:10", [{
                                "title": "Allison Kaptur",
                                "room": "Auditório",
                                "description": "Keynote"
                            }]
                        ],
                        [
                            "18:00", [{
                                "title": "Encerramento",
                                "room": "Auditório",
                                "description": ""
                            }]
                        ]
                    ]
                },
                {
                    "name": "domingo",
                    "label": "Domingo",
                    "items": [
                        [
                            "08:30", [{
                                "title": "Credenciamento",
                                "room": "",
                                "description": ""
                            }]
                        ],
                        [
                            "09:00", [{
                                "title": "Lightning Talks",
                                "room": "Auditório",
                                "description": ""
                            }]
                        ],
                        [
                            "09:40", [{
                                    "title": "Darlene Medeiros",
                                    "room": "Auditório",
                                    "description": "Padrões Arquiteturais, muito além do MVC"
                                },
                                {
                                    "title": "Rebeca Sarai",
                                    "room": "Sala Amethyst",
                                    "description": "Previsão de séries temporais com PyData e Inteligência Artificial"
                                },
                                {
                                    "title": "Celso Crivelaro",
                                    "room": "Sala Chrystal",
                                    "description": "Projetos de APIs: O que pensar para APIs Públicas, Microsserviços e SPAs"
                                }
                            ]
                        ],
                        [
                            "10:15", [{
                                "title": "Coffee-break",
                                "room": "Aquamarine",
                                "description": ""
                            }]
                        ],
                        [
                            "10:45", [{
                                    "title": "Talita Rossari",
                                    "room": "Auditório",
                                    "description": "O Flask roubou meu coração"
                                },
                                {
                                    "title": "Bernardo Fontes",
                                    "room": "Sala Amethyst",
                                    "description": "Navegando por grafos com Python"
                                },
                                {
                                    "title": "Renato Oliveira",
                                    "room": "Sala Chrystal",
                                    "description": "Trabalhando com código legado"
                                }
                            ]
                        ],
                        [
                            "11:25", [{
                                    "title": "Navid Sheikhol",
                                    "room": "Auditório",
                                    "description": "Facebook Job Engine (FBJE): a framework for developing scalable workflows in Python"
                                },
                                {
                                    "title": "Débora Correia",
                                    "room": "Sala Amethyst",
                                    "description": "O que desenvolvedores deveriam aprender sobre design?"
                                },
                                {
                                    "title": "Ana Paula Mendes",
                                    "room": "Sala Chrystal",
                                    "description": "Começando com Python - Aprendendo para ensinar, a melhor forma de programar!"
                                }
                            ]
                        ],
                        [
                            "12:00", [{
                                "title": "Almoço",
                                "room": "",
                                "description": ""
                            }]
                        ],
                        [
                            "13:40", [{
                                    "title": "Pyladies Brasil",
                                    "room": "Auditório",
                                    "description": "PyLadies e Django Girls promovendo a diversidade na tecnologia"
                                },
                                {
                                    "title": "Anderson Resende",
                                    "room": "Sala Amethyst",
                                    "description": "A Programação Funcional em Python, de forma simples"
                                },
                                {
                                    "title": "Laura Panzariello",
                                    "room": "Sala Chrystal",
                                    "description": "Provisionamento de redes no data center Globo.com com Python"
                                }
                            ]
                        ],
                        [
                            "14:20", [{
                                    "title": "Rael Max",
                                    "room": "Auditório",
                                    "description": "O fim de uma era: os desafios de transformar um monolito de 8 anos em microserviços"
                                },
                                {
                                    "title": "Carlos Henrique Coêlho",
                                    "room": "Sala Amethyst",
                                    "description": "Python e tipagem estática"
                                },
                                {
                                    "title": "Matheus Souza Fernandes",
                                    "room": "Sala Chrystal",
                                    "description": "Usando Python e Django para ampliar a democracia digital"
                                }
                            ]
                        ],
                        [
                            "15:00", [{
                                    "title": "Filipe Ximenes",
                                    "room": "Auditório",
                                    "description": "(Quase) Tudo que você precisa saber sobre tarefas assíncronas"
                                },
                                {
                                    "title": "Carla Souza",
                                    "room": "Sala Amethyst",
                                    "description": "Linha de Comando: como ser bem implementada e segura"
                                },
                                {
                                    "title": "Ole Peter Smith",
                                    "room": "Sala Chrystal",
                                    "description": "Geometria Computacional de Diferencial com Python e SVG: As Curvas da Bosta"
                                }
                            ]
                        ],
                        [
                            "15:40", [{
                                "title": "Coffee-break",
                                "room": "Aquamarine",
                                "description": ""
                            }]
                        ],
                        [
                            "16:10", [{
                                "title": "Lightning Talks",
                                "room": "Auditório",
                                "description": ""
                            }]
                        ],
                        [
                            "16:50", [{
                                "title": "Andrew Godwin",
                                "room": "Auditório",
                                "description": "Keynote"
                            }]
                        ],
                        [
                            "17:40", [{
                                "title": "Encerramento",
                                "room": "Auditório",
                                "description": ""
                            }]
                        ]
                    ]
                }
            ],
            tutorials: [{
                    "name": "segunda",
                    "label": "Segunda-feira",
                    "items": [
                        [
                            "08:30", [{
                                "title": "Coffee-break",
                                "room": "",
                                "description": ""
                            }]
                        ],
                        [
                            "09:00", [{
                                    "title": "Django Girls Workshop",
                                    "room": "Salas 0 e 1",
                                    "description": "Inscreva-se em https://djangogirls.org/belohorizonte/"
                                },
                                {
                                    "title": "Bruno Rocha",
                                    "room": "Sala 2",
                                    "description": "Aprenda Flask criando um CMS e suas extensões. What The Flask?"
                                },
                                {
                                    "title": "Letícia Portella e Jessica Temporal",
                                    "room": "Sala 3",
                                    "description": "Introdução aos Módulos de Análise de Dados"
                                },
                                {
                                    "title": "Roberta Takenaka",
                                    "room": "Sala 4",
                                    "description": "Testes: os primeiros passos"
                                },
                                {
                                    "title": "Felipe Morais",
                                    "room": "Sala 5",
                                    "description": "Dockerizando suas aplicações Python"
                                }
                            ]
                        ],
                        [
                            "12:00", [{
                                "title": "Almoço",
                                "room": "",
                                "description": ""
                            }]
                        ],
                        [
                            "14:00", [{
                                    "title": "Django Girls Workshop",
                                    "room": "Salas 0 e 1",
                                    "description": "Inscreva-se em https://djangogirls.org/belohorizonte/"
                                },
                                {
                                    "title": "Bruno Rocha",
                                    "room": "Sala 2",
                                    "description": "Aprenda Flask criando um CMS e suas extensões. What The Flask?"
                                },
                                {
                                    "title": "Fernando Masanori",
                                    "room": "Sala 3",
                                    "description": "Introdução à Raspagem de Dados"
                                },
                                {
                                    "title": "Tarsis Azevedo",
                                    "room": "Sala 4",
                                    "description": "Estatística para Devs"
                                },
                                {
                                    "title": "Julio Melanda",
                                    "room": "Sala 5",
                                    "description": "Criando meu primeiro jogo com Python"
                                }
                            ]
                        ],
                        [
                            "17:00", [{
                                "title": "Coffee-break",
                                "room": "",
                                "description": ""
                            }]
                        ],
                    ]
                },
                {
                    "name": "terca",
                    "label": "Terça-feira",
                    "items": [
                        [
                            "08:30", [{
                                "title": "Coffee-break",
                                "room": "",
                                "description": ""
                            }]
                        ],
                        [
                            "09:00", [{
                                    "title": "PyLadies São Paulo",
                                    "room": "Sala 0",
                                    "description": "Curso Básico de Python para Iniciantes"
                                },
                                {
                                    "title": "Samuel Sampaio",
                                    "room": "Sala 1",
                                    "description": "Introdução ao GIT (Escolinha do prof. Samuka)"
                                },
                                {
                                    "title": "Felipe Samuel",
                                    "room": "Sala 2",
                                    "description": "Desenvolva sua Rest API complexa em 1 dia"
                                },
                                {
                                    "title": "Nicolle Cysneiros",
                                    "room": "Sala 3",
                                    "description": "APIs Inteligentes com API Star"
                                },
                                {
                                    "title": "Gustavo Henrique Nunes",
                                    "room": "Sala 4",
                                    "description": "Desenvolvimento de um Web Crawler com Python 3"
                                }
                            ]
                        ],
                        [
                            "12:00", [{
                                "title": "Almoço",
                                "room": "",
                                "description": ""
                            }]
                        ],
                        [
                            "14:00", [{
                                    "title": "PyLadies São Paulo",
                                    "room": "Sala 0",
                                    "description": "Curso Básico de Python para Iniciantes"
                                },
                                {
                                    "title": "Renato Oliveira e Bernardo Fontes",
                                    "room": "Sala 1",
                                    "description": "Test Driven Design"
                                },
                                {
                                    "title": "Felipe Samuel",
                                    "room": "Sala 2",
                                    "description": "Desenvolva sua Rest API complexa em 1 dia"
                                },
                                {
                                    "title": "Álvaro \"Turicas\" Justen",
                                    "room": "Sala 3",
                                    "description": "Capturando dados abertos sem dor de cabeça"
                                }
                            ]
                        ],
                        [
                            "17:00", [{
                                "title": "Coffee-break",
                                "room": "",
                                "description": ""
                            }]
                        ],
                    ]
                }
            ],
            sprints: []
        }
    return schedule;
  }

}
