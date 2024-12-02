export const projectContent = {
    pt: {
      projects: [
        {
          title: "Driven Pass",
          intro: "O Driven Pass é uma aplicação de gerenciamento de senhas que utiliza uma abordagem de back-end desenvolvida com o framework Nest.",
          projectDescription:
            "Através de recursos cuidadosamente projetados e implementados, o Driven Pass busca garantir a proteção dos dados do usuário, enquanto mantém uma interface intuitiva e fácil de usar.",
          routes: [
            { path: "/health", description: "Rota para garantir que a aplicação está funcionando." },
            { path: "/users", description: "Rota que possibilita a criação de contas e acesso a elas." },
            { path: "/credentials", description: "Rota que possibilita a criação de credenciais, como o nome do serviço, o usuário que está criando a senha e a senha para o serviço." },
            { path: "/notes", description: "Rota que possibilita a criação de Notas Seguras, que são informações livres em formato de texto." },
            { path: "/cards", description: "Rota que possibilita o cadastro de cartões, tanto de crédito quanto de débito." },
            { path: "/erase", description: "Rota que possibilita que o usuário possa deletar sua conta." },
          ],
          technologies: ["NestJS", "Postgres", "Prisma", "TypeScript", "Jest", "Swagger"],
        },
        {
          title: "Social Postify",
          intro: "O Social Postify é um aplicativo web que permite aos usuários criar e agendar publicações para várias redes sociais, como Facebook, Instagram, Twitter e LinkedIn.",
          projectDescription:
            "O gerenciamento das atividades de mídia social economiza tempo, melhora a consistência do conteúdo e permite que os usuários atinjam seu público de maneira mais estratégica.",
          routes: [
            { path: "/medias", description: "Gerenciar arquivos de mídia como imagens e vídeos." },
            { path: "/posts", description: "Criar, editar e gerenciar publicações." },
            { path: "/publications", description: "Planejar e agendar publicações em redes sociais." },
          ],
          technologies: ["NestJS", "Postgres", "Prisma", "TypeScript", "Jest"],
        },
      ],
    },
    en: {
      projects: [
        {
          title: "Driven Pass",
          intro: "Driven Pass is a password management application that uses a backend approach developed with the Nest framework.",
          projectDescription:
            "With carefully designed and implemented resources, Driven Pass aims to ensure user data protection while maintaining an intuitive and easy-to-use interface.",
          routes: [
            { path: "/health", description: "Route to ensure the application is running." },
            { path: "/users", description: "Route for account creation and access." },
            { path: "/credentials", description: "Route for creating credentials such as the service name, user, and password." },
            { path: "/notes", description: "Route for creating secure notes, which are free-form text information." },
            { path: "/cards", description: "Route for registering credit or debit cards." },
            { path: "/erase", description: "Route that allows the user to delete their account." },
          ],
          technologies: ["NestJS", "Postgres", "Prisma", "TypeScript", "Jest", "Swagger"],
        },
        {
          title: "Social Postify",
          intro: "Social Postify is a web application that allows users to create and schedule posts for various social networks such as Facebook, Instagram, Twitter, and LinkedIn.",
          projectDescription:
            "Managing social media activities saves time, improves content consistency, and allows users to reach their audience more strategically.",
          routes: [
            { path: "/medias", description: "Manage media files such as images and videos." },
            { path: "/posts", description: "Create, edit, and manage posts." },
            { path: "/publications", description: "Plan and schedule posts for social networks." },
          ],
          technologies: ["NestJS", "Postgres", "Prisma", "TypeScript", "Jest"],
        },
      ],
    },
  };
  
export const projectContentTitle = {
    pt: {
        title: "Meus Projetos"
    },
    en: {
        title: "My Projects"
    }
}