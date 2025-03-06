type Icons =
    | "react"
    | "nextjs"
    | "typescript"
    | "wordpress"
    | "astro"
    | "shadcn"
    | "tailwindcss"
    | "postgresql"
    | "prisma";
interface Projects {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    linkGithub: string;
    tags: Icons[];
}
const projectsIcons: Record<Icons, string> = {
    react: "/icons/LogosReact.svg",
    nextjs: "/icons/DeviconNextjs.svg",
    typescript: "/icons/DeviconTypescript.svg",
    wordpress: "/icons/BiWordpress.svg",
    astro: "/icons/CatppuccinAstro.svg",
    shadcn: "/icons/SimpleIconsShadcnui.svg",
    tailwindcss: "/icons/DeviconTailwindcss.svg",
    postgresql: "/icons/DeviconPostgresql.svg",
    prisma: "/icons/CatppuccinPrisma.svg",
};
const projects: Projects[] = [
    {
        id: crypto.randomUUID(),
        title: "Dashboard de Control Empresarial",
        description:
            "Controla clientes, productos y pedidos con un dashboard en tiempo real para ventas y finanzas.",
        imageUrl: "/assets/projects/sistema_dashboard.webp",
        link: "https://system-dashboard-nextjs-dev.vercel.app/dashboard",
        linkGithub:
            "https://github.com/GonzaloHaag/system_dashboard_nextjs_dev",
        tags: [
            "typescript",
            "nextjs",
            "tailwindcss",
            "postgresql",
            "prisma",
            "shadcn",
        ],
    },
    {
        id: crypto.randomUUID(),
        title: "TesloShop",
        description:
            "Ecommerce con catálogo, carrito, pagos por PayPal, gestión de inventario y compra optimizada",
        imageUrl: "/assets/projects/tesloshop.webp",
        link: "https://gh-tienda-tesloshop.vercel.app/",
        linkGithub: "https://github.com/GonzaloHaag/Teslo-shop",
        tags: [
            "typescript",
            "nextjs",
            "tailwindcss",
            "postgresql",
            "prisma",
            "shadcn",
        ],
    },
    {
        id: crypto.randomUUID(),
        title: "Catálogo Digital con WhatsApp",
        description:
            "Catálogo online para explorar productos y realizar pedidos directamente por WhatsApp.",
        imageUrl: "/assets/projects/catalogo_alibe.webp",
        link: "https://catalogo-alibe.vercel.app/",
        linkGithub: "https://github.com/GonzaloHaag/catalogo_alibe",
        tags: ["react", "typescript", "tailwindcss", "shadcn"],
    },
    {
        id: crypto.randomUUID(),
        title: "Books Challenge",
        description:
            "Busca libros, filtra por categoría y páginas, y organiza tus lecturas favoritas.",
        imageUrl: "/assets/projects/books_challenge.webp",
        link: "https://booskchallenge.netlify.app/",
        linkGithub: "https://github.com/GonzaloHaag/booksChallenge",
        tags: ["react", "typescript","tailwindcss"],
    },
    {
        id: crypto.randomUUID(),
        title: "Baterías Giagnoni",
        description:
            "Landing page para un proveedor líder de baterías en Argentina, con auxilio 24/7 y reciclaje ecológico.",
        imageUrl: "/assets/projects/bateriasgiagnoni.webp",
        link: "https://bateriasgiagnoni.com.ar/",
        linkGithub: "https://github.com/GonzaloHaag/baterias-dg",
        tags: ["astro", "typescript", "tailwindcss"],
    },
    {
        id: crypto.randomUUID(),
        title: "Clon de la WEB de los ESLAND",
        description:
            "Clon interactivo y responsive de los ESLAND, enfocado en demostrar mis habilidades de optimización y desarrollo de código",
        imageUrl: "/assets/projects/clon-esland.webp",
        link: "https://clon-esland-web.vercel.app/",
        linkGithub: "https://github.com/GonzaloHaag/Clon-Esland-Web",
        tags: ["astro", "typescript", "tailwindcss"],
    },
    {
        id: crypto.randomUUID(),
        title: "Servicios viales",
        description:
            "Página web para Servicios viales, empresa lider en importación y distribución de Filtros, Repuestos, GET y Rodajes para equipos pesados",
        imageUrl: "/assets/projects/sv.webp",
        link: "https://sv.com.ar/",
        linkGithub: "https://sv.com.ar/",
        tags: ["wordpress"],
    },
];

window.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".my-button-selector");
    const projectsContainer = document.getElementById(
        "projects-container",
    ) as HTMLDivElement;

    function renderProjects(filter: string) {
        projectsContainer.innerHTML = ""; // Limpiar los proyectos antes de renderizar

        const filteredProjects =
            filter === "all"
                ? projects
                : projects.filter((project) =>
                    project.tags.includes(filter as Icons),
                );

        filteredProjects.forEach((project) => {
            const icons = project.tags
                .map(
                    (tag) =>
                        `
                            <img src="${projectsIcons[tag]}" title="${tag}" alt="${tag}" width="24" height="24" loading="lazy" decoding="async" />
                            `,
                )
                .join("");
            const projectCard = `
              <div class="card">
  <!-- Hover elevation effect -->
  <div
    class="elevation-effect"
    aria-hidden="true"
  ></div>

  <!-- Card Content -->
  <div class="card-content">
    <!-- Glow effect on hover -->
    <div class="glow-effect"></div>

    <!-- Image Container -->
    <div class="img-container">
      <img
        src="${project.imageUrl}"
        alt="${project.title}"
      />
      <div></div>
    </div>

    <!-- Content -->
    <div class="card-info">
      <div class="card-title">
        <h3>
          ${project.title}
        </h3>
      </div>
      <p>
        ${project.description}
      </p>
      <div class="icons-container">
        ${icons}
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="action-buttons">
      <div class="buttons">
        <a href="${project.link}" title="Ver demo" target="_blank" class="link-demo">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 6l2 -2c1 -1 3 -1 4 0l1 1c1 1 1 3 0 4l-5 5c-1 1 -3 1 -4 0M11 18l-2 2c-1 1 -3 1 -4 0l-1 -1c-1 -1 -1 -3 0 -4l5 -5c1 -1 3 -1 4 0"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="28;0"/></path></svg>
          <span class="text-sm">Demo</span>
        </a>
        <a href="${project.linkGithub}" title="Ver código" target="_blank" class="link-codigo">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"/></path></g></svg>
          <span class="text-sm">Código</span>
        </a>
      </div>
    </div>

    <!-- Bottom Gradient Line -->
    <div class="bottom-gradient"></div>
  </div>
</div>


            `;
            projectsContainer.innerHTML += projectCard;
        });
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedTag = button.getAttribute("data-tag");

            // Actualizar clases de botones
            buttons.forEach((btn) => btn.classList.remove("bg-slate-700"));
            button.classList.add("bg-slate-700");

            // Renderizar proyectos filtrados
            renderProjects(selectedTag ?? "all");
        });
    });

    // Renderizar todos los proyectos al inicio
    renderProjects("all");
});