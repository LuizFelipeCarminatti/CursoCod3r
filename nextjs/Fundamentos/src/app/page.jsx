'use client'

import Header from '../components/Header'
import { useRouter } from 'next/navigation'

export default function Home() {

  const a = 1
  const b = 2

  const router = useRouter()

  return (
    <div style={{ fontFamily: 'cursive' }}>
        <h1>Next.js</h1>
        {a * b}
        <Header nome="Luiz Felipe Carminatti">
            <nav>
              <a href='#' onClick={() => router.push('/usuario')}>Usuário</a>
              <a href='#' onClick={() => router.push('/integracao')}>Integração</a>
              <a href='#' onClick={() => router.push('/estatico')}>Página estática</a>
            </nav>
        </Header>
    </div>
  );
}
