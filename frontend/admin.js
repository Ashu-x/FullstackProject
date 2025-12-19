const API = "http://localhost:5000/api";

/* LOAD ALL DATA */
window.onload = () => {
    loadProjects();
    loadClients();
    loadContacts();
    loadNewsletters();
};

/* PROJECTS */
async function loadProjects() {
    const res = await fetch(`${API}/projects`);
    const data = await res.json();

    document.getElementById("projectList").innerHTML =
        data.data.map(p => `
      <p>${p.name}</p>
    `).join("");
}

document.getElementById("projectForm").addEventListener("submit", async e => {
    e.preventDefault();
    await fetch(`${API}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            image: pImage.value,
            name: pName.value,
            description: pDesc.value
        })
    });
    e.target.reset();
    loadProjects();
});

/* CLIENTS */
async function loadClients() {
    const res = await fetch(`${API}/clients`);
    const data = await res.json();

    document.getElementById("clientList").innerHTML =
        data.data.map(c => `<p>${c.name} (${c.designation})</p>`).join("");
}

document.getElementById("clientForm").addEventListener("submit", async e => {
    e.preventDefault();
    await fetch(`${API}/clients`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            image: cImage.value,
            name: cName.value,
            designation: cDesignation.value,
            description: cDesc.value
        })
    });
    e.target.reset();
    loadClients();
});

/* CONTACT FORM DATA */
async function loadContacts() {
    const res = await fetch(`${API}/contacts`);
    const data = await res.json();

    document.getElementById("contactTable").innerHTML =
        data.data.map(c => `
      <tr>
        <td>${c.name}</td>
        <td>${c.email}</td>
        <td>${c.mobile}</td>
        <td>${c.city}</td>
      </tr>
    `).join("");
}

/* NEWSLETTER */
async function loadNewsletters() {
    const res = await fetch(`${API}/newsletters`);
    const data = await res.json();

    document.getElementById("newsletterList").innerHTML =
        data.data.map(n => `<li>${n.email}</li>`).join("");
}
