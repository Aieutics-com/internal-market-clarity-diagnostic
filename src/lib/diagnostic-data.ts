export interface Question {
  id: number;
  text: string;
}

export interface Dimension {
  id: string;
  name: string;
  subtitle: string;
  questions: Question[];
  threshold: number; // score at or below this = show reflection
  reflection: string;
  reflectionPrompt: string;
}

export type Status = "green" | "amber" | "red";

export interface DimensionResult {
  dimension: Dimension;
  score: number;
  maxScore: number;
  status: Status;
  percentage: number;
}

export interface PatternInterpretation {
  id: string;
  label: string;
  description: string;
  condition: (results: DimensionResult[]) => boolean;
}

export const DIMENSIONS: Dimension[] = [
  {
    id: "internal-customer-identification",
    name: "Internal Customer Identification",
    subtitle:
      "Can you name the people — not functions — who will change their behaviour if this succeeds?",
    questions: [
      {
        id: 1,
        text: "Can you name at least three people — by name and role — inside the organisation who will need to change how they work if this initiative succeeds?",
      },
      {
        id: 2,
        text: "Do you know specifically what those people are currently doing on Monday morning that this initiative would change?",
      },
      {
        id: 3,
        text: "Is there evidence that these people are actively experiencing the problem this initiative is meant to solve — not just that they've agreed it sounds valuable when asked?",
      },
      {
        id: 4,
        text: "Can you clearly distinguish the people who would need to change their behaviour (who will adopt) from those who fund the initiative (sponsors) and those who simply have an opinion on it (stakeholders)?",
      },
    ],
    threshold: 2,
    reflection:
      "Your internal customer is still a function, not a person. Functions don't change their Monday morning. People do.",
    reflectionPrompt:
      "If you emailed three people by name and asked them what they would need to stop doing to make room for this initiative, who would those three people be — and do you already know their answer?",
  },
  {
    id: "vp-translation",
    name: "Value Proposition Translation",
    subtitle:
      "Is the value stated in the internal customer's vocabulary — not yours?",
    questions: [
      {
        id: 5,
        text: "Can you state why this initiative should matter to the people who would need to adopt it — using the exact words they use to describe their own work, with no strategy, innovation, or programme terminology?",
      },
      {
        id: 6,
        text: "Have you stated the case for this initiative directly to at least one person who would need to adopt it — and did they recognise themselves in it without being prompted?",
      },
      {
        id: 7,
        text: "Does your case for this initiative explain why it is better than what those people are already doing — on criteria they actually care about, not criteria you think they should care about?",
      },
      {
        id: 8,
        text: "Have you considered what happens to a person's career and standing if they adopt this initiative and it is then discontinued — and does your case for adoption account for that risk?",
      },
    ],
    threshold: 2,
    reflection:
      "Your value proposition exists in your language, not theirs. If the internal customer can't repeat it without your slides, you haven't translated. You've presented.",
    reflectionPrompt:
      "If one of your internal customers had to explain this initiative to their team tomorrow — with no documents from you — what words would they use? Have you ever heard those words?",
  },
  {
    id: "adoption-cost-awareness",
    name: "Adoption Cost Awareness",
    subtitle:
      "Has the initiative team counted what adoption will cost the people whose behaviour needs to change?",
    questions: [
      {
        id: 9,
        text: "Have you estimated how much time and effort it will take for people to learn and integrate this initiative into their working week — and is that estimate based on what they say, not what you assume?",
      },
      {
        id: 10,
        text: "Have you considered the career risk of adoption: whether being publicly associated with this initiative could create exposure for someone if it stalls, or mark them as 'the innovation person' in a culture that rewards operational delivery?",
      },
      {
        id: 11,
        text: "Have you mapped what people will have to stop doing — or stop prioritising — while adopting this initiative, and whether those activities affect their performance review?",
      },
      {
        id: 12,
        text: "Have you considered what it would cost people to revert to their previous way of working if this initiative is discontinued — and have you taken steps to make that reversal easier or less risky?",
      },
    ],
    threshold: 2,
    reflection:
      "The initiative team is counting the value. The internal customer is counting the cost. You've been working with one column. They're working with two.",
    reflectionPrompt:
      "Of the four cost types — workload, political, opportunity, switching — which one has the most power to kill adoption in your specific context? Is that assessment yours, or did an internal customer tell you that?",
  },
  {
    id: "triangle-health",
    name: "Triangle Health",
    subtitle:
      "Is the relationship between your initiative team, your sponsor, and the people you need to adopt this understood and actively managed?",
    questions: [
      {
        id: 13,
        text: "Do you understand what the executive sponsor actually needs from this initiative — what success looks like for them personally, and what would cause them to withdraw support — beyond their stated backing?",
      },
      {
        id: 14,
        text: "Have you had a direct conversation with at least one person who would need to adopt this initiative about why they personally would or would not change how they work?",
      },
      {
        id: 15,
        text: "Can you identify the most likely way this initiative could fail — well-funded but never actually adopted by the people who matter, genuinely supported by users but without the institutional backing to sustain it, or appearing to progress while no one's actual working patterns are changing — and do you have specific evidence for that assessment?",
      },
    ],
    threshold: 1,
    reflection:
      "The triangle has three vertices. You're managing two. The one you haven't managed is where the initiative will stall.",
    reflectionPrompt:
      "Which of the three failure modes — funded but not adopted, grassroots without structure, or innovation theatre — is your initiative closest to right now? What evidence supports that answer, and what would have to change before it didn't?",
  },
  {
    id: "channel-classification-alignment",
    name: "Channel & Classification Alignment",
    subtitle:
      "Is your approach to reaching internal customers calibrated for what your initiative actually is?",
    questions: [
      {
        id: 16,
        text: "Have you clearly defined what kind of change this initiative actually requires — incremental improvement to existing practice, a new capability alongside current work, or a fundamental shift in how people operate — and is that distinction actively shaping how you approach the adoption challenge?",
      },
      {
        id: 17,
        text: "Is the way you're reaching the people who need to adopt this initiative appropriate for the scale of change it requires — for example, not relying primarily on top-down instruction for something that requires people to fundamentally change how they work?",
      },
      {
        id: 18,
        text: "Is the effort you've invested in identifying who would adopt this, understanding why they would, and mapping what it will cost them — proportionate to how significant a change this initiative actually requires?",
      },
    ],
    threshold: 1,
    reflection:
      "Classification isn't a label you apply once and file. It determines everything: who the internal customer is, what the value proposition must do, how to reach them, and how much adoption cost is acceptable before the initiative becomes unviable.",
    reflectionPrompt:
      "If your initiative is transformation-class, are you doing transformation-level Layer 1 work — months of direct customer contact, multi-channel reach, value proposition co-development? Or are you treating it like an optimisation?",
  },
];

