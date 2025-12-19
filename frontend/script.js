const API = "http://localhost:5000/api";

/* LOAD PROJECTS */
fetch(`${API}/projects`)
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("projectsContainer");
        container.innerHTML = data.data.map(p => `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
      </div>
    `).join("");
    });

/* LOAD CLIENTS */
fetch(`${API}/clients`)
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("clientsContainer");
        container.innerHTML = data.data.map(c => `
      <div class="card">
        <img src="${c.image}">
        <h3>${c.name}</h3>
        <p>${c.designation}</p>
        <p>${c.description}</p>
      </div>
    `).join("");
    });

/* CONTACT FORM */
document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();

    fetch(`${API}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            mobile: mobile.value,
            city: city.value
        })
    }).then(() => {
        document.getElementById("contactMsg").innerText = "Message sent successfully!";
        e.target.reset();
    });
});

/* NEWSLETTER */
document.getElementById("newsletterForm").addEventListener("submit", e => {
    e.preventDefault();

    fetch(`${API}/newsletters`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail.value })
    }).then(() => {
        document.getElementById("newsletterMsg").innerText = "Subscribed successfully!";
        e.target.reset();
    });
});
