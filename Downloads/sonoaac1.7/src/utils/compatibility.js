export function checkCompatibility(selectedParts) {
  const issues = [];
  const cpu = selectedParts.cpu;
  const motherboard = selectedParts.motherboard;
  if (cpu && motherboard) {
    if (cpu.socket !== motherboard.socket) {
      issues.push("CPU socket does not match motherboard socket.");
    }
  }
  return issues;
}
