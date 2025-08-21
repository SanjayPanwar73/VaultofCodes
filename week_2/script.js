document.addEventListener("DOMContentLoaded", () => {
  const state = {
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: new Set(),
    education: [],
    experience: []
  };

  // Elements
  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const phoneEl = document.getElementById("phone");
  const summaryEl = document.getElementById("summary");
  const skillChecks = Array.from(document.querySelectorAll(".skill-check"));
  const skillInput = document.getElementById("skillInput");
  const addSkillBtn = document.getElementById("addSkillBtn");
  const skillTags = document.getElementById("skillTags");

  const educationList = document.getElementById("educationList");
  const experienceList = document.getElementById("experienceList");
  const addEducationBtn = document.getElementById("addEducationBtn");
  const addExperienceBtn = document.getElementById("addExperienceBtn");

  const clearBtn = document.getElementById("clearBtn");
  const printBtn = document.getElementById("printBtn");

  const previewName = document.getElementById("previewName");
  const previewContact = document.getElementById("previewContact");
  const previewSummary = document.getElementById("previewSummary");
  const previewSummarySection = document.getElementById("previewSummarySection");
  const previewSkills = document.getElementById("previewSkills");
  const previewSkillsSection = document.getElementById("previewSkillsSection");
  const previewEducation = document.getElementById("previewEducation");
  const previewEducationSection = document.getElementById("previewEducationSection");
  const previewExperience = document.getElementById("previewExperience");
  const previewExperienceSection = document.getElementById("previewExperienceSection");

  const progressMeter = document.getElementById("progressMeter");
  const progressLabel = document.getElementById("progressLabel");

  // Helpers
  const sanitize = (value) => value == null ? "" : String(value).trim();

  function renderSkills() {
    // Build skill set from checks + custom tags already in state
    const checked = skillChecks.filter(c => c.checked).map(c => c.value);
    const custom = Array.from(state.skills);
    const all = [...new Set([...checked, ...custom])];

    // Tags in form
    skillTags.innerHTML = "";
    custom.forEach((skill) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.innerHTML = `${skill} <button type="button" aria-label="Remove ${skill}">✕</button>`;
      tag.querySelector("button").addEventListener("click", () => {
        state.skills.delete(skill);
        renderSkills();
        renderPreview();
        updateProgress();
      });
      skillTags.appendChild(tag);
    });

    // Preview
    previewSkills.innerHTML = "";
    all.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      previewSkills.appendChild(li);
    });

    previewSkillsSection.classList.toggle("hidden", all.length === 0);
  }

  function createEducationRow(data = {}) {
    const card = document.createElement("div");
    card.className = "dynamic-card";
    card.innerHTML = `
      <div class="dynamic-row">
        <label>
          <span>School</span>
          <input type="text" class="edu-school" placeholder="University / School" value="${data.school ?? ""}">
        </label>
        <label>
          <span>Degree</span>
          <input type="text" class="edu-degree" placeholder="B.Sc, M.Sc, etc." value="${data.degree ?? ""}">
        </label>
      </div>
      <div class="dynamic-row">
        <label>
          <span>Start</span>
          <input type="text" class="edu-start" placeholder="2019" value="${data.start ?? ""}">
        </label>
        <label>
          <span>End</span>
          <input type="text" class="edu-end" placeholder="2023" value="${data.end ?? ""}">
        </label>
      </div>
      <div class="field">
        <label>
          <span>Description</span>
          <input type="text" class="edu-desc" placeholder="Optional notes" value="${data.desc ?? ""}">
        </label>
      </div>
      <div class="row-actions">
        <button type="button" class="btn danger btn-remove">Remove</button>
      </div>
    `;

    attachEducationHandlers(card);
    return card;
  }

  function attachEducationHandlers(card) {
    const inputs = card.querySelectorAll("input");
    inputs.forEach((inp) => inp.addEventListener("input", () => {
      updateEducationState();
      renderPreview();
      updateProgress();
    }));
    card.querySelector(".btn-remove").addEventListener("click", () => {
      card.remove();
      updateEducationState();
      renderPreview();
      updateProgress();
    });
  }

  function updateEducationState() {
    const cards = Array.from(educationList.querySelectorAll(".dynamic-card"));
    state.education = cards.map((card) => ({
      school: sanitize(card.querySelector(".edu-school").value),
      degree: sanitize(card.querySelector(".edu-degree").value),
      start: sanitize(card.querySelector(".edu-start").value),
      end: sanitize(card.querySelector(".edu-end").value),
      desc: sanitize(card.querySelector(".edu-desc").value)
    }));
  }

  function createExperienceRow(data = {}) {
    const card = document.createElement("div");
    card.className = "dynamic-card";
    card.innerHTML = `
      <div class="dynamic-row">
        <label>
          <span>Company</span>
          <input type="text" class="exp-company" placeholder="Company" value="${data.company ?? ""}">
        </label>
        <label>
          <span>Role</span>
          <input type="text" class="exp-role" placeholder="Job Title" value="${data.role ?? ""}">
        </label>
      </div>
      <div class="dynamic-row">
        <label>
          <span>Start</span>
          <input type="text" class="exp-start" placeholder="2022" value="${data.start ?? ""}">
        </label>
        <label>
          <span>End</span>
          <input type="text" class="exp-end" placeholder="Present" value="${data.end ?? ""}">
        </label>
      </div>
      <div class="field">
        <label>
          <span>Description</span>
          <input type="text" class="exp-desc" placeholder="Key impact, responsibilities" value="${data.desc ?? ""}">
        </label>
      </div>
      <div class="row-actions">
        <button type="button" class="btn danger btn-remove">Remove</button>
      </div>
    `;
    attachExperienceHandlers(card);
    return card;
  }

  function attachExperienceHandlers(card) {
    const inputs = card.querySelectorAll("input");
    inputs.forEach((inp) => inp.addEventListener("input", () => {
      updateExperienceState();
      renderPreview();
      updateProgress();
    }));
    card.querySelector(".btn-remove").addEventListener("click", () => {
      card.remove();
      updateExperienceState();
      renderPreview();
      updateProgress();
    });
  }

  function updateExperienceState() {
    const cards = Array.from(experienceList.querySelectorAll(".dynamic-card"));
    state.experience = cards.map((card) => ({
      company: sanitize(card.querySelector(".exp-company").value),
      role: sanitize(card.querySelector(".exp-role").value),
      start: sanitize(card.querySelector(".exp-start").value),
      end: sanitize(card.querySelector(".exp-end").value),
      desc: sanitize(card.querySelector(".exp-desc").value)
    }));
  }

  function renderPreview() {
    const name = sanitize(nameEl.value);
    const email = sanitize(emailEl.value);
    const phone = sanitize(phoneEl.value);
    const summary = sanitize(summaryEl.value);

    previewName.textContent = name || "Your Name";
    const contactParts = [email, phone].filter(Boolean);
    previewContact.textContent = contactParts.join(" • ") || "email@example.com • +1 000 000 0000";

    // Summary
    if (summary) {
      previewSummary.textContent = summary;
      previewSummarySection.classList.remove("hidden");
    } else {
      previewSummary.textContent = "";
      previewSummarySection.classList.add("hidden");
    }

    // Education
    previewEducation.innerHTML = "";
    const eduItems = state.education.filter(e => e.school || e.degree || e.start || e.end || e.desc);
    eduItems.forEach((e) => {
      const li = document.createElement("li");
      const title = document.createElement("div");
      title.className = "title";
      title.textContent = [e.degree, e.school].filter(Boolean).join(" — ");
      const sub = document.createElement("div");
      sub.className = "sub";
      sub.textContent = [e.start, e.end].filter(Boolean).join(" – ");
      const desc = document.createElement("div");
      desc.textContent = e.desc || "";
      li.appendChild(title);
      if (sub.textContent) li.appendChild(sub);
      if (desc.textContent) li.appendChild(desc);
      previewEducation.appendChild(li);
    });
    previewEducationSection.classList.toggle("hidden", eduItems.length === 0);

    // Experience
    previewExperience.innerHTML = "";
    const expItems = state.experience.filter(e => e.company || e.role || e.start || e.end || e.desc);
    expItems.forEach((e) => {
      const li = document.createElement("li");
      const title = document.createElement("div");
      title.className = "title";
      title.textContent = [e.role, e.company].filter(Boolean).join(" — ");
      const sub = document.createElement("div");
      sub.className = "sub";
      sub.textContent = [e.start, e.end].filter(Boolean).join(" – ");
      const desc = document.createElement("div");
      desc.textContent = e.desc || "";
      li.appendChild(title);
      if (sub.textContent) li.appendChild(sub);
      if (desc.textContent) li.appendChild(desc);
      previewExperience.appendChild(li);
    });
    previewExperienceSection.classList.toggle("hidden", expItems.length === 0);
  }

  function updateProgress() {
    // Define a simple scoring model
    const baseFields = 4; // name, email, phone, summary
    const skillsWeight = 1;
    const eduWeightPerRow = 2; // school + degree
    const expWeightPerRow = 2; // company + role

    const eduRows = educationList.querySelectorAll(".dynamic-card").length;
    const expRows = experienceList.querySelectorAll(".dynamic-card").length;

    const denom = baseFields + skillsWeight + eduRows * eduWeightPerRow + expRows * expWeightPerRow;

    let score = 0;
    if (sanitize(nameEl.value)) score++;
    if (sanitize(emailEl.value)) score++;
    if (sanitize(phoneEl.value)) score++;
    if (sanitize(summaryEl.value)) score++;

    const anySkill = skillChecks.some(c => c.checked) || state.skills.size > 0;
    if (anySkill) score += skillsWeight;

    const eduCards = Array.from(educationList.querySelectorAll(".dynamic-card"));
    eduCards.forEach(card => {
      if (sanitize(card.querySelector(".edu-school").value)) score++;
      if (sanitize(card.querySelector(".edu-degree").value)) score++;
    });

    const expCards = Array.from(experienceList.querySelectorAll(".dynamic-card"));
    expCards.forEach(card => {
      if (sanitize(card.querySelector(".exp-company").value)) score++;
      if (sanitize(card.querySelector(".exp-role").value)) score++;
    });

    const percent = Math.round((score / Math.max(denom, 1)) * 100);
    progressMeter.style.width = `${percent}%`;
    progressLabel.textContent = `${percent}% complete`;
  }

  // Event Bindings - Base inputs
  [nameEl, emailEl, phoneEl, summaryEl].forEach((el) => {
    el.addEventListener("input", () => { renderPreview(); updateProgress(); });
  });

  // Skills
  function addCustomSkill(value) {
    const val = sanitize(value);
    if (!val) return;
    state.skills.add(val);
    skillInput.value = "";
    renderSkills();
    renderPreview();
    updateProgress();
  }

  skillChecks.forEach(c => c.addEventListener("change", () => { renderSkills(); updateProgress(); }));
  addSkillBtn.addEventListener("click", () => addCustomSkill(skillInput.value));
  skillInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addCustomSkill(skillInput.value);
    }
  });

  // Dynamic Sections: Education
  addEducationBtn.addEventListener("click", () => {
    const card = createEducationRow();
    educationList.appendChild(card);
    updateEducationState();
    renderPreview();
    updateProgress();
  });

  // Dynamic Sections: Experience
  addExperienceBtn.addEventListener("click", () => {
    const card = createExperienceRow();
    experienceList.appendChild(card);
    updateExperienceState();
    renderPreview();
    updateProgress();
  });

  // Clear
  clearBtn.addEventListener("click", () => {
    // Clear basic inputs
    [nameEl, emailEl, phoneEl, summaryEl].forEach(el => el.value = "");
    // Uncheck skills
    skillChecks.forEach(c => c.checked = false);
    state.skills.clear();
    renderSkills();

    // Clear education & experience
    educationList.innerHTML = "";
    experienceList.innerHTML = "";
    state.education = [];
    state.experience = [];
    // Add one blank row for each
    const ed = createEducationRow();
    educationList.appendChild(ed);
    const ex = createExperienceRow();
    experienceList.appendChild(ex);
    updateEducationState();
    updateExperienceState();

    renderPreview();
    updateProgress();
  });

  // Print as PDF (via browser print)
  printBtn.addEventListener("click", () => {
    window.print();
  });

  // Bootstrap default one row each
  educationList.appendChild(createEducationRow());
  experienceList.appendChild(createExperienceRow());
  updateEducationState();
  updateExperienceState();
  renderSkills();
  renderPreview();
  updateProgress();
});


