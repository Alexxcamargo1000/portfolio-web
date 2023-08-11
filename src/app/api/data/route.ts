// import { NextResponse } from 'next/server'

// export interface projectProps {
//   id: number
//   name: string
//   description: string
//   image: string
//   gitUrl?: string
//   deployUrl?: string
//   tags: string[]
// }

// export async function GET(request: Request) {
//   const projects: projectProps[] = [
//     {
//       id: 1,
//       name: 'Food Explorer',
//       image: '/food-explorer.png',
//       description:
//         'Este é o front-end da aplicação Explorer Food, desenvolvida em React.js utilizando TypeScript e Styled Components. A aplicação permite que os usuários façam login, visualizem pratos disponíveis para compra, e também possui uma funcionalidade para o usuário administrador cadastrar e excluir pratos.',
//       gitUrl: 'https://github.com/Alexxcamargo1000/food-explorer',
//       deployUrl: 'https://food-explorer-dev.vercel.app/',
//       tags: ['React', 'TypeScript', 'Styled-components'],
//     },
//     {
//       id: 2,
//       name: 'Todo-app',
//       description:
//         'Uma aplicação para organizar tarefas. Feita em React.js, TypeScript e Tailwindcss.',
//       image: '/todo-app.png',
//       gitUrl: 'https://github.com/Alexxcamargo1000/todo-app',
//       deployUrl: 'https://todo-app-alex.vercel.app/',
//       tags: ['React', 'TypeScript', 'Tailwindcss'],
//     },
//     {
//       id: 3,
//       name: 'Habits',
//       description:
//         'O Habits é um web app desenvolvido em React com Tailwindcss e TypeScript que permite aos usuários marcarem seus hábitos diários. Feito na NLW da Rocketseat. O aplicativo se conecta a uma API fornecida por outro projeto chamado Habits API, desenvolvido em Node.js.',
//       image: '/habits.png',
//       gitUrl: 'https://github.com/Alexxcamargo1000/habits',
//       tags: ['React', 'TypeScript', 'Tailwindcss'],
//     },
//     {
//       id: 4,
//       name: 'Calculator',
//       description:
//         'Este projeto consiste em uma aplicação web de uma calculadora simples, construída com ReactJS.',
//       image: '/calculator.png',
//       gitUrl: 'https://github.com/Alexxcamargo1000/calculator-bora-codar',
//       deployUrl: 'https://calculator-bora-codar.vercel.app/',
//       tags: ['React', 'TypeScript', 'Tailwindcss'],
//     },
//     {
//       id: 5,
//       name: 'Grid Animations',
//       description: 'Uma pagina web para estudar grid e animações simples.',
//       image: '/grid-animations.png',
//       gitUrl: 'https://github.com/Alexxcamargo1000/grid-animations',
//       deployUrl: 'https://alexxcamargo1000.github.io/grid-animations/',
//       tags: ['HTML', 'CSS'],
//     },
//     {
//       id: 6,
//       name: 'Pokemon app',
//       description: 'Uma aplicação para estudar consumo de API.',
//       image: '/pokemon.jpg',
//       gitUrl: 'https://github.com/Alexxcamargo1000/poke-app',
//       deployUrl: 'https://poke-app-eta.vercel.app/',
//       tags: ['React js', 'Javascript'],
//     },
//     {
//       id: 7,
//       name: 'Food Explorer API',
//       description:
//         'Essa é uma aplicação em Node.js que utiliza TypeScript, Express, SQLite com Knex. Ela fornece uma API REST para realizar operações de CRUD (Create, Read, Update, Delete) nos pratos. E cadastra o usuário e o usuário adm, o adm pode adicionar ou remover os pratos e os dois podem buscar o prato pelo nome ou ingrediente.',
//       image: '/banner.jpg',
//       gitUrl: 'https://github.com/Alexxcamargo1000/api-food-explorer',
//       deployUrl: 'https://explorer-api.onrender.com/',
//       tags: ['Node.js', 'TypeScript', 'Express', 'SQLite', 'Knex'],
//     },
//     {
//       id: 8,
//       name: 'Rocket movie',
//       description: 'Uma aplicação para anotar seus filmes. Feita em React.js. ',
//       image: '/rocket-movie.png',
//       gitUrl: 'https://github.com/Alexxcamargo1000/rocket-movie',
//       tags: ['React js', 'Javascript'],
//     },
//   ]

//   return NextResponse.json(projects)
// }
