const apiBase = 'https://your-api-id.execute-api.us-west-1.amazonaws.com/prod';

const output = document.getElementById("output");

document.getElementById("jobForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const userId = document.getElementById("userId").value;
  const jobId = document.getElementById("jobId").value;
  const jobTitle = document.getElementById("jobTitle").value;

  const body = {
    UserId: userId,
    JobId: jobId,
    JobTitle: jobTitle
  };

  const res = await fetch(`${apiBase}/putJobApplication`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
});

async function getJob() {
  const userId = document.getElementById("userId").value;
  const jobId = document.getElementById("jobId").value;

  const res = await fetch(`${apiBase}/getJobApplication?UserId=${userId}&JobId=${jobId}`);
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
}

async function deleteJob() {
  const userId = document.getElementById("userId").value;
  const jobId = document.getElementById("jobId").value;

  const res = await fetch(`${apiBase}/deleteJobApplication?UserId=${userId}&JobId=${jobId}`, {
    method: "DELETE"
  });

  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
}