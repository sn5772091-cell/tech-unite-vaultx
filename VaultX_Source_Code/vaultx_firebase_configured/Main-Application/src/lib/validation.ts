export function validatePortfolio(name: string, description: string): {name:string;description:string} {
  const n=name.trim(); const d=description.trim();
  if(n.length<1||n.length>80) throw new Error('Portfolio name must contain 1–80 characters');
  if(d.length>400) throw new Error('Description must not exceed 400 characters');
  return {name:n,description:d};
}
export function safeCsvCell(value: unknown): string {
 const input=String(value ?? '');
 const sanitized=/^[\s]*[=+@\-]/.test(input) ? "'"+input : input;
 return '"'+sanitized.replace(/"/g,'""')+'"';
}
