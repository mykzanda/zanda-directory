export function Unslug({ slug }: { slug: string }) {
  return slug.replace(/-/g, " ");
}
