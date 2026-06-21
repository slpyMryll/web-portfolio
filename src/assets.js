export const projectData = [
  {
    title: 'Project Manager & Co-Developer',
    description:
      'OnTrack is a project tracking and management platform built for the VSU Supreme Student Council to efficiently monitor and manage projects.',
    bgImage: '/ontrack-dashb.png',
  },
  {
    title: 'Web Developer',
    description:
      'BrainBento is a study companion platform designed to improve learning accessibility through structured review materials and flashcard-based learning.',
    bgImage: '/BrainBento.png',
  },
  {
    title: 'Application Developer',
    description:
      'Talk A Boo is a community-driven mobile application designed for sharing, exploring, and interacting with user-generated stories.',
    bgImage: '/talkABoo.png',
  },
];

import emailjs from "@emailjs/browser";

export const emailConfig = {
  serviceId: "service_6e4ggac",
  templateId: "template_479gqeg",
  publicKey: "VzL3x9_Is819piKj9",
};

export async function sendContactEmail(form) {
  return emailjs.sendForm(
    emailConfig.serviceId,
    emailConfig.templateId,
    form,
    emailConfig.publicKey
  );
}