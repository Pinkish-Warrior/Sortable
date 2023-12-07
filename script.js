document.addEventListener("DOMContentLoaded", () => {
  const superheroContainer = document.getElementById("superhero-container");
  const pageSizeSelector = document.getElementById("pageSize");

  // Fetch superhero data
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  // Display superhero information
  const displaySuperheroes = (superheroes, pageSize) => {
    superheroContainer.innerHTML = ""; // Clear previous content

    // Logic to display superhero information based on pageSize
    // You can use pagination libraries for more advanced handling
    const startIndex = 0;
    const endIndex =
      pageSize === "all"
        ? superheroes.length
        : startIndex + parseInt(pageSize, 10);

    for (let i = startIndex; i < endIndex; i++) {
      const superhero = superheroes[i];
      // Convert powerstats to a formatted string for each superhero
      const powerstatsString = Object.entries(superhero.powerstats)
        .map(([stat, value]) => `<strong>${stat}:</strong> ${value}`)
        .join(", ");

      // Extract and display required information (customize as needed)
      const superheroInfo = `
        <div class="superhero-card">
          <img src="${superhero.images.xs}" alt="${superhero.name}">
          <h2>${superhero.name}</h2>
          <p><strong>Full Name:</strong> ${superhero.biography.fullName}</p>
          <p><strong>Powerstats:</strong> ${powerstatsString}</p>
          <p><strong>Race:</strong> ${superhero.appearance.race}</p>
          <!-- Add more information as needed -->
        </div>
      `;

      superheroContainer.innerHTML += superheroInfo;
    }
  };

  // Handle page size change
  pageSizeSelector.addEventListener("change", async () => {
    const pageSize = pageSizeSelector.value;
    const superheroes = await fetchData();
    displaySuperheroes(superheroes, pageSize);
  });

  // Initial setup
  fetchData().then((superheroes) => {
    const defaultPageSize = "20";
    displaySuperheroes(superheroes, defaultPageSize);
  });
});
