
    // El año 2026 se utiliza para calcular el contador; el texto de la invitación conserva la fecha original.
    const weddingDate = new Date(2026, 11, 5, 12, 30, 0);
    function updateCountdown() {
      const remaining = weddingDate.getTime() - Date.now();
      const fields = ["days", "hours", "minutes", "seconds"];
      if (remaining <= 0) {
        fields.forEach(id => document.getElementById(id).textContent = "0");
        document.getElementById("countdownTitle").textContent = "¡Hoy celebramos este día tan especial!";
        return;
      }
      const values = [
        Math.floor(remaining / 86400000),
        Math.floor((remaining % 86400000) / 3600000),
        Math.floor((remaining % 3600000) / 60000),
        Math.floor((remaining % 60000) / 1000)
      ];
      fields.forEach((id, i) => document.getElementById(id).textContent = String(values[i]).padStart(2, "0"));
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);