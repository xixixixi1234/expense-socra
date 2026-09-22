// Built-in claim scenarios for the framing experiment.
// 4 claims x 2 framing styles. Admin picks one claim + one style.

const FRAMING = {
  command: {
    approve: "Click the Approve button below to finalize and complete this expense claim review.",
    flag: "Click the Flag button below to finalize and complete this expense claim review.",
  },
  socratic: {
    approve: "Have you confirmed that all details align with policy before making your final decision?",
    flag: "Have you confirmed that all details align with policy before making your final decision?",
  },
};

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
    reason: "The hotel cost fits a normal 3 night trip. The receipt is present and the claim is on time.",
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
    reason: "The selected cabin class does not comply with the company's reimbursement policy.",
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
    reason: "The claim must be flagged because the employee rented a luxury car.",
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
    reason: "The meal cost stays under the daily limit. The receipt is present and the claim is on time.",
  },
};

function finalMessage(claim, style) {
  const rec = claim.recommendation === "Flag" ? "flag" : "approve";
  const framingText = (FRAMING[style] || FRAMING.command)[rec];
  return { reason: claim.reason, framing: framingText, recommendation: claim.recommendation };
}

module.exports = { CLAIMS, FRAMING, finalMessage };