export const PATTERN_INTERPRETATIONS: PatternInterpretation[] = [
  {
    id: "funded-not-adopted",
    label: "Funded but not adopted",
    description:
      "The budget is allocated. The governance structure is established. The sponsor relationship is working. But the people who would need to change how they work don't yet have a value proposition in their vocabulary, and the costs of adoption haven't been mapped. This is the most common Layer 1 failure mode — and the hardest to detect, because funding creates the appearance of progress. The initiative team is solving a Layer 0 problem. The Layer 1 problem is untouched.",
    condition: (results) => {
      const vp = results.find((r) => r.dimension.id === "vp-translation");
      const cost = results.find(
        (r) => r.dimension.id === "adoption-cost-awareness"
      );
      return (
        vp !== undefined &&
        cost !== undefined &&
        vp.status === "red" &&
        cost.status === "red"
      );
    },
  },
  {
    id: "translation-gap",
    label: "Translation gap",
    description:
      "You know who your internal customers are, and you've done the work to understand what adoption costs them. But you cannot yet state the value proposition in their vocabulary — or it hasn't been validated with them. The understanding exists. The translation doesn't. This is often a proximity problem: the initiative team knows the customer exists but has not spent enough time in their operational environment to speak their language.",
    condition: (results) => {
      const d1 = results.find(
        (r) => r.dimension.id === "internal-customer-identification"
      );
      const vp = results.find((r) => r.dimension.id === "vp-translation");
      const cost = results.find(
        (r) => r.dimension.id === "adoption-cost-awareness"
      );
      return (
        d1 !== undefined &&
        vp !== undefined &&
        cost !== undefined &&
        (d1.status === "green" || d1.status === "amber") &&
        vp.status === "red" &&
        (cost.status === "green" || cost.status === "amber")
      );
    },
  },
  {
    id: "adoption-cost-blindness",
    label: "Adoption cost blindness",
    description:
      "The value proposition sounds compelling. But the adoption cost analysis is missing. Internal customers are doing a private calculation you haven't done — and their answer is different from yours. This is why initiatives stall after pilot sign-up: the value proposition secured agreement. The unexamined adoption costs prevented behaviour change.",
    condition: (results) => {
      const vp = results.find((r) => r.dimension.id === "vp-translation");
      const cost = results.find(
        (r) => r.dimension.id === "adoption-cost-awareness"
      );
      return (
        vp !== undefined &&
        cost !== undefined &&
        (vp.status === "green" || vp.status === "amber") &&
        cost.status === "red"
      );
    },
  },
  {
    id: "triangle-misread",
    label: "Triangle misread",
    description:
      "Real work has been done on at least one dimension of internal market clarity — but the three-way dynamic between the initiative team, the sponsor, and the internal customer hasn't been mapped. Unmanaged triangles don't stay stable: they produce one of three failure modes, usually the one the initiative team was least expecting.",
    condition: (results) => {
      const triangle = results.find(
        (r) => r.dimension.id === "triangle-health"
      );
      const othersNotRed = results.filter(
        (r) =>
          r.dimension.id !== "triangle-health" &&
          (r.status === "green" || r.status === "amber")
      );
      return (
        triangle !== undefined &&
        triangle.status === "red" &&
        othersNotRed.length >= 1
      );
    },
  },
  {
    id: "foundation-before-pilots",
    label: "Foundation before pilots",
    description:
      "Internal market clarity is at the hypothesis stage across all dimensions. This is not a refinement problem or a communication problem — it is a discovery problem. Before designing a pilot, building the internal business case, or engaging procurement, the priority is direct, substantive contact with the people who would need to change their behaviour. Not stakeholder workshops. Not steering committee presentations. Conversations in their operational environment, without slides, about why they would or would not change how they work.",
    condition: (results) => {
      const totalScore = results.reduce((sum, r) => sum + r.score, 0);
      return totalScore <= 8;
    },
  },
];

