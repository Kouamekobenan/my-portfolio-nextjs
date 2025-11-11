import { redirect } from "next/navigation";

export default function RootPage() {
  // Redirige vers la langue par défaut
  redirect("/fr");
}
