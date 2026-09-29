// Built-in claim scenarios for the framing experiment.
// 4 claims x 2 framing styles (A = command, S = socratic/question).
// Each claim carries its own reason + per-style framing sentence,
// taken from the approved screenshots.

const CLAIMS = {
  linda: {
    id: "linda",
    label: "Linda Peterson - Hotel (Approve)",
    fields: {
      employee: "Linda Peterson", department: "Finance", claimId: "EH-2026-0801-010",
      tripPurpose: "Business trip", destination: "Boston",
      tripDates: "Aug 1 - Aug 4, 2026", invoiceDate: "Aug 4, 2026",
      submitted: "Aug 5, 2026", category: "Hotel",
      description: "Hotel stay in Boston - Three nights - Standard King",
      amount: "515.03", currency: "USD", total: "$515.03", managerApproval: "No",
    },
    attachments: [{ name: "Claim_Linda_Peterson.png", src: "/invoices/linda.png", kind: "image" }],
    recommendation: "Approve",
    reason: "This claim should be approved: it's a 3-night hotel stay at $150 per night, receipt attached, and it was submitted on time.",
    framing: {
      command: "Proceed as recommended: click Approve below now to finalize this hotel stay claim.",
      socratic: "Before you approve: have you checked that the policy allows this hotel stay?",
    },
  },
  maria: {
    id: "maria",
    label: "Maria Collins - Flight (Flag)",
    fields: {
      employee: "Maria Collins", department: "Product development", claimId: "EH-2026-0801-013",
      tripPurpose: "Business trip", destination: "Denver",
      tripDates: "Aug 1 - Aug 3, 2026", invoiceDate: "Aug 1, 2026",
      submitted: "Aug 10, 2026", category: "Flight",
      description: "Round trip flight: Chicago - Denver",
      amount: "610.00", currency: "USD", total: "$610.00", managerApproval: "No",
    },
    attachments: [{ name: "Claim_Maria_Collins.png", src: "/invoices/maria.png", kind: "image" }],
    recommendation: "Flag",
    reason: "This claim should be flagged: the round trip has two 3-hour legs, booked in Business cabin.",
    framing: {
      command: "Proceed as recommended: click Flag below now to finalize this round-trip booking claim.",
      socratic: "Before you flag: have you checked that the policy disallows this business-class booking?",
    },
  },
  james: {
    id: "james",
    label: "James Cooper - Car rental (Flag)",
    fields: {
      employee: "James Cooper", department: "Public relations", claimId: "EH-2026-0801-015",
      tripPurpose: "Business meeting", destination: "Los Angeles",
      tripDates: "Jul 18 - Jul 20, 2026", invoiceDate: "Jul 19, 2026",
      submitted: "Aug 1, 2026", category: "Car rental",
      description: "2 Days car rental - Mercedes-Maybach S-Class",
      amount: "2450.00", currency: "USD", total: "$2450.00", managerApproval: "Yes",
    },
    attachments: [
      { name: "Claim_James_Cooper.png", src: "/invoices/james.png", kind: "image" },
      { name: "James_Cooper_car_rental_expense_leader_approval.pdf", src: "/invoices/james_approval.pdf", kind: "pdf" },
    ],
    recommendation: "Flag",
    reason: "This claim should be flagged: it's an Ultra Luxury rental, and there's a supervisor approval document attached.",
    framing: {
      command: "Proceed as recommended: click Flag below now to finalize this luxury rental claim.",
      socratic: "Before you flag: have you checked that the policy disallows this luxury rental?",
    },
  },
  david: {
    id: "david",
    label: "David Clark - Meals (Approve)",
    fields: {
      employee: "David Clark", department: "Sales", claimId: "EH-2026-0801-019",
      tripPurpose: "Client dinner", destination: "Chicago",
      tripDates: "Aug 1, 2026", invoiceDate: "Aug 1, 2026",
      submitted: "Aug 9, 2026", category: "Meals",
      description: "Grilled Salmon, Ribeye Steak, Wine - Red, Water",
      amount: "75.78", currency: "USD", total: "$75.78", managerApproval: "No",
    },
    attachments: [{ name: "Claim_David_Clark.png", src: "/invoices/david.png", kind: "image" }],
    recommendation: "Approve",
    reason: "This claim should be approved: the total is $75.78, under the daily meal limit, and the receipt is itemized.",
    framing: {
      command: "Proceed as recommended: click Approve below now to finalize this meal receipt claim.",
      socratic: "Before you approve: have you checked that the policy allows this meal receipt?",
    },
  },
};

function finalMessage(claim, style) {
  var s = (style === "socratic") ? "socratic" : "command";
  var framingText = (claim.framing && claim.framing[s]) || "";
  return { reason: claim.reason, framing: framingText, recommendation: claim.recommendation };
}

module.exports = { CLAIMS, finalMessage };
