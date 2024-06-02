
import {  GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {
 
  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (

    <>
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal Bruna Teles | Copyright: {data} </p>
            <p className='text-lg'>Acesse minhas redes sociais</p>
            <div className='flex gap-2'>

            <a href="https://www.linkedin.com/in/brunateles/" target="_blank">
              <LinkedinLogo size={48} weight='bold' />        </a>

                    
                <a href="https://github.com/bru-tls/" target="_blank">
                  <GithubLogo size={48} weight='bold' /> </a>

            </div>
          </div>
        </div>
      </>
  )
}
return (
  <>
    {footerComponent}
  </>
)
}

export default Footer