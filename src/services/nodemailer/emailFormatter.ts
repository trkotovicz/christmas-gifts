import { template } from './emailTemplate';

export const emailFormatter = (
  name: string,
  title: string,
  author: string,
  year: string,
  pages: string,
  language: string,
) => {
  const replacements: { [key: string]: string } = {
    name: name,
    title: title,
    author: author,
    year: year,
    pages: pages,
    language: language,
  };

  const formattedEmail = {
    from: template.from,
    subject: template.subject,
    body: template.body.replace(/\${(.*?)}/g, (_, match) => {
      const variableName = match.trim();
      return replacements[variableName] || '';
    }),
  };

  return formattedEmail;
};
