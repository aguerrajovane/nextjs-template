import ButtonPrimary from "./ButtonPrimary"

export default function FeedbackForm() {
  return (
    <form 
        className="m-10 min-w-[300px] w-2/5" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field" 
        name="feedback" 
        method="POST" 
        action="/success">
    <input type="hidden" name="form-name" value="feedback" />
    <p className="hidden">
      <label>
        No llenar si eres humano: <input name="bot-field" />
      </label>
    </p>
  
    <label htmlFor="name">Nombre y apellido</label>
    <input id="name" className="form-field text-base m-6 p-5 w-full dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30" type="text" name="name" />
  
    <label htmlFor="email">Correo</label>
    <input id="email" className="form-field text-base m-6 p-5 w-full dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30" type="email" name="email" required />
  
    <label htmlFor="feedback">Mensaje</label>
    <textarea id="feedback" className="form-field text-base m-6 p-5 w-full dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30" wrap="soft" name="feedback" required></textarea>
    <ButtonPrimary className="" type="submit">Enviar</ButtonPrimary>
  </form>
  
  )
}