export const COI_COPY = {
  heading: "The Downstream Cost of Skipping Layer 1",
  intro:
    "Layer 1 failures don't surface as Layer 1 problems. They surface at Layer 2 as low pilot adoption, at Layer 3 as results that can't be replicated, and at Layer 4 as organisations reverting to previous behaviours after the programme ends.",
  body: "By the time the Layer 1 failure is visible, the initiative has already consumed significant resources — pilot time, sponsor goodwill, team credibility — trying to solve a Layer 2 or Layer 3 problem that isn't one. Initiative teams misattribute the cause. They invest in change management (the symptom) rather than internal market clarity (the cause). The question this diagnostic surfaces is not \"how do we fix adoption?\" It is: \"Do we have an internal market to adopt anything?\"",
};

export const CTA_COPY = {
  heading: "What This Diagnostic Surfaces — and What It Can't Fix",
  body: `This tool reveals where your internal market clarity has structural gaps. It doesn't close them — because resolution requires direct, substantive contact with the people who would need to change their behaviour: observing them in their operational environment, building relationships, and co-developing the value proposition in their vocabulary.

Self-assessment can name the gap. It cannot bridge it.`,
  callout:
    "If your profile shows gaps in two or more dimensions, a structured Layer 1 workshop can help identify what has to be true before any pilot is designed — and what kind of direct customer work would get you there.",
  triangleReminder:
    "This diagnostic focuses on Layer 1. If your results raise questions across multiple layers — about pilot design, scaling, or embedding — the Corporate Innovation Diagnostic provides a full-frame view of where your organisation stands across the entire Critical Path.",
  contact: {
    name: "Alexandra N.",
    title: "Founder, Aieutics",
    subtitle: "Executive coaching & strategic transformation",
    website: "aieutics.com",
    email: "hello@aieutics.com",
  },
};

export const ATTRIBUTION =
  "Developed by Aieutics from the Critical Path Layers (Corporate) framework. Based on patterns observed across executive coaching, corporate accelerator programmes, and consulting engagements.";
