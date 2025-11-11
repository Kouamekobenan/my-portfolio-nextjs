"use client";
import React, { useState } from "react";
import { Send, CheckCircle, XCircle, Loader } from "lucide-react";

interface ContactFormProps {
  translations: Record<string, string>;
}

export default function ContactForm({ translations: t }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // NOTE: L'URL formspree a été conservée.
      const response = await fetch("https://formspree.io/f/myzbebnd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Définition de la classe pour les champs de saisie
  const inputClass =
    "w-full bg-white/5 border border-purple-500/30 text-white rounded-xl px-4 py-3 \
    focus:ring-2 focus:ring-blue-400 focus:border-blue-400/50 outline-none transition duration-300 \
    placeholder-gray-500 shadow-inner";

  // Fonction pour rendre le contenu du bouton
  const renderButtonContent = () => {
    switch (status) {
      case "loading":
        return (
          <>
            <Loader className="w-5 h-5 mr-3 animate-spin" />
            {t?.sending ?? "Envoi en cours..."}
          </>
        );
      case "success":
        return (
          <>
            <CheckCircle className="w-5 h-5 mr-3" />
            {t?.success ?? "Message envoyé !"}
          </>
        );
      default:
        return (
          <>
            <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            {t?.submit ?? "Envoyer le message"}
          </>
        );
    }
  };

  return (
    // 💡 Background cohérent avec About
    <section className="bg-slate-950 py-24" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Titre (Style Gradient) */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            {t?.title ?? "Contactez-moi"}!
          </span>
        </h2>
        {/* Sous-titre */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          {t?.subtitle ??
            "Une question ? Un projet passionnant ? Écrivez-moi directement ci-dessous. Je vous répondrai dans les plus brefs délais."}
        </p>

        {/* Formulaire (Glassmorphism Card) */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-left 
            bg-white/5 backdrop-blur-lg p-10 rounded-3xl 
            shadow-2xl border border-purple-500/20 
            transition-all duration-500"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              {t?.nameLabel ?? "Nom complet"}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t?.namePlaceholder ?? "Votre nom"}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              {t?.emailLabel ?? "Adresse e-mail"}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={t?.emailPlaceholder ?? "votre.email@exemple.com"}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              {t?.messageLabel ?? "Message"}
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={
                t?.messagePlaceholder ??
                "Détaillez votre projet ou votre question ici..."
              }
              className={`${inputClass} min-h-[120px]`}
            ></textarea>
          </div>

          {/* Bouton d'envoi (Néon gradient et icône dynamique) */}
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="group relative flex items-center justify-center w-full
              bg-gradient-to-r from-purple-600 to-blue-600 
              text-white font-bold py-3 rounded-full 
              shadow-xl shadow-purple-500/50 
              transition-all duration-300 
              hover:scale-[1.01] hover:shadow-purple-400/70
              disabled:opacity-70 disabled:shadow-none disabled:cursor-not-allowed"
          >
            {renderButtonContent()}
          </button>

          {/* Messages de statut */}
          {status === "error" && (
            <p className="flex items-center justify-center text-red-400 text-sm text-center mt-4 bg-red-900/20 p-3 rounded-xl border border-red-500/30">
              <XCircle className="w-5 h-5 mr-2" />
              {t?.error ??
                "Oups ! Une erreur est survenue. Veuillez vérifier votre connexion et réessayer."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
