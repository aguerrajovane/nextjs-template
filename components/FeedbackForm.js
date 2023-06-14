
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
    <input id="name" className="form-field text-base m-6 p-5 w-full" type="text" name="name" />
  
    <label htmlFor="email">Correo</label>
    <input id="email" className="form-field text-base m-6 p-5 w-full" type="email" name="email" required />
  
    <label htmlFor="feedback">Mensaje</label>
    <textarea id="feedback" className="form-field text-base m-6 p-5 w-full" wrap="soft" name="feedback" required></textarea>
    <button className="button bg-black text-white w-2/5 text-base m-6 p-5 w-full" type="submit">Enviar</button>
  </form>
  
  )
}