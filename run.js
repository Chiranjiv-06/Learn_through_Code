document.addEventListener("DOMContentLoaded", () => {
  // Handler for Alice's knowledge check
  const quizButtons = document.querySelectorAll(".quiz-btn");
  const feedback = document.getElementById("quiz-feedback");

  if (quizButtons.length > 0 && feedback) {
    quizButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const choice = button.getAttribute("data-answer");

        if (choice === "JavaScript") {
          feedback.textContent = "✓ Correct! JavaScript manages DOM tree mutations and event handling.";
          feedback.style.color = "var(--success)";
        } else {
          feedback.textContent = `✗ "${choice}" is incorrect. Try another option.`;
          feedback.style.color = "var(--danger)";
        }
      });
    });
  }

  // Handler for Bob's project inspection cards
  const caseButtons = document.querySelectorAll(".case-study-btn");
  const detailPanel = document.getElementById("project-details");
  const detailTitle = document.getElementById("detail-title");
  const detailContent = document.getElementById("detail-content");

  const projectMetrics = {
    telemetry: {
      title: "IoT Telemetry Pipeline — Performance Metrics",
      content: "Ingestion Latency: <40ms | Data Throughput: 1,500 payload frames/sec | Edge Fault Recovery: Continuous loop retry enabled."
    },
    backend: {
      title: "REST API & Event Gateway — Architecture Specifications",
      content: "p99 Execution Latency: 18ms | Connection Pool: Asynchronous non-blocking worker pool | Data Consistency: ACID compliant."
    }
  };

  if (caseButtons.length > 0 && detailPanel) {
    caseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.getAttribute("data-project");
        if (projectMetrics[key]) {
          detailTitle.textContent = projectMetrics[key].title;
          detailContent.textContent = projectMetrics[key].content;
          detailPanel.style.display = "block";
          detailPanel.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }
});