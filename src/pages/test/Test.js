import React, { useState } from "react";

function Test() {
  const [data, setData] = useState({
    company: "nmc1",
    domain: "his.axonichealth.co.in",
    suggestions: [],
  });

  const suffixes = ["new", 1, 2, 3, 4, 5, 6, 7, 8, 9];

  async function checkAvailability(subdomain) {
    const fqdn = `${subdomain}.`;
    const url = `https://dns.google/resolve?name=${fqdn}`;
    try {
      const response = await fetch(url);
      const result = await response.json();

      if (result.Status === 0 && result.Answer) {
        return false; // Domain is taken
      }
      return true; // Domain is available
    } catch (error) {
      console.error("Error checking domain:", error);
      return false; // Treat as unavailable on error
    }
  }

  async function generateSuggestions() {
    const baseSuggestions = [
      `${data.company}.${data.domain}`,
      `${data.company.slice(0, 1)}.${data.domain}`,
      `${data.company.slice(0, 3)}.${data.domain}`,
    ];

    const finalSuggestions = [];

    for (let base of baseSuggestions) {
      let current = base;
      let suffixIndex = 0;

      while (!(await checkAvailability(current)) && suffixIndex < suffixes.length) {
        current = `${base.split(".")[0]}${suffixes[suffixIndex]}.${data.domain}`;
        suffixIndex++;
      }

      if (await checkAvailability(current)) {
        finalSuggestions.push(current);
      }
    }

    setData((prev) => ({ ...prev, suggestions: finalSuggestions }));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Company Name"
        value={data.company}
        onChange={(e) => setData({ ...data, company: e.target.value })}
      />
      <input
        type="text"
        placeholder="Base Domain"
        value={data.domain}
        onChange={(e) => setData({ ...data, domain: e.target.value })}
      />
      <button onClick={generateSuggestions}>Generate Suggestions</button>

      <h3>Available Suggestions:</h3>
      <ul>
        {data.suggestions.map((sug, index) => (
          <li key={index}>{sug}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
