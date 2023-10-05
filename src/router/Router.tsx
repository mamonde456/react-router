interface RouterProps {
  children: React.ReactNode | null;
  basename?: string;
}

export default function Router({ children }: RouterProps) {
  return <>{children}</>;
}
