import { useState } from "react"

function login () {
    const [email, setEmail] = useState("")
  return (
    <div>
        <form action="">
            <input type="email" name="email" id="email" placeholder="Ejemplo: tucorreo@site.comn"
            onChange={(e) => console.log(e.target.value)}
            />
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default login
