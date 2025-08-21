import React, { useRef, useState, useEffect } from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { contatos } from "../../config/Config";
import "./Contato.css";

export default function Contato() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });

  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  // Inicializa a lib (algumas versões precisam disso)
  useEffect(() => {
    try {
      if (publicKey && emailjs.init) {
        emailjs.init(publicKey);
      }
    } catch (e) {
      console.error("Falha ao inicializar EmailJS:", e);
    }
  }, [publicKey]);

  function handleWhatsAppUrl() {
    const base = `https://wa.me/${contatos.whatsapp}`;
    const text = encodeURIComponent("Olá! Vi seu portfólio e gostaria de conversar. 🙂");
    return `${base}?text=${text}`;
  }

  function validate(form) {
    const name = form.from_name.value.trim();
    const email = form.reply_to.value.trim();
    const message = form.message.value.trim();
    if (name.length < 2) return "Informe seu nome completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Informe um e-mail válido.";
    if (message.length < 10) return "Escreva uma mensagem um pouco maior.";
    return "";
  }

  async function onSubmit(e) {
    e.preventDefault();
    const form = formRef.current;

    // Diagnóstico de ENV
    if (!publicKey || !serviceId || !templateId) {
      console.warn("ENV ausente:", { publicKey, serviceId, templateId });
      setStatus({
        type: "error",
        message:
          "Configuração de envio ausente. Verifique seu .env (VITE_EMAILJS_PUBLIC_KEY / SERVICE_ID / TEMPLATE_ID) e reinicie o dev server."
      });
      return;
    }

    const error = validate(form);
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    try {
      setStatus({ type: "loading", message: "Enviando..." });

      // Opcional: envia também um 'title' para usar no Subject do template
      if (!form.title) {
        const hidden = document.createElement("input");
        hidden.type = "hidden";
        hidden.name = "title";
        hidden.value = "Contato pelo Portfólio";
        form.appendChild(hidden);
      }

      const res = await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      console.log("EmailJS OK:", res);
      setStatus({ type: "success", message: "Mensagem enviada com sucesso! 🎉" });
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        type: "error",
        message:
          "Não foi possível enviar agora. Confira os IDs do EmailJS e tente novamente (veja o console para detalhes)."
      });
    }
  }

  return (
    <section id="contact" className="contato">
      <header className="contato__header">
        <h1>Contato</h1>
        <p>Fale comigo pelos ícones ou envie uma mensagem pelo formulário.</p>
      </header>

      <div className="contato__icons">
        {contatos.email && (
          <a className="contact-icon" href={`mailto:${contatos.email}`} aria-label="E-mail">
            <FaEnvelope />
          </a>
        )}
        {contatos.whatsapp && (
          <a className="contact-icon" href={handleWhatsAppUrl()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        )}
        {contatos.linkedin && (
          <a className="contact-icon" href={contatos.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        )}
        {contatos.github && (
          <a className="contact-icon" href={contatos.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        )}
      </div>

      <form ref={formRef} className="contato__form" onSubmit={onSubmit} noValidate>
        {/* Estes names PRECISAM bater com o template */}
        <div className="form-row">
          <label htmlFor="from_name">Nome</label>
          <input id="from_name" name="from_name" type="text" placeholder="Seu nome" required />
        </div>

        <div className="form-row">
          <label htmlFor="reply_to">E-mail</label>
          <input id="reply_to" name="reply_to" type="email" placeholder="voce@exemplo.com" required />
        </div>

        <div className="form-row">
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" rows={6} placeholder="Escreva sua mensagem..." required />
        </div>

        <button type="submit" className="btn-send" disabled={status.type === "loading"}>
          <FaPaperPlane />
          <span>{status.type === "loading" ? "Enviando..." : "Enviar"}</span>
        </button>

        {status.type && status.type !== "loading" && (
          <p className={`form-status form-status--${status.type}`}>{status.message}</p>
        )}
      </form>
    </section>
  );
}
