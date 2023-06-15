import { useState } from 'react';
import Link from 'next/link'
import ButtonPrimary from "./ButtonPrimary";

export default function FeedbackForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar las acciones necesarias para enviar los datos del formulario, como una solicitud HTTP o almacenamiento en una base de datos.

    // Luego, puedes mostrar el mensaje de confirmación y refrescar los campos del formulario.
    setFormSubmitted(true);
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <div>
      {formSubmitted ? (
        <p>Gracias por contactarnos. Haz clic <Link href="/" className="underline underline-offset-4">aquí</Link> para volver al inicio.</p>
      ) : (
        <form
          className="m-10 min-w-[300px] w-2/5"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="feedback"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="feedback" />
          <p className="hidden">
            <label>
              No llenar si eres humano: <input name="bot-field" />
            </label>
          </p>

          <label htmlFor="name">Nombre y apellido</label>
          <input
            id="name"
            className="form-field text-base m-6 p-5 w-full dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Correo</label>
          <input
            id="email"
            className="form-field text-base m-6 p-5 w-full dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="feedback">Mensaje</label>
          <textarea
            id="feedback"
            className="form-field text-base m-6 p-5 w-full dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30"
            wrap="soft"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
          <ButtonPrimary className="" type="submit">
            Enviar
          </ButtonPrimary>
        </form>
      )}
    </div>
  );
}
